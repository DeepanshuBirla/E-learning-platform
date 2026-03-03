
import { useParams, useNavigate } from "react-router-dom";
import data from "../Data/coursesData.json";

export default function CourseLearn() {
  const { slug } = useParams();
  const navigate = useNavigate();

  const course = data?.courses?.find(c => c.slug === slug);

  if (!course) {
    return <p className="text-center mt-10">Course not found</p>;
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto bg-white p-6 rounded shadow">

        <h1 className="text-2xl font-bold mb-2">
          {course.title}
        </h1>

        <p className="text-gray-600 mb-6">
          Start learning step-by-step
        </p>

        {/* MODULES */}
        <div className="space-y-6">
          {Array.isArray(course.modules) &&
            course.modules.map((module, moduleIndex) => {

              // ✅ Handle both STRING & OBJECT
              const moduleTitle =
                typeof module === "string" ? module : module.title;

              const lessons =
                typeof module === "object" ? module.lessons : [];

              return (
                <div
                  key={`module-${module.id ?? moduleIndex}`} // ✅ SAFE KEY
                  className="border rounded p-4"
                >
                  <h2 className="font-semibold text-lg mb-3">
                    📘 {moduleTitle}
                  </h2>
                {/* {console.log(lessons.length)} */}
                  {/* LESSONS */}
                  {Array.isArray(lessons) && lessons.length > 0 ? (
                    <ul className="space-y-2">
                      {lessons.map((lesson, lessonIndex) => (
                        <li
                          key={`lesson-${lesson.id ?? lessonIndex}`} // ✅ SAFE KEY
                          className="flex justify-between items-center bg-gray-50 p-3 rounded"
                        >
                          <span>
                            ▶ {lesson.title}
                            <span className="ml-2 text-sm text-gray-500">
                              ({lesson.type})
                            </span>
                          </span>

                          <button
                            onClick={() =>
                              navigate(
                                `/learn/${slug}/${moduleIndex}/${lessonIndex}`
                              )
                            }
                            className="bg-blue-600 text-white px-4 py-1 rounded"
                          >
                            Start
                          </button>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-sm text-gray-500">
                      Lessons coming soon…
                    </p>
                  )}
                </div>
              );
            })}
        </div>

      </div>
    </div>
  );
}
