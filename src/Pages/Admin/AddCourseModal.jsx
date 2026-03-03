import { useState } from "react";

export default function AddCourseModal({ onClose, onAdd }) {
  const [form, setForm] = useState({
    title: "",
    slug: "",
    shortDescription: "",
    longDescription: "",
    language: "English",
    duration: "",
    totalLessons: "",
    instructorName: "",
    instructorRole: "",
    instructorExperience: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submitHandler = () => {
    if (!form.title || !form.slug) {
      alert("Title & Slug required");
      return;
    }

    const newCourse = {
      id: Date.now(),
      slug: form.slug,
      title: form.title,
      creator: form.instructorName || "Admin",

      rating: 0,
      reviews: 0,
      students: 0,

      duration: form.duration,
      totalLessons: Number(form.totalLessons),
      language: form.language,

      shortDescription: form.shortDescription,
      longDescription: form.longDescription,

      features: [],
      offers: [],
      modules: [],

      test: {
        passPercentage: 60,
        questions: []
      },

      certificate: {
        available: false,
        template: ""
      },

      progressRules: {
        lessonCompletionRequired: true,
        testRequired: false,
        certificateAfterTest: false
      },

      instructor: {
        name: form.instructorName,
        role: form.instructorRole,
        experience: form.instructorExperience,
        image: ""
      }
    };

    onAdd(newCourse);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      <div className="bg-white w-full max-w-2xl rounded p-6 overflow-y-auto max-h-[90vh]">

        <h2 className="text-xl font-bold mb-4">Add New Course</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input name="title" placeholder="Course Title" className="border p-2 rounded" onChange={handleChange} />
          <input name="slug" placeholder="Slug (spoken-english)" className="border p-2 rounded" onChange={handleChange} />
          <input name="duration" placeholder="Duration (10 Hours)" className="border p-2 rounded" onChange={handleChange} />
          <input name="totalLessons" type="number" placeholder="Total Lessons" className="border p-2 rounded" onChange={handleChange} />
          <input name="language" placeholder="Language" className="border p-2 rounded" onChange={handleChange} />

          <input name="instructorName" placeholder="Instructor Name" className="border p-2 rounded" onChange={handleChange} />
          <input name="instructorRole" placeholder="Instructor Role" className="border p-2 rounded" onChange={handleChange} />
          <input name="instructorExperience" placeholder="Experience (6+ Years)" className="border p-2 rounded" onChange={handleChange} />
        </div>

        <textarea
          name="shortDescription"
          placeholder="Short Description"
          className="border p-2 rounded w-full mt-3"
          onChange={handleChange}
        />

        <textarea
          name="longDescription"
          placeholder="Long Description"
          className="border p-2 rounded w-full mt-3"
          rows="4"
          onChange={handleChange}
        />

        <div className="flex justify-end gap-3 mt-5">
          <button onClick={onClose} className="px-4 py-2 border rounded">
            Cancel
          </button>
          <button
            onClick={submitHandler}
            className="px-4 py-2 bg-blue-600 text-white rounded"
          >
            Add Course
          </button>
        </div>

      </div>
    </div>
  );
}
