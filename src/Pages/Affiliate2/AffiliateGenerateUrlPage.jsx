import React, { useState } from "react";
import AffiliateSidebar from "./AffiliateSidebar";

const coursesData = [
  {
    id: 23,
    title: "Free Sample Videos",
    category: "Free Videos",
    price: 0,
    duration: "0 days",
    image: "https://app.easywaylearn.in/uploads/courses/thumbnails/23_Image.jpg",
    slug: "free-sample-videos"
  },
  {
    id: 25,
    title: "Ultimate Spoken English (1 Month)",
    category: "The Ultimate English",
    price: 599,
    duration: "30 days",
    image: "https://app.easywaylearn.in/uploads/courses/thumbnails/25_Image.jpg",
    slug: "ultimate-spoken-english-1-month"
  },
  {
    id: 24,
    title: "Ultimate Spoken English (3 Months)",
    category: "The Ultimate English",
    price: 1499,
    duration: "90 days",
    image: "https://app.easywaylearn.in/uploads/courses/thumbnails/24_Image.jpg",
    slug: "the-ultimate-english-90-days"
  },
  {
    id: 17,
    title: "Ultimate Spoken English (6 Months)",
    category: "The Ultimate English",
    price: 2800,
    duration: "180 days",
    image: "https://app.easywaylearn.in/uploads/courses/thumbnails/17_Image.jpg",
    slug: "the-ultimate-english-180-days"
  }
];

export default function GenerateUrl() {
  const [search, setSearch] = useState("");
  const [generatedLink, setGeneratedLink] = useState("");
  const [showModal, setShowModal] = useState(false);

  const filteredCourses = coursesData.filter(course =>
    course.title.toLowerCase().includes(search.toLowerCase())
  );

  const generateLink = (course) => {
    const affiliateId = "EWL28476730"; // dynamic later
    const link = https://elearn.in/learn/${course.slug}?ref=${affiliateId};
    setGeneratedLink(link);
    setShowModal(true);
  };

  const copyLink = () => {
    navigator.clipboard.writeText(generatedLink);
    alert("Affiliate link copied!");
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      <AffiliateSidebar/>

      <main className="flex-1 m-1">
        {/* ================= SEARCH ================= */}
      <div className="max-w-md mb-6">
        <div className="flex">
          <input
            type="text"
            placeholder="Search By Course Name"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="flex-1 border px-3 py-2 rounded-l outline-none"
          />
          <button className="bg-gray-900 text-white px-4 rounded-r">
            Go!
          </button>
        </div>
      </div>

      {/* ================= COURSES ================= */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCourses.map(course => (
          <div key={course.id} className="bg-white shadow rounded overflow-hidden">
            <img
              src={course.image}
              alt={course.title}
              className="w-full h-44 object-cover"
            />

            <div className="p-4">
              <h3 className="font-semibold">{course.title}</h3>
              <p className="text-sm text-gray-500">{course.category}</p>

              <p className="mt-2 text-green-700 font-semibold">
                Price : {course.price === 0 ? "Free" : ₹${course.price}} <br />
                Duration : {course.duration}
              </p>

              <div className="flex gap-2 mt-4">
                <a
                  href={https://easywaylearn.in/learn/${course.slug}}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm border px-3 py-1 rounded"
                >
                  Browse Course
                </a>

                <button
                  onClick={() => generateLink(course)}
                  className="text-sm bg-orange-500 text-white px-3 py-1 rounded"
                >
                  Generate Link
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ================= MODAL ================= */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded shadow w-full max-w-md p-6 text-center">
            <h3 className="text-lg font-semibold mb-4">
              Affiliate Link Generated
            </h3>

            <p className="break-all text-blue-600 mb-4">
              {generatedLink}
            </p>

            <div className="flex justify-center gap-4">
              <button
                onClick={copyLink}
                className="bg-orange-500 text-white px-4 py-2 rounded"
              >
                Copy Link
              </button>
              <button
                onClick={() => setShowModal(false)}
                className="border px-4 py-2 rounded"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
      </main>

    </div>
  );
}