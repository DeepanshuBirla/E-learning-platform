import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AffiliateLoginPage() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(form);

    alert("Login Successful!");
    navigate("/affiliate/dashboard");
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 to-indigo-100 flex items-center justify-center px-4">

      <div className="bg-white rounded-2xl shadow-xl w-full max-w-md p-8">

        <h2 className="text-2xl font-bold text-center text-slate-800">
          Affiliate Login
        </h2>

        <p className="text-center text-gray-500 text-sm mt-2">
          Login to access your affiliate dashboard
        </p>

        <form onSubmit={handleSubmit} className="mt-6 space-y-4">

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
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            required
            className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-2 rounded-lg font-semibold hover:opacity-90 transition"
          >
            Login
          </button>

        </form>

        <div className="text-center mt-6 space-y-2 text-sm text-gray-500">

          <p
            className="text-indigo-600 font-semibold cursor-pointer hover:underline"
            onClick={() => alert("Forgot password page coming soon")}
          >
            Forgot Password?
          </p>

          <p>
            Don’t have an account?{" "}
            <span
              className="text-indigo-600 font-semibold cursor-pointer"
              onClick={() => navigate("/affiliate-register")}
            >
              Register
            </span>
          </p>

        </div>

      </div>
    </div>
  );
}
