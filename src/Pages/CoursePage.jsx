import React from "react";
import { useNavigate } from "react-router-dom";
import data from "../Data/data.json";

export default function CoursePage() {
  const navigate = useNavigate();

  return (
    <div className="bg-gray-100 min-h-screen">

      {/* ===== PAGE HEADER ===== */}
      <section className="bg-blue-950 text-white py-14 px-6 md:px-20">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-bold">
            Our Courses
          </h1>
          <p className="mt-3 text-lg opacity-90">
            Explore our professional courses and start learning today.
          </p>
        </div>
      </section>

      {/* ===== COURSES GRID ===== */}
      <section className="py-16 px-6 md:px-20">
        <div className="max-w-6xl mx-auto grid gap-8 sm:grid-cols-2 md:grid-cols-3">

          {data.courses?.map((course) => (
            <div
              key={course.id}
              className="bg-white rounded shadow hover:shadow-lg transition p-4 flex flex-col"
            >
              {/* Image */}
              <div className="h-40 bg-gray-300 rounded overflow-hidden mb-4">
                <img
                  src={course.instructor.image}
                  alt={course.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold">
                {course.title}
              </h3>

              {/* Short Description */}
              <p className="text-gray-600 mt-2 flex-row">
                {course.shortDescription}
              </p>

              {/* Info */}
              <div className="flex justify-between text-sm text-gray-500 mt-3">
                <span>{course.duration}</span>
                <span>{course.language}</span>
              </div>

              {/* CTA */}
              <button
                onClick={() => navigate(`/course/${course.slug}`)}
                className="mt-4 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded font-semibold"
              >
                View Course
              </button>
            </div>
          ))}

        </div>
      </section>
    </div>
  );
}
