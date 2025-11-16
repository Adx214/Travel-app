import React, { useState } from "react";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="relative flex min-h-screen w-full flex-col bg-background-light dark:bg-background-dark overflow-x-hidden font-display">
      <div className="layout-container flex h-full grow flex-col">
        <div className="flex flex-1">
          <div className="flex min-h-screen w-full flex-wrap">

            {/* Left Side Image */}
            <div className="relative hidden w-1/2 flex-col items-center justify-center bg-gray-200 lg:flex">
              <div
                className="w-full bg-center bg-cover bg-no-repeat flex-1"
                style={{
                  backgroundImage:
                    "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBApIoNPwP11_xVFuT6x1oU1NiMx9oAkxs6avwLuCDDydhLaw7aMFVuvLyWfGvbAyhbnQTiwqdnIu2fBuMjmVvcygEhA1xyU3DBmC0gPQQcLkYZe10ptJLXtu16yu6tc9bPRgH4v1dr_Plqofmqkf4Uuwqm6IM0hH8pK68SOH17zm5_1-5DW1TLULFR0uEqTmDuXFLpgPXuRTAl2KUDQD9H2s1Ap_WPtod4mUr8KkJ0vJxzCUAZEpzTephXbPovUqdvrKu5oi_B5gyT')",
                }}
              ></div>
            </div>

            {/* Right Side Login Form */}
            <div className="flex w-full lg:w-1/2 flex-1 flex-col items-center justify-center bg-background-light dark:bg-background-dark p-6">
              <div className="w-full max-w-md flex flex-col gap-4">

                {/* Header */}
                <div className="flex flex-col gap-2 pb-4">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary text-3xl">explore</span>
                    <h2 className="text-2xl font-bold text-[#111618] dark:text-white">Nomad</h2>
                  </div>

                  <h1 className="text-[32px] font-bold text-[#111618] dark:text-white leading-tight">
                    Welcome Back
                  </h1>

                  <p className="text-[#617c89] dark:text-gray-300 text-base">
                    Log in to continue your journey with Nomad.
                  </p>
                </div>

                {/* Email Input */}
                <label className="flex flex-col w-full">
                  <p className="text-[#111618] dark:text-gray-200 pb-2 font-medium">Email</p>
                  <input
                    type="email"
                    className="form-input w-full rounded-lg border bg-white dark:bg-background-dark dark:border-gray-600 h-14 p-[15px] text-base placeholder:text-[#617c89] focus:border-primary focus:ring-0"
                    placeholder="Enter your email"
                  />
                </label>

                {/* Password Input */}
                <label className="flex flex-col w-full">
                  <div className="flex justify-between pb-2">
                    <p className="text-[#111618] dark:text-gray-200 font-medium">Password</p>
                    <a className="text-primary text-sm hover:underline" href="#">
                      Forgot Password?
                    </a>
                  </div>

                  <div className="flex w-full items-stretch rounded-lg">
                    <input
                      type={showPassword ? "text" : "password"}
                      className="form-input w-full rounded-l-lg border dark:border-gray-600 bg-white dark:bg-background-dark h-14 p-[15px] border-r-0 pr-2 text-base placeholder:text-[#617c89] focus:border-primary focus:ring-0"
                      placeholder="Enter your password"
                    />

                    <button
                      type="button"
                      onClick={() => setShowPassword((prev) => !prev)}
                      className="flex items-center justify-center px-[15px] rounded-r-lg border dark:border-gray-600 bg-white dark:bg-background-dark"
                    >
                      {showPassword ? (
                        <span className="material-symbols-outlined">visibility</span>
                      ) : (
                        <span className="material-symbols-outlined">visibility_off</span>
                      )}
                    </button>
                  </div>
                </label>

                {/* Login Button */}
                <button className="h-14 w-full bg-primary text-black font-bold rounded-lg hover:bg-primary/90 transition mt-4">
                  Log In
                </button>

                <p className="w-full text-center text-sm text-[#617c89] dark:text-gray-300">
                  Don't have an account?{" "}
                  <a className="font-medium text-primary hover:underline" href="#">
                    Sign Up
                  </a>
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
