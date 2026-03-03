import { useNavigate } from "react-router-dom";

export default function BookCard({ book }) {
  const navigate = useNavigate();

  return (
    <div className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden border border-orange-100 flex flex-col h-full">
      
      {/* Image Area */}
      <div className="relative h-40">
        <span className="absolute top-2 left-2 bg-orange-600 text-white text-xs px-2 py-1 rounded">
          📘 BOOK
        </span>

        <img
          src={book.cover}
          alt={book.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col flex-grow">

        <h3 className="font-bold text-slate-800">
          {book.title}
        </h3>

        <div className="flex items-center gap-2 mt-2 text-xs">
          <span className="bg-green-400 px-2 py-0.5 rounded-full font-semibold">
            PDF
          </span>

          <span className="bg-gray-200 px-2 py-0.5 rounded-full">
            {book.pages} Pages
          </span>
        </div>

        <p className="text-sm text-gray-600 mt-2 line-clamp-2">
          {book.shortDescription}
        </p>

        <div className="mt-3 text-xs text-gray-500 space-y-1">
          <p>⭐ Rating: {book.rating}</p>
          <p>📦 Delivery: Instant Download</p>
        </div>

        <div className="mt-3 text-lg font-bold text-orange-600">
          ₹{book.price}
        </div>

        {/* Button always bottom */}
        <button
          onClick={() => navigate(`/book/${book.slug}`)}
          className="mt-auto w-full bg-orange-600 hover:bg-orange-700 text-white py-2 rounded transition"
        >
          Buy Book
        </button>

      </div>
    </div>
  );
}