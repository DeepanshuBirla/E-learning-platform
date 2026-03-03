import React from "react";

export default function AboutPage() {
  return (
    <div className="bg-gray-100 min-h-screen">

      {/* ===== HERO SECTION ===== */}
      <section className="bg-blue-950 text-white py-16 px-6 md:px-20">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-bold">
            About eLearn
          </h1>
          <p className="mt-4 text-lg opacity-90">
            Learn professional skills online and grow your career with confidence.
          </p>
        </div>
      </section>

      {/* ===== ABOUT CONTENT ===== */}
      <section className="py-16 px-6 md:px-20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

          {/* Text */}
          <div>
            <h2 className="text-2xl font-bold mb-4">
              Who We Are
            </h2>
            <p className="text-gray-700 mb-4">
              eLearn is an online learning platform designed to help students,
              professionals, and job seekers build real-world skills such as
              Spoken English, Soft Skills, Personality Development, and Career
              Preparation.
            </p>

            <p className="text-gray-700">
              Our mission is to make quality education accessible to everyone
              through easy-to-understand lessons, expert instructors, and
              practical learning methods.
            </p>
          </div>

          {/* Image */}
          <div className="h-64 bg-gray-300 rounded flex items-center justify-center">
            <span className="text-gray-500">About Image</span>
          </div>
        </div>
      </section>

      {/* ===== WHY ELEARN ===== */}
      <section className="bg-white py-16 px-6 md:px-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-10">
            Why Choose eLearn?
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-100 p-6 rounded shadow text-center">
              <h3 className="font-semibold text-lg mb-2">
                Expert Instructors
              </h3>
              <p className="text-gray-600">
                Learn from certified trainers with years of experience.
              </p>
            </div>

            <div className="bg-gray-100 p-6 rounded shadow text-center">
              <h3 className="font-semibold text-lg mb-2">
                Practical Learning
              </h3>
              <p className="text-gray-600">
                Real-life examples, practice sessions, and assessments.
              </p>
            </div>

            <div className="bg-gray-100 p-6 rounded shadow text-center">
              <h3 className="font-semibold text-lg mb-2">
                Certification
              </h3>
              <p className="text-gray-600">
                Get a certificate after successful course completion.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== STATS ===== */}
      <section className="py-16 px-6 md:px-20 bg-blue-50">
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8 text-center">
          <div>
            <h3 className="text-3xl font-bold text-blue-600">10+</h3>
            <p className="text-gray-600">Courses</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-blue-600">50K+</h3>
            <p className="text-gray-600">Students</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-blue-600">20+</h3>
            <p className="text-gray-600">Expert Instructors</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-blue-600">95%</h3>
            <p className="text-gray-600">Success Rate</p>
          </div>
        </div>
      </section>

      {/* ===== CALL TO ACTION ===== */}
      <section className="bg-amber-500 py-16 px-6 md:px-20 text-center text-white">
        <h2 className="text-2xl font-bold mb-4">
          Start Learning With eLearn Today
        </h2>
        <p className="mb-6">
          Join thousands of learners and upgrade your skills.
        </p>
        <a
          href="/courses"
          className="bg-white text-amber-500 px-8 py-3 rounded font-semibold"
        >
          Explore Courses
        </a>
      </section>

    </div>
  );
}
