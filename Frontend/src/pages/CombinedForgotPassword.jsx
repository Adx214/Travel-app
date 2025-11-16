import React, { useState } from "react";

const CombinedForgotPassword = () => {
  const [step, setStep] = useState(1); // 1 = email, 2 = otp, 3 = reset
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [newPassword, setNewPassword] = useState("");

  return (
    <div className="min-h-screen flex justify-center items-center bg-background-light px-4">
      <div className="w-full max-w-md bg-white p-8 shadow-xl rounded-2xl">
        
        {/* TITLE */}
        <h1 className="text-3xl font-black text-[#111618] text-center mb-6">
          Forgot Password
        </h1>

        {/* STEP TRACKER */}
        <div className="flex justify-center gap-3 mb-6">
          <div className={`w-3 h-3 rounded-full ${step >= 1 ? "bg-primary" : "bg-gray-300"}`}></div>
          <div className={`w-3 h-3 rounded-full ${step >= 2 ? "bg-primary" : "bg-gray-300"}`}></div>
          <div className={`w-3 h-3 rounded-full ${step >= 3 ? "bg-primary" : "bg-gray-300"}`}></div>
        </div>

        {/* STEP 1 — Enter Email */}
        {step === 1 && (
          <div className="flex flex-col gap-4">
            <label className="font-medium">Enter your email</label>
            <input
              type="email"
              placeholder="your@email.com"
              className="w-full p-3 border rounded-lg focus:border-primary outline-none"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <button
              onClick={() => email && setStep(2)}
              className="w-full mt-4 bg-primary text-white py-3 rounded-lg font-semibold hover:bg-primary/90"
            >
              Send OTP
            </button>
          </div>
        )}

        {/* STEP 2 — Enter OTP */}
        {step === 2 && (
          <div className="flex flex-col gap-4">
            <label className="font-medium">Enter OTP sent to your email</label>
            <input
              type="text"
              placeholder="Enter 6-digit OTP"
              maxLength={6}
              className="w-full p-3 border rounded-lg focus:border-primary outline-none"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
            />

            <button
              onClick={() => otp.length === 6 && setStep(3)}
              className="w-full mt-4 bg-primary text-white py-3 rounded-lg font-semibold hover:bg-primary/90"
            >
              Verify OTP
            </button>

            <button
              onClick={() => setStep(1)}
              className="text-primary text-sm mt-2 underline"
            >
              Go back
            </button>
          </div>
        )}

        {/* STEP 3 — Reset Password */}
        {step === 3 && (
          <div className="flex flex-col gap-4">
            <label className="font-medium">Enter New Password</label>
            <input
              type="password"
              placeholder="New password"
              className="w-full p-3 border rounded-lg focus:border-primary outline-none"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />

            <button
              onClick={() => newPassword && alert("Password Reset UI Done")}
              className="w-full mt-4 bg-primary text-white py-3 rounded-lg font-semibold hover:bg-primary/90"
            >
              Reset Password
            </button>

            <button
              onClick={() => setStep(2)}
              className="text-primary text-sm mt-2 underline"
            >
              Go back
            </button>
          </div>
        )}

      </div>
    </div>
  );
};

export default CombinedForgotPassword;
