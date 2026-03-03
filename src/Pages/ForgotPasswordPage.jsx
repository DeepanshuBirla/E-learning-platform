import React, { useState } from "react";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Password Reset Email:", email);
    // Yaha API call karenge → OTP send, reset link send etc.
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">

      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        
        <h2 className="text-3xl font-bold text-center mb-4 text-blue-700">
          Forgot Password?
        </h2>

        <p className="text-center text-gray-600 mb-6">
          Enter your email and we will send you a password reset link.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">

          <div>
            <label className="block text-gray-700 mb-1">Email</label>
            <input  
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your registered email"
              className="w-full p-3 border rounded outline-none focus:ring-2 focus:ring-blue-600"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-700 text-white py-3 rounded-lg text-lg font-semibold hover:bg-blue-800 transition"
          >
            Send Reset Link
          </button>
        </form>

        <div className="text-center mt-4">
          <p className="text-sm">
            Remember your password?
            <a href="/login" className="text-blue-600 ml-1 font-semibold">
              Back to Login
            </a>
          </p>
        </div>

      </div>

    </div>
  );
}
