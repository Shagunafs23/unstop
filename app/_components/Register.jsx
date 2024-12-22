"use client";

import React, { useState } from "react";

const Register = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
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

    // Real-time validation
    if (name === "username") {
      setErrors((prev) => ({
        ...prev,
        username: value !== "" ? "" : "Username is required",
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
    } else if (name === "confirmPassword") {
      setErrors((prev) => ({
        ...prev,
        confirmPassword: value !== formData.password ? "Passwords do not match" : "",
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-gray-100">
      {/* Left Side - Image */}
      <div className="flex-1 flex items-center justify-center bg-gray-200 p-6">
        <img
          src="/g1.png" // Replace with your image path
          alt="Register Illustration"
          className="max-w-full w-[70%] md:w-[60%] lg:w-[50%]"
        />
      </div>

      {/* Right Side - Banner */}
      <div className="flex-1 flex items-center justify-center bg-gray-200 p-8">
        <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-bold text-left text-gray-800 mb-8">
            Create Account
          </h2>

          {/* Register Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleInputChange}
                placeholder="Username"
                className="w-full py-3 px-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
              {errors.username && <p className="text-sm text-red-500">{errors.username}</p>}
            </div>

            <div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Email"
                className="w-full py-3 px-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
              {errors.email && <p className="text-sm text-red-500">{errors.email}</p>}
            </div>

            <div>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                placeholder="Password"
                className="w-full py-3 px-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
              {errors.password && <p className="text-sm text-red-500">{errors.password}</p>}
            </div>

            <div>
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleInputChange}
                placeholder="Confirm Password"
                className="w-full py-3 px-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
              {errors.confirmPassword && (
                <p className="text-sm text-red-500">{errors.confirmPassword}</p>
              )}
            </div>

            <button
              type="submit"
              className="w-full py-3 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Register
            </button>

            <p className="text-center text-gray-600 text-sm">
              Already have an account?
              <a href="/login" className="text-blue-600 hover:text-blue-700 ml-1 font-medium">
                Login here
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
