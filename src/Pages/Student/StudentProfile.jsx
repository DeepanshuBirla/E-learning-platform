import React, { useState, useEffect } from "react";
import profileData from "../../Data/studentProfileData.json";

export default function StudentProfile() {
  const [editMode, setEditMode] = useState(false);
  const loggedUser = JSON.parse(localStorage.getItem("loggedInUser"));

  // 🔹 load from localStorage or JSON
  //     const [profile, setProfile] = useState(() => {
  //     const saved = localStorage.getItem("studentProfile");
  //     return saved ? JSON.parse(saved) : profileData;
  //   });

  const [profile, setProfile] = useState(() => {
    const saved = localStorage.getItem("studentProfile");
    if (saved) return JSON.parse(saved);

    return {
      ...profileData,
      email: loggedUser?.email || profileData.email,
      name: loggedUser?.name || profileData.name,
    };
  });

  // 🔹 auto save on change (NO UI impact)
  useEffect(() => {
    localStorage.setItem("studentProfile", JSON.stringify(profile));
  }, [profile]);

  const handleChange = (e) => {
    setProfile({
      ...profile,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 px-4 py-10">
      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow overflow-hidden">
        {/* ================= HEADER ================= */}
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-6 text-white flex flex-col sm:flex-row items-center gap-6">
          <img
            src={profile.profileImage}
            alt={profile.name}
            className="w-24 h-24 rounded-full border-4 border-white"
          />

          <div className="text-center sm:text-left">
            <h2 className="text-2xl font-bold">{profile.name}</h2>
            <p className="opacity-90">{profile.email}</p>
            <p className="text-sm mt-1">
              Enrolled Courses: {profile.courses.enrolled}
            </p>
          </div>
        </div>

        {/* ================= BODY ================= */}
        <div className="p-6 grid md:grid-cols-2 gap-8">
          {/* -------- LEFT -------- */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Personal Information</h3>

            <div className="space-y-4">
              {/* NAME */}
              <div>
                <label className="text-sm text-gray-500">Full Name</label>
                <input
                  name="name"
                  value={profile.name}
                  onChange={handleChange}
                  disabled={!editMode}
                  className={`w-full border px-3 py-2 rounded mt-1 ${
                    !editMode && "bg-gray-100"
                  }`}
                />
              </div>

              {/* EMAIL */}
              <div>
                <label className="text-sm text-gray-500">Email</label>
                <input
                  value={profile.email}
                  disabled
                  className="w-full border px-3 py-2 rounded mt-1 bg-gray-100"
                />
              </div>

              {/* PHONE */}
              <div>
                <label className="text-sm text-gray-500">Phone</label>
                <input
                  name="phone"
                  value={profile.phone}
                  onChange={handleChange}
                  disabled={!editMode}
                  className={`w-full border px-3 py-2 rounded mt-1 ${
                    !editMode && "bg-gray-100"
                  }`}
                />
              </div>
            </div>

            {/* BUTTONS (UI SAME) */}
            <div className="flex gap-3 mt-6">
              {!editMode ? (
                <button
                  onClick={() => setEditMode(true)}
                  className="bg-indigo-600 text-white px-6 py-2 rounded hover:bg-indigo-700"
                >
                  Edit Profile
                </button>
              ) : (
                <>
                  <button
                    onClick={() => setEditMode(false)}
                    className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700"
                  >
                    Save
                  </button>

                  <button
                    onClick={() => setEditMode(false)}
                    className="border px-6 py-2 rounded"
                  >
                    Cancel
                  </button>
                </>
              )}
            </div>
          </div>

          {/* -------- RIGHT -------- */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Account Overview</h3>

            <div className="bg-gray-50 p-4 rounded-lg space-y-3 text-sm">
              <p>
                <strong>Joined On:</strong> {profile.joinedOn}
              </p>
              <p>
                <strong>Status:</strong>{" "}
                <span className="text-green-600 font-semibold">
                  {profile.status}
                </span>
              </p>
              <p>
                <strong>Courses Enrolled:</strong> {profile.courses.enrolled}
              </p>
              <p>
                <strong>In Progress:</strong> {profile.courses.inProgress}
              </p>
              <p>
                <strong>Completed:</strong> {profile.courses.completed}
              </p>
            </div>

            <button className="mt-6 w-full border border-indigo-600 text-indigo-600 py-2 rounded hover:bg-indigo-50">
              Change Password
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
