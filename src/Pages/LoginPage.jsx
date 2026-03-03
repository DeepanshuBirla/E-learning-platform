import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  // 🔒 already logged-in user ko login page se hatao
  useEffect(() => {
    const isAuth = localStorage.getItem("isAuth");
    if (isAuth === "true") {
      navigate("/", { replace: true });
    }
  }, [navigate]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const users = JSON.parse(localStorage.getItem("users")) || [];

    const user = users.find(
      (u) => u.email === form.email && u.password === form.password
    );

    if (!user) {
      alert("❌ Invalid credentials");
      return;
    }

    // ✅ save login session properly
    localStorage.setItem("isAuth", "true");
    localStorage.setItem("loggedInUser", JSON.stringify(user));
    // LOGIN SUCCESS ke baad
    localStorage.setItem(
      "loggedInUser",
      JSON.stringify({
        email: form.email,
        role: "student", // future use
        name: "Student User",
      })
    );

    alert("✅ Login successful");

    // 🔁 replace = true → back pe login nahi aayega
    navigate("/student/profile", { replace: true });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        <h2 className="text-3xl font-bold text-center mb-6 text-blue-700">
          Login to eLearn
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Email */}
          <div>
            <label className="block text-gray-700 mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="w-full p-3 border rounded outline-none focus:ring-2 focus:ring-blue-600"
              required
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-gray-700 mb-1">Password</label>
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              placeholder="Enter your password"
              className="w-full p-3 border rounded outline-none focus:ring-2 focus:ring-blue-600"
              required
            />
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-blue-700 text-white py-3 rounded-lg text-lg font-semibold hover:bg-blue-800 transition"
          >
            Login
          </button>
        </form>

        {/* Extra Links */}
        <div className="text-center mt-4">
          <p className="text-sm">
            Don't have an account?
            <a href="/signup" className="text-blue-700 font-semibold ml-1">
              Create Account
            </a>
          </p>

          <p className="text-sm mt-2">
            <a href="/forgot-password" className="text-blue-600">
              Forgot Password?
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
