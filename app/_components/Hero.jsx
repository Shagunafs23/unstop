"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

const Hero = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    username: "",
    email: "",
    password: "",
  });

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (name === "username") {
      setErrors((prev) => ({
        ...prev,
        username: value !== "emilys" ? "Username must be 'emilys'" : "",
      }));
    } else if (name === "email") {
      setErrors((prev) => ({
        ...prev,
        email: !validateEmail(value) ? "Please enter a valid email" : "",
      }));
    } else if (name === "password") {
      setErrors((prev) => ({
        ...prev,
        password: value.length < 8 ? "Password must be at least 8 characters" : "",
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!errors.username && !errors.email && !errors.password) {
      router.push(`/dashboard?username=${formData.username}&email=${formData.email}`);
    }
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-gray-100">
      <div className="flex-1 flex items-center justify-center bg-gray-100 p-8">
        <img
          src="/g1.png"
          alt="Login Illustration"
          className="max-w-[80%] md:max-w-[60%] lg:max-w-[50%]"
        />
      </div>

      <div className="flex-1 flex items-center justify-center bg-white-50">
        <div className="w-full max-w-lg bg-white rounded-2xl shadow-lg p-10">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Welcome to Unstop</h2>

          <div className="space-y-4 mb-6">
            <button className="flex items-center justify-center gap-3 py-3 px-4 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 transition w-full">
              <img src="/go.svg" alt="Google" className="w-6 h-6" />
              <span className="text-gray-600 font-medium">Login with Google</span>
            </button>
            <button className="flex items-center justify-center gap-3 py-3 px-4 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 transition w-full">
              <img src="/fa.svg" alt="Facebook" className="w-6 h-6" />
              <span className="text-gray-600 font-medium">Login with Facebook</span>
            </button>
          </div>

          <div className="relative flex items-center mb-6">
            <div className="border-t border-gray-300 flex-grow"></div>
            <span className="px-4 text-sm text-gray-500">OR</span>
            <div className="border-t border-gray-300 flex-grow"></div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="relative">
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleInputChange}
                placeholder="User name"
                className={`w-full py-3 pl-12 pr-4 border ${
                  errors.username ? "border-red-500" : "border-gray-300"
                } rounded-lg text-sm focus:ring-2 focus:ring-purple-500 focus:outline-none`}
              />
              <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                <img src="/account_circle.svg" alt="User Icon" className="w-6 h-6" />
              </span>
              {errors.username && (
                <p className="mt-1 ml-1 text-xs text-red-500">{errors.username}</p>
              )}
            </div>

            <div className="relative">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Email"
                className={`w-full py-3 pl-12 pr-4 border ${
                  errors.email ? "border-red-500" : "border-gray-300"
                } rounded-lg text-sm focus:ring-2 focus:ring-purple-500 focus:outline-none`}
              />
              <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                <img src="/mail.svg" alt="Email Icon" className="w-6 h-6" />
              </span>
              {errors.email && (
                <p className="mt-2 ml-1 text-xs text-red-500">{errors.email}</p>
              )}
            </div>

            <div className="relative mt-4">
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                placeholder="Password"
                className={`w-full py-3 pl-12 pr-4 border ${
                  errors.password ? "border-red-500" : "border-gray-300"
                } rounded-lg text-sm focus:ring-2 focus:ring-purple-500 focus:outline-none`}
              />
              <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                <img src="/key.svg" alt="Password Icon" className="w-6 h-6" />
              </span>
              {errors.password && (
                <p className="mt-1 ml-1 text-xs text-red-500">{errors.password}</p>
              )}
            </div>

            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center">
                <input type="checkbox" className="w-4 h-4 rounded border-gray-300" />
                <span className="ml-2 text-gray-600">Remember me</span>
              </label>
              <a href="#" className="text-purple-600 hover:underline">Forgot Password?</a>
            </div>

            <button
              type="submit"
              className="w-full py-3 text-sm bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition"
            >
              Login
            </button>

            <p className="text-center text-sm text-gray-600 mt-4">
              Don't have an account?
              <a href="#" className="text-purple-600 hover:underline ml-1">Register</a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Hero;
