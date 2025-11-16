import React from "react";
import { useNavigate } from "react-router";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 relative overflow-hidden font-display">

      {/* BEAUTIFUL GRADIENT BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-blue-200/40 to-blue-100/40 -z-10"></div>

      {/* AESTHETIC BLUR SHAPES */}
      <div className="absolute top-[-120px] right-[-120px] w-[320px] h-[320px] bg-primary/40 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-[-160px] left-[-160px] w-[350px] h-[350px] bg-primary/30 rounded-full blur-3xl -z-10"></div>

      {/* SMALL CENTER BLUE ORB */}
      <div className="absolute top-1/2 left-1/2 w-[200px] h-[200px] bg-primary/20 rounded-full blur-2xl -translate-x-1/2 -translate-y-1/2 -z-10"></div>

      {/* LOGO */}
      <div className="flex items-center gap-3 mb-8 text-primary drop-shadow-md">
        <svg width="48" height="48" fill="currentColor" viewBox="0 0 48 48">
          <path d="M6 6H42L36 24L42 42H6L12 24L6 6Z" />
        </svg>
        <h1 className="text-4xl font-extrabold text-[#0f1b20]">Nomad</h1>
      </div>

      {/* MAIN CARD */}
      <div className="backdrop-blur-xl bg-white/50 p-12 rounded-3xl shadow-xl max-w-lg text-center border border-white/30">

        {/* BEAUTIFUL ILLUSTRATION */}
        <img
          src="https://cdn-icons-png.flaticon.com/512/854/854878.png"
          alt="travel"
          className="w-28 h-28 mx-auto mb-6 opacity-90 drop-shadow-lg"
        />

        {/* MAIN TEXT */}
        <h2 className="text-4xl font-black text-[#0f1b20] mb-3 leading-tight">
          Welcome to Your Travel Diary
        </h2>

        <p className="text-gray-700 text-lg mb-10 leading-relaxed">
          Capture moments, store adventures, and revisit your journeys
          — beautifully organized in one place.
        </p>

        {/* BUTTON GROUP */}
        <div className="flex gap-4 justify-center">

          {/* Login */}
          <button
            onClick={() => navigate("/login")}
            className="px-8 py-3 border border-primary text-primary font-semibold rounded-lg hover:bg-primary hover:text-white transition-all shadow-sm"
          >
            Log In
          </button>

          {/* Register */}
          <button
            onClick={() => navigate("/signup")}
            className="px-8 py-3 bg-primary text-black font-semibold rounded-lg hover:bg-primary/90 transition-all shadow-md"
          >
            Register
          </button>

        </div>
      </div>
    </div>
  );
};

export default Home;
