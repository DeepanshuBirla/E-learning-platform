import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import coursesData from "../Data/coursesData.json";

export default function CourseDetails() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("syllabus");

  const course = coursesData.courses.find((c) => c.slug === slug);

  if (!course) {
    return <p className="text-center mt-10 text-red-500">Course not found</p>;
  }

  return (
    <div className="bg-gray-100">
      {/* ===== HERO HEADER ===== */}
      <div className="bg-gradient-to-r from-indigo-900 to-blue-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-3xl font-bold">{course.title}</h1>
          <div className="flex gap-6 mt-2 text-sm text-orange-300">
            <span>⏳ {course.duration}</span>
            <span>📦 {course.modules.length} Modules</span>
            <span>👨‍🏫 {course.creator}</span>
          </div>
        </div>
      </div>

      {/* ===== MAIN CONTENT ===== */}
      <div className="max-w-6xl mx-auto px-4 md:px-6 py-10 grid md:grid-cols-3 gap-8">
        {/* LEFT VIDEO + CONTENT */}
        <div className="md:col-span-2">
          {/* VIDEO */}
          <div className="bg-black rounded overflow-hidden">
            <video
              src={course.previewVideo}
              controls
              className="w-full h-72 md:h-96 object-cover"
            />
          </div>

          {/* TABS */}
          <div className="flex gap-2 mt-6 overflow-auto">
            {["syllabus", "overview", "reviews", "instructions"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-5 py-2 rounded text-sm font-semibold ${
                  activeTab === tab
                    ? "bg-orange-500 text-white"
                    : "bg-white border"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* TAB CONTENT */}
          <div className="bg-white mt-6 p-6 rounded shadow">
            {activeTab === "syllabus" && (
              <div>
                <h2 className="font-bold text-lg mb-4">Course Syllabus</h2>

                {course.modules.map((mod, i) => (
                  <div
                    key={i}
                    className="border-b py-3 flex justify-between text-sm"
                  >
                    <span>
                      Lecture {i + 1}: {mod.title}
                    </span>
                    <span className="text-gray-400">🔒</span>
                  </div>
                ))}
              </div>
            )}

            {activeTab === "overview" && (
              <p className="text-gray-700">{course.longDescription}</p>
            )}

            {activeTab === "reviews" && <div>⭐⭐⭐⭐⭐ Excellent course!</div>}

            {activeTab === "instructions" && (
              <div>Please complete modules in order.</div>
            )}
          </div>
          <button
            className="bg-orange-500 text-white px-5 py-2 rounded text-sm font-semibold my-4"
            onClick={() => navigate(`/learn/${course.slug}`)}
          >
            Start Learning
          </button>
        </div>

        {/* RIGHT SIDEBAR */}
        <div className="bg-white rounded shadow p-6 h-fit">
          <img src={course.instructor.image} alt="" className="rounded mb-4" />

          <h3 className="font-bold text-lg mb-2">Download Our App</h3>

          <button className="bg-black text-white w-full py-2 rounded mb-3">
            Google Play
          </button>

          <p className="text-sm text-gray-600">
            Don’t spend, invest into a better version of yourself.
          </p>

          <div className="mt-5 space-y-2 text-sm">
            <p>✔ Online Access</p>
            <p>✔ Notes</p>
            <p>✔ Online Exam</p>
            <p>✔ Certificate</p>
          </div>
        </div>
      </div>

      {/* ===== NEWSLETTER ===== */}
      <div className="bg-blue-600 py-12 text-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold">
            Join Thousands Of Our Happy Students!
          </h2>

          <div className="mt-6 flex justify-center gap-2 max-w-xl mx-auto">
            <input
              className="flex-1 px-4 py-2 rounded text-black"
              placeholder="Your Email Address"
            />
            <button className="bg-orange-500 px-6 rounded">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
}
