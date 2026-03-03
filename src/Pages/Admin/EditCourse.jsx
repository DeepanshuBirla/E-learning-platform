import { useParams, useNavigate } from "react-router-dom";
import courseJson from "../../Data/coursesData.json";
import Sidebar from "../../Components/sidebar";
import CourseForm from "./CourseForm";

export default function EditCourse() {
  const { id } = useParams();
  const navigate = useNavigate();

  const course = courseJson.courses.find(
    (c) => c.id === Number(id)
  );

  if (!course) return <p>Course not found</p>;

  const initialData = {
    title: course.title,
    slug: course.slug,
    duration: course.duration,
    totalLessons: course.totalLessons,
    language: course.language,
    shortDescription: course.shortDescription,
    longDescription: course.longDescription,
    instructorName: course.instructor.name,
    instructorRole: course.instructor.role,
    instructorExperience: course.instructor.experience,
  };

  const handleUpdate = (data) => {
    const updatedCourse = {
      ...course,
      title: data.title,
      slug: data.slug,
      duration: data.duration,
      totalLessons: Number(data.totalLessons),
      language: data.language,
      shortDescription: data.shortDescription,
      longDescription: data.longDescription,
      instructor: {
        ...course.instructor,
        name: data.instructorName,
        role: data.instructorRole,
        experience: data.instructorExperience,
      },
    };

    console.log("UPDATED COURSE:", updatedCourse);
    navigate("/admin/courses");
  };

  return (
    <div className="flex">
      <Sidebar />
      <div className="p-6 bg-gray-100 min-h-screen w-full">
        <h1 className="text-xl font-bold mb-4">Edit Course</h1>
        <CourseForm
          initialData={initialData}
          onSubmit={handleUpdate}
          submitText="Update Course"
        />
      </div>
    </div>
  );
}
