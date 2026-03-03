// import { useState } from "react";
// import courseJson from "../../Data/coursesData.json";
// import Sidebar from "../../Components/sidebar";

// export default function Courses() {
//   const [courses, setCourses] = useState(courseJson.courses);

//   // DELETE COURSE
//   const deleteCourse = (id) => {
//     if (!window.confirm("Delete this course?")) return;
//     setCourses(courses.filter((c) => c.id !== id));
//   };

//   // ADD BASIC COURSE (minimal – baad me full form banega)
//   const addCourse = () => {
//     const newCourse = {
//       id: Date.now(),
//       slug: "new-course",
//       title: "New Course",
//       creator: "Admin",
//       rating: 0,
//       reviews: 0,
//       students: 0,
//       duration: "0 Hours",
//       totalLessons: 0,
//       language: "English",
//       shortDescription: "New course description",
//       longDescription: "",
//       features: [],
//       offers: [],
//       modules: [],
//       test: { passPercentage: 60, questions: [] },
//       certificate: { available: false, template: "" },
//       progressRules: {
//         lessonCompletionRequired: true,
//         testRequired: false,
//         certificateAfterTest: false,
//       },
//       instructor: {
//         name: "Admin",
//         role: "Instructor",
//         experience: "0 Years",
//         image: "",
//       },
//     };

//     setCourses([newCourse, ...courses]);
//   };

//   return (
//     <div className="flex">
//       <Sidebar />
//       <div className="p-6 bg-gray-100 min-h-screen w-full">
//         <div className="flex justify-between items-center mb-4">
//           <h1 className="text-xl font-bold">Manage Courses</h1>

//           <button
//             onClick={addCourse}
//             className="bg-blue-600 text-white px-4 py-2 rounded"
//           >
//             + Add Course
//           </button>
//         </div>

//         {/* TABLE */}
//         <div className="bg-white rounded shadow overflow-x-auto">
//           <table className="min-w-full text-sm">
//             <thead className="bg-gray-100">
//               <tr>
//                 <th className="p-2 text-left">Title</th>
//                 <th className="p-2 text-left">Instructor</th>
//                 <th className="p-2 text-center">Students</th>
//                 <th className="p-2 text-center">Rating</th>
//                 <th className="p-2 text-center">Lessons</th>
//                 <th className="p-2 text-center">Certificate</th>
//                 <th className="p-2 text-center">Actions</th>
//               </tr>
//             </thead>

//             <tbody>
//               {courses.map((course) => (
//                 <tr key={course.id} className="border-b hover:bg-gray-50">
//                   <td className="p-2 font-medium">
//                     {course.title}
//                     <p className="text-xs text-gray-500">
//                       {course.shortDescription}
//                     </p>
//                   </td>

//                   <td className="p-2">{course.instructor.name}</td>

//                   <td className="p-2 text-center">{course.students}</td>

//                   <td className="p-2 text-center">⭐ {course.rating}</td>

//                   <td className="p-2 text-center">{course.totalLessons}</td>

//                   <td className="p-2 text-center">
//                     {course.certificate.available ? "Yes" : "No"}
//                   </td>

//                   <td className="p-2 text-center space-x-2">
//                     <button className="bg-green-600 text-white px-3 py-1 rounded text-xs">
//                       View
//                     </button>

//                     <button className="bg-yellow-500 text-white px-3 py-1 rounded text-xs">
//                       Edit
//                     </button>

//                     <button
//                       onClick={() => deleteCourse(course.id)}
//                       className="bg-red-600 text-white px-3 py-1 rounded text-xs"
//                     >
//                       Delete
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// }

import { useState } from "react";
import courseJson from "../../Data/coursesData.json";
import Sidebar from "../../Components/sidebar";
import DataTable from "../../Components/DataTable";
import { useNavigate } from "react-router-dom";

export default function Courses() {
  const [courses, setCourses] = useState(courseJson.courses);
  const navigate = useNavigate();

  const deleteCourse = (id) => {
    if (!window.confirm("Delete this course?")) return;
    setCourses(courses.filter((c) => c.id !== id));
  };

  const addCourse = () => {
    const newCourse = {
      id: Date.now(),
      slug: "new-course",
      title: "New Course",
      creator: "Admin",
      rating: 0,
      reviews: 0,
      students: 0,
      duration: "0 Hours",
      totalLessons: 0,
      language: "English",
      shortDescription: "New course description",
      longDescription: "",
      features: [],
      offers: [],
      modules: [],
      test: { passPercentage: 60, questions: [] },
      certificate: { available: false, template: "" },
      progressRules: {
        lessonCompletionRequired: true,
        testRequired: false,
        certificateAfterTest: false,
      },
      instructor: {
        name: "Admin",
        role: "Instructor",
        experience: "0 Years",
        image: "",
      },
    };

    setCourses([newCourse, ...courses]);
  };

  const columns = [
    {
      key: "title",
      label: "Course",
      render: (course) => (
        <div>
          <p className="font-medium">{course.title}</p>
          <p className="text-xs text-gray-500">
            {course.shortDescription}
          </p>
        </div>
      ),
    },
    {
      key: "instructor",
      label: "Instructor",
      render: (course) => course.instructor.name,
    },
    {
      key: "students",
      label: "Students",
    },
    {
      key: "rating",
      label: "Rating",
      render: (course) => `⭐ ${course.rating}`,
    },
    {
      key: "totalLessons",
      label: "Lessons",
    },
    {
      key: "certificate",
      label: "Certificate",
      render: (course) =>
        course.certificate.available ? "Yes" : "No",
    },
  ];

  return (
    <div className="flex">
      <Sidebar />

      <div className="p-6 bg-gray-100 min-h-screen w-full">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 mb-4">
          <h1 className="text-xl font-bold">Manage Courses</h1>

          <button
          onClick={() => navigate("/admin/courses/add")}
            // onClick={addCourse}
            className="bg-blue-600 text-white px-4 py-2 rounded w-full sm:w-auto"
          >
            + Add Course
          </button>
        </div>

        <div className="bg-white rounded shadow">
          <DataTable
            columns={columns}
            data={courses}
            pageSize={6}
            renderActions={(course) => (
              <div className="flex flex-wrap gap-2 justify-center">
                <button className="bg-green-600 text-white px-3 py-1 rounded text-xs">
                  View
                </button>
                <button
                onClick={() => navigate(`/admin/courses/edit/${course.id}`)}
                className="bg-yellow-500 text-white px-3 py-1 rounded text-xs">
                  Edit
                </button>
                <button
                  onClick={() => deleteCourse(course.id)}
                  className="bg-red-600 text-white px-3 py-1 rounded text-xs"
                >
                  Delete
                </button>
              </div>
            )}
          />
        </div>
      </div>
    </div>
  );
}
