"use client";
import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import {
  FaUser,
  FaEnvelope,
  FaLock,
  FaEye,
  FaEyeSlash,
  FaGoogle,
  FaGithub,
  FaPhoneAlt,
} from "react-icons/fa";

const SignUpForm = ({ setToggle, toggle }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    agreeToTerms: false,
  });
  const toggleHandler = () => {
    setToggle(!toggle);
  };

  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 overflow-y-auto">
      <div className="fixed inset-0 bg-black/40 backdrop-blur-sm" />

      <div className="relative flex min-h-full items-center justify-center p-4">
        <div className="relative w-[400px] max-w-md transform overflow-hidden rounded-2xl bg-white shadow-xl transition-all">
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 px-6 py-8">
            <RxCross2
              onClick={toggleHandler}
              className=" absolute cursor-pointer size-6 text-black-800 right-4 top-5"
            ></RxCross2>
            <h2 className="text-2xl font-bold text-white text-center">
              Create Account
            </h2>
            <p className="text-blue-100 text-center mt-2">
              Join our community today
            </p>
          </div>

          <form onSubmit={handleSubmit} className="px-6 pb-8 pt-4">
            <div className="space-y-4">
              {/* Username */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Username
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FaUser className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                    className="pl-10 w-full text-black px-3 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition"
                    placeholder="Enter username"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FaEnvelope className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="pl-10 w-full px-3 text-black py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition"
                    placeholder="you@example.com"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Password
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FaLock className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    className="pl-10 pr-10 w-full px-3 py-2.5 border text-black border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition"
                    placeholder="password"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-blue-500"
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </button>
                </div>
              </div>
              {/* phone number area */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Phone number
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FaPhoneAlt className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="number"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="pl-10 w-full px-3 text-black py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition"
                    placeholder="+1"
                    required
                  />
                </div>
              </div>

              {/* Terms Checkbox */}
              <div className="flex items-start">
                <input
                  type="checkbox"
                  name="agreeToTerms"
                  checked={formData.agreeToTerms}
                  onChange={handleChange}
                  className="mt-1 w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                  required
                />
                <label className="ml-2 text-sm text-gray-700">
                  I agree to the{" "}
                  <a href="#" className="text-blue-600 font-medium">
                    Terms
                  </a>{" "}
                  and{" "}
                  <a href="#" className="text-blue-600 font-medium">
                    Privacy
                  </a>
                </label>
              </div>
            </div>

            <button
              type="submit"
              className="w-full mt-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg shadow-md hover:opacity-90 transition-all"
            >
              Create Account
            </button>

            {/* Social Logins (Using the other imports) */}
            <div className="mt-6">
              <div className="relative flex items-center justify-center">
                <div className="border-t w-full border-gray-300"></div>
                <span className="bg-white px-3 text-xs text-gray-500 absolute">
                  OR CONTINUE WITH
                </span>
              </div>
              <div className="grid grid-cols-2 gap-4 mt-6">
                <button
                  type="button"
                  className="flex text-black items-center justify-center gap-2 py-2 border rounded-lg hover:bg-gray-50 transition"
                >
                  <FaGoogle className="" /> Google
                </button>
                <button
                  type="button"
                  className="flex text-black items-center justify-center gap-2 py-2 border rounded-lg hover:bg-gray-50 transition"
                >
                  <FaGithub /> GitHub
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;
