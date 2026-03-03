import React, { useState } from "react";

export default function SignupPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    mobile: "",
    password: "",
  });
  

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Signup Data:", form);
    // API call yahan karenge
    
    const users = JSON.parse(localStorage.getItem("users")) || [];
    
    const alreadyExists = users.find(
      (u) => u.email === form.email || u.mobile === form.mobile
    );
    
    if (alreadyExists) {
      alert("User already exists!");
      return;
    }
    
    users.push(form);
    
    localStorage.setItem("users", JSON.stringify(users));
    alert("Signup successful! Please login.");
    
    window.location.href = "/login";
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        <h2 className="text-3xl font-bold text-center mb-6 text-blue-700">
          Create Your Account
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">

          {/* Name */}
          <div>
            <label className="block text-gray-700 mb-1">Full Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Enter your name"
              className="w-full p-3 border rounded outline-none focus:ring-2 focus:ring-blue-600"
              required
            />
          </div>

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

          {/* Mobile */}
          <div>
            <label className="block text-gray-700 mb-1">Mobile Number</label>
            <input
              type="tel"
              name="mobile"
              maxLength="10"
              value={form.mobile}
              onChange={handleChange}
              placeholder="Enter your mobile number"
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
              placeholder="Create a password"
              className="w-full p-3 border rounded outline-none focus:ring-2 focus:ring-blue-600"
              required
            />
          </div>

          {/* Signup Button */}
          <button
            type="submit"
            className="w-full bg-blue-700 text-white py-3 rounded-lg text-lg font-semibold hover:bg-blue-800 transition"
          >
            Sign Up
          </button>
        </form>

        {/* Extra Links */}
        <div className="text-center mt-4">
          <p className="text-sm">
            Already have an account?
            <a href="/login" className="text-blue-700 font-semibold ml-1">
              Login Here
            </a>
          </p>
        </div>

      </div>
    </div>
  );
}
