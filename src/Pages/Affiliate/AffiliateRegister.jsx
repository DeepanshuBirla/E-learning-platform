import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AffiliateRegister() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (form.password !== form.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    console.log(form);

    // Backend API call yahan lagega

    alert("Affiliate Registered Successfully!");
    navigate("/affiliate/dashboard");
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 to-indigo-100 flex items-center justify-center px-4">

      <div className="bg-white rounded-2xl shadow-xl w-full max-w-md p-8">

        <h2 className="text-2xl font-bold text-center text-slate-800">
          Become an Affiliate
        </h2>

        <p className="text-center text-gray-500 text-sm mt-2">
          Start earning by promoting our courses
        </p>

        <form onSubmit={handleSubmit} className="mt-6 space-y-4">

          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={form.name}
            onChange={handleChange}
            required
            className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={form.phone}
            onChange={handleChange}
            required
            className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            required
            className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />

          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={form.confirmPassword}
            onChange={handleChange}
            required
            className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-2 rounded-lg font-semibold hover:opacity-90 transition"
          >
            Register as Affiliate
          </button>

        </form>

        <p className="text-center text-sm text-gray-500 mt-6">
          Already an affiliate?{" "}
          <span
            className="text-indigo-600 font-semibold cursor-pointer"
            onClick={() => navigate("/affiliate-login")}
          >
            Login
          </span>
        </p>
      </div>

    </div>
  );
}
