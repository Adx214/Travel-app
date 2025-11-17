import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router";

const CombinedForgotPassword = () => {
  const [step, setStep] = useState(1);

  // React Hook Form instances for 3 steps
  const emailForm = useForm();
  const otpForm = useForm();
  const passwordForm = useForm();
  const navigate = useNavigate();
  const HandleEmailSubmit = async(data) => {
    const res = await axios.post("http://localhost:3000/userapi/send-otp",data )
    if (res.status === 200) {
      alert("OTP sent to your email");
    }
    console.log("Email Submitted:", data);
    setStep(2);
  }
  const HandleOTPSubmit = async(data) => {
    const res = await axios.post("http://localhost:3000/userapi/verify-otp",{
      email: emailForm.getValues("email"), // get email from previous step
      otp: data.otp,
    } )
    if (res.status === 200) {
      alert("OTP verified");
      setStep(3);
    }
    console.log("OTP Submitted:", data);
  }
  const HandlePasswordSubmit = async(data) => {
    const res = await axios.post("http://localhost:3000/userapi/reset-password",{
      email: emailForm.getValues("email"), // get email from previous step
      newPassword: data.newPassword,
    } )
    if (res.status === 200) {
      alert("Password reset successful");
      localStorage.removeItem("token");
      navigate("/login");
    }
    console.log("Password Submitted:", data);
  }

  return (
    <div className="min-h-screen flex justify-center items-center bg-background-light px-4">
      <div className="w-full max-w-md bg-white p-8 shadow-xl rounded-2xl">

        {/* TITLE */}
        <h1 className="text-3xl font-black text-[#111618] text-center mb-6">
          Forgot Password
        </h1>

        {/* STEP INDICATOR */}
        <div className="flex justify-center gap-3 mb-6">
          <div className={`w-3 h-3 rounded-full ${step >= 1 ? "bg-primary" : "bg-gray-300"}`}></div>
          <div className={`w-3 h-3 rounded-full ${step >= 2 ? "bg-primary" : "bg-gray-300"}`}></div>
          <div className={`w-3 h-3 rounded-full ${step >= 3 ? "bg-primary" : "bg-gray-300"}`}></div>
        </div>

        {/* STEP 1 -> EMAIL */}
        {step === 1 && (
          <form
            onSubmit={emailForm.handleSubmit(HandleEmailSubmit)}
            className="flex flex-col gap-4"
          >
            {emailForm.formState.isSubmitting && (
              <p className="text-green-500 text-sm">
               Sending OTP .....
              </p>
            )}

            <label className="font-medium">Enter your email</label>
            <input
              type="email"
              placeholder="your@email.com"
              className="w-full p-3 border rounded-lg focus:border-primary outline-none"
              {...emailForm.register("email", { required: "Email is required" })}
            />

            {/* ERROR */}
            {emailForm.formState.errors.email && (
              <p className="text-red-500 text-sm">
                {emailForm.formState.errors.email.message}
              </p>
            )}

            <button
              type="submit"
              className="w-full mt-4 bg-primary text-black py-3 rounded-lg font-semibold hover:bg-primary/90"
              disabled={emailForm.formState.isSubmitting}
            >
              Send OTP
            </button>
          </form>
        )}

        {/* STEP 2 -> OTP */}
        {step === 2 && (
          <form
            onSubmit={otpForm.handleSubmit(HandleOTPSubmit)}
            className="flex flex-col gap-4"
          >
            <label className="font-medium">Enter OTP sent to your email</label>

            <input
              type="text"
              maxLength={6}
              placeholder="Enter 6-digit OTP"
              className="w-full p-3 border rounded-lg focus:border-primary outline-none"
              {...otpForm.register("otp", {
                required: "OTP is required",
                minLength: { value: 6, message: "OTP must be 6 digits" }
              })}
            />

            {/* ERROR */}
            {otpForm.formState.errors.otp && (
              <p className="text-red-500 text-sm">
                {otpForm.formState.errors.otp.message}
              </p>
            )}

            <button
              type="submit"
              className="w-full mt-4 bg-primary text-black py-3 rounded-lg font-semibold hover:bg-primary/90"
            >
              Verify OTP
            </button>

            <button
              type="button"
              onClick={() => setStep(1)}
              className="text-primary text-sm mt-2 underline"
            >
              Go back
            </button>
          </form>
        )}

        {/* STEP 3 -> RESET PASSWORD */}
        {step === 3 && (
          <form
            onSubmit={passwordForm.handleSubmit(HandlePasswordSubmit)}
            className="flex flex-col gap-4"
          >
            <label className="font-medium">Enter New Password</label>

            <input
              type="password"
              placeholder="New password"
              className="w-full p-3 border rounded-lg focus:border-primary outline-none"
              {...passwordForm.register("newPassword", {
                required: "Password is required",
              })}
            />

            {/* ERROR */}
            {passwordForm.formState.errors.newPassword && (
              <p className="text-red-500 text-sm">
                {passwordForm.formState.errors.newPassword.message}
              </p>
            )}

            <button
              type="submit"
              className="w-full mt-4 bg-primary text-blackpy-3 rounded-lg font-semibold hover:bg-primary/90"
            >
              Reset Password
            </button>

            <button
              type="button"
              onClick={() => setStep(2)}
              className="text-primary text-sm mt-2 underline"
            >
              Go back
            </button>
          </form>
        )}

      </div>
    </div>
  );
};

export default CombinedForgotPassword;
