import React, { useState } from "react";
import LayerShadow from "./asset/LayersShadow.png";

const LoginPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleSwitch = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setIsLogin(!isLogin);
      setIsAnimating(false);
    }, 300);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 to-indigo-200 flex items-center justify-center p-4">
      <div
        className={`max-w-4xl w-full  bg-gray-300 rounded-2xl overflow-hidden flex flex-col md:flex-row transition-transform duration-300 ease-in-out ${
          isAnimating ? "scale-95  shadow-xl" : "scale-100  shadow-2xl"
        }`}
      >
        {/* Form Side */}
        <div className="w-full md:w-1/2 p-8">
          <div
            className={`space-y-6 transition-all duration-300 ease-in-out origin-bottom sm:origin-right ${
              isAnimating
                ? "opacity-0 scale-50 translate-y-10 sm:translate-y-0 sm:translate-x-10"
                : "opacity-100 scale-100 sm:translate-x-0"
            }`}
          >
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-800 mb-2">
                {isLogin ? "You're the Agent of Chaos!" : "Create Account"}
              </h2>
              <p className="text-gray-600">
                {isLogin
                  ? "Just Sign in and get it..."
                  : "Join us and Become the Agent of Chaos."}
              </p>
            </div>

            <form className="space-y-4">
              {!isLogin && (
                <div className="relative">
                  <svg
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                  </svg>
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-slate-500 focus:border-transparent transition-all"
                  />
                </div>
              )}

              <div className="relative">
                <svg
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-slate-500 focus:border-transparent transition-all"
                />
              </div>

              <div className="relative">
                <svg
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
                  <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                </svg>
                <input
                  type="password"
                  placeholder="Password"
                  className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-slate-500 focus:border-transparent transition-all"
                />
              </div>

              {isLogin && (
                <div className="flex items-center justify-between text-sm">
                  <label className="flex items-center space-x-2 cursor-pointer">
                    <input
                      type="checkbox"
                      className="rounded text-slate-500 focus:ring-slate-500"
                    />
                    <span className="text-gray-600">Remember me</span>
                  </label>
                  <a
                    onClick={() => alert("Nahi batana, bhule kyu?")}
                    className="text-slate-600 hover:text-slate-700 font-medium"
                  >
                    Forgot Password?
                  </a>
                </div>
              )}

              <button
                onClick={() => alert("Kya karunga mai tumhari Id ka?")}
                type="submit"
                className="w-full bg-slate-600 hover:bg-slate-700 text-white font-semibold py-3 rounded-lg transition-colors duration-300 flex items-center justify-center space-x-2"
              >
                {isLogin ? (
                  <>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mr-2"
                    >
                      <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />
                      <polyline points="10 17 15 12 10 7" />
                      <line x1="15" x2="3" y1="12" y2="12" />
                    </svg>
                    <span>Sign In</span>
                  </>
                ) : (
                  <>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mr-2"
                    >
                      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                      <line x1="19" x2="19" y1="8" y2="14" />
                      <line x1="22" x2="16" y1="11" y2="11" />
                    </svg>
                    <span>Sign Up</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>

        {/* Image/Overlay Side */}
        <div
          className={`w-full md:w-1/2 bg-cover p-8 block items-center justify-center transition-transform duration-300 ease-in-out ${
            isAnimating ? "scale-105" : "scale-100"
          }`}
        >
          <img
            src={LayerShadow || "/placeholder.svg"}
            className=" w-full object-cover"
          ></img>
          <div className="text-center bg-black bg-opacity-50 p-8 rounded-xl backdrop-blur-sm">
            <h3 className="text-2xl font-bold text-white mb-4">
              {isLogin ? "Need the Chaos?" : "Are you the Agent of Chaos?"}
            </h3>
            <p className="text-gray-200 mb-6">
              {isLogin
                ? "Sign up and become the Agent of Chaos!"
                : "Sign in and continue the Chaos!"}
            </p>
            <button
              onClick={handleSwitch}
              className="px-6 py-2 border-2 border-white text-white rounded-lg hover:bg-white hover:text-slate-600 transition-colors duration-300"
            >
              {isLogin ? "Sign Up" : "Sign In"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
