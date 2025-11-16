import React, { useState } from "react";

const Signup = () => {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className="relative flex min-h-screen w-full flex-col bg-background-light dark:bg-background-dark overflow-x-hidden font-display">
            <div className="layout-container flex h-full grow flex-col">
                <div className="flex flex-1 justify-center items-center p-4 lg:p-8">
                    <div className="flex flex-col max-w-6xl w-full flex-1">
                        <div className="w-full grow bg-white dark:bg-background-dark shadow-xl rounded-xl flex overflow-hidden">

                            {/* LEFT IMAGE */}
                            <div
                                className="w-1/2 hidden md:flex bg-center bg-no-repeat bg-cover"
                                style={{
                                    backgroundImage:
                                        "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBlsR3-kQejfHc2TqtD8jTqTdWSH2hrY5ioqcKwD0-pID7spYBAKcSFQEzpN_uMRwYUfj_PagKkOYSZhjJwitkBvSb-Ae-O1erWO2dRbHB7Hc0kuiW00iy7yjUtcDlOslFQ7jVU0Cv9FWnEfbhKvye9gP7RDpcHXPy6BbhiaPUxpsORwQ8hc3NiNOMSEuT7uUrw_iiOTO82bGba4lNQTAYitirdHhi2JaSEfu4fjOrcKaHo2L2xJcjBNaBBKx1fNmDCStL---8DPTj1')",
                                }}
                            ></div>

                            {/* RIGHT SIDE FORM */}
                            <div className="w-full md:w-1/2 p-8 lg:p-12 flex flex-col justify-center">

                                {/* LOGO */}
                                <div className="flex items-center gap-3 mb-8">
                                    <span className="material-symbols-outlined text-primary text-4xl">
                                        travel_explore
                                    </span>
                                    <h1 className="text-3xl font-bold text-[#111618] dark:text-white">
                                        Nomad
                                    </h1>
                                </div>

                                {/* HEADINGS */}
                                <div className="flex flex-col gap-2 mb-8">
                                    <p className="text-[#111618] dark:text-white text-4xl font-black leading-tight">
                                        Join the Journey
                                    </p>
                                    <p className="text-[#617c89] dark:text-gray-400 text-base">
                                        Start saving and sharing your travel memories.
                                    </p>
                                </div>

                                {/* FORM FIELDS */}
                                <form action="">
                                    <div className="flex flex-col gap-4">

                                        {/* Username */}
                                        <label className="flex flex-col">
                                            <p className="text-[#111618] dark:text-gray-300 pb-2 font-medium">
                                                Username
                                            </p>
                                            <input
                                                className="form-input w-full rounded-lg border bg-white dark:bg-gray-700 dark:border-gray-600 h-14 p-[15px] text-base dark:text-white placeholder:text-[#617c89] focus:ring-2 focus:ring-primary/50"
                                                placeholder="Enter your username"
                                            />
                                        </label>

                                        {/* Email */}
                                        <label className="flex flex-col">
                                            <p className="text-[#111618] dark:text-gray-300 pb-2 font-medium">
                                                Email
                                            </p>
                                            <input
                                                type="email"
                                                className="form-input w-full rounded-lg border bg-white dark:bg-gray-700 dark:border-gray-600 h-14 p-[15px] text-base dark:text-white placeholder:text-[#617c89] focus:ring-2 focus:ring-primary/50"
                                                placeholder="Enter your email address"
                                            />
                                        </label>

                                        {/* Bio */}
                                        <label className="flex flex-col">
                                            <p className="text-[#111618] dark:text-gray-300 pb-2 font-medium">
                                                Bio
                                            </p>
                                            <textarea
                                                rows="3"
                                                className="form-input w-full rounded-lg border bg-white dark:bg-gray-700 dark:border-gray-600 p-[15px] text-base dark:text-white placeholder:text-[#617c89] focus:ring-2 focus:ring-primary/50"
                                                placeholder="Tell us something about yourself..."
                                            ></textarea>
                                        </label>

                                        {/* Password */}
                                        <label className="flex flex-col">
                                            <p className="text-[#111618] dark:text-gray-300 pb-2 font-medium">
                                                Password
                                            </p>

                                            <div className="flex w-full items-stretch rounded-lg">
                                                <input
                                                    type={showPassword ? "text" : "password"}
                                                    className="form-input w-full rounded-l-lg border bg-white dark:bg-gray-700 dark:border-gray-600 h-14 p-[15px] pr-2 text-base dark:text-white placeholder:text-[#617c89] focus:ring-2 focus:ring-primary/50 border-r-0"
                                                    placeholder="Enter your password"
                                                />

                                                <button
                                                    type="button"
                                                    onClick={() => setShowPassword(!showPassword)}
                                                    className="flex items-center justify-center px-[15px] border rounded-r-lg bg-white dark:bg-gray-700 dark:border-gray-600"
                                                >
                                                    <span className="material-symbols-outlined">
                                                        {showPassword ? "visibility" : "visibility_off"}
                                                    </span>
                                                </button>
                                            </div>
                                        </label>
                                    </div>

                                    {/* SUBMIT BUTTON */}
                                    <button className="h-14 w-full mt-8 bg-primary text-black font-bold rounded-lg hover:bg-opacity-90 transition">
                                        Create My Account
                                    </button>
                                </form>

                                {/* LOGIN LINK */}
                                <p className="text-[#617c89] dark:text-gray-400 text-sm text-center mt-8">
                                    Already a member?{" "}
                                    <a className="font-bold text-primary hover:underline" href="#">
                                        Log in
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

export default Signup;
