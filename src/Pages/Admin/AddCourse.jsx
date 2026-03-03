import Sidebar from "../../Components/sidebar";
import CourseForm from "./CourseForm";
import { useNavigate } from "react-router-dom";

export default function AddCourse() {
  const navigate = useNavigate();

  const initialData = {
    title: "",
    slug: "",
    duration: "",
    totalLessons: 0,
    language: "English",
    shortDescription: "",
    longDescription: "",
    instructorName: "",
    instructorRole: "",
    instructorExperience: "",
  };

  const handleAdd = (data) => {
    const newCourse = {
      id: Date.now(),
      slug: data.slug,
      title: data.title,
      creator: "Admin",
      rating: 0,
      reviews: 0,
      students: 0,
      duration: data.duration,
      totalLessons: Number(data.totalLessons),
      language: data.language,
      shortDescription: data.shortDescription,
      longDescription: data.longDescription,
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
        name: data.instructorName,
        role: data.instructorRole,
        experience: data.instructorExperience,
        image: "",
      },
    };

    console.log("ADD COURSE:", newCourse);
    navigate("/admin/courses");
  };

  return (
    <div className="flex">
      <Sidebar />
      <div className="p-6 bg-gray-100 min-h-screen w-full">
        <h1 className="text-xl font-bold mb-4">Add Course</h1>
        <CourseForm
          initialData={initialData}
          onSubmit={handleAdd}
          submitText="Add Course"
        />
      </div>
    </div>
  );
}
