import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";

export default function Navbar() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const navigate = useNavigate();

  const goTo = (path) => {
    navigate(path);
    setMobileMenu(false);
    setMoreOpen(false);
  };

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/courses", label: "Courses" },
    { path: "/contact", label: "Contact" },
  ];

  const user = JSON.parse(localStorage.getItem("loggedInUser"));
  const handleLogout = () => {
    localStorage.removeItem("isAuth");
  // localStorage.removeItem("loggedInUser");
    localStorage.removeItem("loggedInUser");
    setMobileMenu(!mobileMenu);
    navigate("/login");
  };

  return (
    <header className="bg-blue-950 text-white">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* LOGO */}
        <Link to="/" className="text-2xl font-bold">
          eLearn
        </Link>

        {/* SEARCH (Desktop) */}
        <div className="hidden md:flex items-center w-1/2 bg-white rounded overflow-hidden">
          <input
            type="text"
            placeholder="Search for courses..."
            className="w-full p-2 text-black outline-none"
          />
          <button className="bg-blue-700 text-white px-4 py-2">Search</button>
        </div>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex gap-8 items-center">
          {navLinks.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                isActive
                  ? "text-amber-400 font-semibold"
                  : "hover:text-amber-400 transition"
              }
            >
              {item.label}
            </NavLink>
          ))}

          {/* MORE DROPDOWN */}
          <div className="relative">
            <button
              onClick={() => setMoreOpen(!moreOpen)}
              className="hover:text-amber-400 transition"
            >
              More ▾
            </button>

            {moreOpen && (
              <div className="absolute right-0 mt-2 bg-white text-black rounded shadow-lg w-52 z-50">
                <p className="px-4 py-2 text-sm text-gray-500 border-b">
                  Dashboards
                </p>
                <button
                  onClick={() => goTo("/student")}
                  className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                >
                  Student Dashboard
                </button>
                <button
                  onClick={() => goTo("/affiliate/dashboard")}
                  className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                >
                  Affiliate Dashboard
                </button>
                <button
                  onClick={() => goTo("/admin")}
                  className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                >
                  Admin Dashboard
                </button>
                <button
                  onClick={() => goTo("/student/profile")}
                  className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                >
                  My Profile
                </button>
              </div>
            )}
          </div>

          {/* LOGIN */}
          {!user ? (
            <Link
              to="/login"
              className="bg-amber-500 hover:bg-amber-600 px-4 py-2 rounded font-semibold"
            >
              Login
            </Link>
          ) : (
            <button
              onClick={handleLogout}
              className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded font-semibold"
            >
              Logout
            </button>
          )}
        </nav>

        {/* MOBILE MENU BUTTON */}
        <button
          onClick={() => setMobileMenu(!mobileMenu)}
          className="md:hidden text-2xl"
        >
          ☰
        </button>
      </div>

      {/* MOBILE MENU */}
      {mobileMenu && (
        <div className="md:hidden bg-blue-900 px-4 pb-4 space-y-4">
          {/* MOBILE SEARCH */}
          <div className="flex bg-white rounded overflow-hidden">
            <input
              type="text"
              placeholder="Search courses..."
              className="w-full p-2 text-black outline-none"
            />
            <button className="bg-blue-700 px-4 text-white">Search</button>
          </div>

          {/* NAV LINKS */}
          {navLinks.map((item) => (
            <button
              key={item.path}
              onClick={() => goTo(item.path)}
              className="block w-full text-left"
            >
              {item.label}
            </button>
          ))}

          {/* DASHBOARDS */}
          <div className="border-t border-blue-700 pt-3 space-y-2">
            <p className="text-sm text-gray-300">Dashboards</p>
            <button onClick={() => goTo("/student")} className="block">
              Student Dashboard
            </button>
            <button
              onClick={() => goTo("/affiliate/dashboard")}
              className="block"
            >
              Affiliate Dashboard
            </button>
            <button onClick={() => goTo("/admin")} className="block">
              Admin Dashboard
            </button>
          </div>

          {/* LOGIN */}
          {/* <Link
            to="/login"
            onClick={() => setMobileMenu(false)}
            className="block bg-amber-500 text-center py-2 rounded font-semibold"
          >
            Login
          </Link> */}

          {!user ? (
            <Link
              to="/login"
              onClick={() => setMobileMenu(false)}
              className="block bg-amber-500 text-center py-2 rounded font-semibold"
            >
              Login
            </Link>
          ) : (
            <button
              onClick={handleLogout}
              className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded font-semibold"
            >
              Logout
            </button>
          )}
        </div>
      )}
    </header>
  );
}
