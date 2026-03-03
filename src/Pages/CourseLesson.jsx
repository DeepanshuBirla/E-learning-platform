import { useParams, useNavigate } from "react-router-dom";
import data from "../Data/coursesData.json";

export default function CourseLesson() {
  const { slug, moduleIndex, lessonIndex } = useParams();
  const navigate = useNavigate();

  const course = data.courses.find((c) => c.slug === slug);

  const mIndex = parseInt(moduleIndex, 10);
  const lIndex = parseInt(lessonIndex, 10);

  if (
    !course ||
    !Array.isArray(course.modules) ||
    isNaN(mIndex) ||
    isNaN(lIndex) ||
    !course.modules[mIndex] ||
    !Array.isArray(course.modules[mIndex].lessons) ||
    !course.modules[mIndex].lessons[lIndex]
  ) {
    return (
      <p className="text-center mt-10 text-red-500">
        Lesson not found or invalid URL
      </p>
    );
  }

  const module = course.modules[mIndex];
  const lesson = module.lessons[lIndex];

  const isLastLesson =
    mIndex === course.modules.length - 1 &&
    lIndex === module.lessons.length - 1;

  const markLessonComplete = () => {
    const progress = JSON.parse(localStorage.getItem("courseProgress")) || {};

    if (!progress[slug]) {
      progress[slug] = { lessons: {}, testPassed: false };
    }

    progress[slug].lessons[`${mIndex}-${lIndex}`] = true;

    localStorage.setItem("courseProgress", JSON.stringify(progress));
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-5xl mx-auto bg-white p-6 rounded shadow">
        <h2 className="text-xl font-bold mb-2">{module.title}</h2>

        <h3 className="text-lg font-semibold mb-4">{lesson.title}</h3>

        {/* CONTENT */}
        <div className="mb-6">
          {lesson.type === "video" && (
            <video controls className="w-full rounded">
              <source src={lesson.src} />
            </video>
          )}

          {lesson.type === "audio" && (
            <audio controls className="w-full">
              <source src={lesson.src} />
            </audio>
          )}

          {lesson.type === "pdf" && (
            <iframe
              src={lesson.src}
              title="PDF"
              className="w-full h-96 border"
            />
          )}
        </div>

        {/* NAVIGATION */}
        <div className="flex justify-between">
          <button
            disabled={mIndex === 0 && lIndex === 0}
            onClick={() => {
              if (lIndex > 0) {
                navigate(`/learn/${slug}/${mIndex}/${lIndex - 1}`);
              } else {
                const prevModule = mIndex - 1;
                const prevLesson =
                  course.modules[prevModule].lessons.length - 1;
                navigate(`/learn/${slug}/${prevModule}/${prevLesson}`);
              }
            }}
            className="bg-gray-300 px-4 py-2 rounded disabled:opacity-50"
          >
            Previous
          </button>

          {!isLastLesson ? (
            <button
              onClick={() => {
                if (lIndex < module.lessons.length - 1) {
                  markLessonComplete();
                  navigate(`/learn/${slug}/${mIndex}/${lIndex + 1}`);
                } else {
                  navigate(`/learn/${slug}/${mIndex + 1}/0`);
                }
              }}
              className="bg-blue-600 text-white px-4 py-2 rounded"
            >
              Next
            </button>
          ) : (
            <button className="bg-green-600 text-white px-4 py-2 rounded">
              🎉 Course Completed
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

// import { useParams, useNavigate } from "react-router-dom";
// import data from "../Data/data.json";

// export default function CourseLesson() {
//   const { slug, moduleIndex, lessonIndex } = useParams();
//   const navigate = useNavigate();

//   const course = data.courses.find(c => c.slug === slug);
//   const module = course?.modules[moduleIndex];
//   const lesson = module?.lessons[lessonIndex];

//   if (!course || !lesson) {
//     return <p className="text-center mt-10">Lesson not found</p>;
//   }

//   return (
//     <div className="min-h-screen bg-gray-100 p-6">
//       <div className="max-w-5xl mx-auto bg-white p-6 rounded shadow">

//         <h2 className="text-xl font-bold mb-4">
//           {lesson.title}
//         </h2>

//         {/* CONTENT */}
//         {lesson.type === "video" && (
//           <video controls className="w-full rounded">
//             <source src={lesson.src} />
//           </video>
//         )}

//         {lesson.type === "audio" && (
//           <audio controls className="w-full">
//             <source src={lesson.src} />
//           </audio>
//         )}

//         {lesson.type === "pdf" && (
//           <iframe
//             src={lesson.src}
//             title="PDF"
//             className="w-full h-96 border"
//           />
//         )}

//         {/* NAV */}
//         <div className="flex justify-between mt-6">
//           <button
//             onClick={() => navigate(-1)}
//             className="bg-gray-300 px-4 py-2 rounded"
//           >
//             Back
//           </button>

//           <button
//             className="bg-green-600 text-white px-4 py-2 rounded"
//           >
//             Mark as Complete ✔
//           </button>
//         </div>

//       </div>
//     </div>
//   );
// }
