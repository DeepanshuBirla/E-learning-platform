import { useNavigate } from "react-router-dom";

const categories = [
  { name: "English", slug: "english", count: 12 },
  { name: "Interview", slug: "interview", count: 6 },
  { name: "Personality", slug: "personality", count: 8 },
  { name: "Leadership", slug: "leadership", count: 4 }
];

export default function CategoriesSection() {
  const navigate = useNavigate();

  return (
    <section className="py-12 px-4 bg-gray-100">
      <div className="flex justify-between max-w-6xl mx-auto mb-6">
        <h2 className="text-3xl font-bold">Categories</h2>

        <button
          onClick={() => navigate("/categories")}
          className="text-blue-600 font-semibold"
        >
          Show all →
        </button>
      </div>

      <div className="max-w-6xl mx-auto grid sm:grid-cols-2 md:grid-cols-4 gap-6">
        {categories.map(cat => (
          <div
            key={cat.slug}
            onClick={() => navigate(`/category/${cat.slug}`)}
            className="cursor-pointer bg-gradient-to-r from-blue-200 to-indigo-200 p-6 rounded-xl shadow hover:scale-105 transition"
          >
            <h3 className="font-bold text-lg">{cat.name}</h3>
            <p className="text-sm text-gray-500">
              {cat.count} Courses
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
