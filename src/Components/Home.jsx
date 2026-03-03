import elearningImage from "../assets/eLearning.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import siteData from "../Data/siteData.json";
import booksData from "../Data/bookData.json";
import coursesData from "../Data/coursesData.json";
import { useNavigate } from "react-router-dom";
import HeroSlider from "./HeroSlider";
import CategoriesSection from "./CategoriesSection";
import BookCard from "./BookCard";
import VideoCourseCard from "./VideoCourseCard";
import AudioCourseCard from "./AudioCourseCard";

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="bg-gradient-to-b from-[#f8fbff] to-[#eef4ff]">

      {/* HERO */}
      <HeroSlider slides={siteData.heroSlides} />

      {/* ================= INSTRUCTORS (NORMAL) ================= */}
<section className="py-14 px-4 sm:px-8 md:px-12 lg:px-16 bg-white">
  <h2 className="text-3xl font-bold text-center mb-10 text-slate-800">
    {siteData.instructorsSection.title}
  </h2>

  <div className="max-w-[1300px] mx-auto">
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={24}
      slidesPerView={1}
      pagination={{ clickable: true }}
      autoplay={{ delay: 2500 }}
      loop
      breakpoints={{
        640: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
      }}
    >
      {siteData.instructorsSection.items.map((item, i) => (
        <SwiperSlide key={i}>
          <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition border border-blue-100 overflow-hidden">

            {/* Image Header */}
            <div className="bg-gradient-to-r from-blue-200 to-indigo-200 py-6 flex justify-center">
              <div className="w-42 h-42 rounded-full overflow-hidden border-4 border-white shadow-lg">
                <img
                  src={elearningImage}
                  alt={item.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Content */}
            <div className="bg-gray-100 p-5 text-center">

              <h3 className="text-lg font-semibold text-slate-800">
                {item.name}
              </h3>

              <p className="text-purple-600 font-medium text-sm mt-1">
                {item.role}
              </p>

              <p className="text-gray-600 text-sm mt-3 leading-relaxed line-clamp-3">
                {item.description}
              </p>

              {/* Stats */}
              <div className="flex justify-center gap-6 text-xs text-gray-500 mt-4">
                <span>⭐ 4.9</span>
                <span>👨‍🎓 5k+ Students</span>
              </div>

              {/* Button */}
              <button className="mt-5 bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-6 py-2 rounded-full text-sm font-semibold hover:opacity-90 transition">
                View Profile
              </button>

            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  </div>
</section>

    {/* ================= LATEST COURSES ================= */}
      <section className="py-12 px-4 bg-gray-100">
        <h2 className="text-3xl font-bold text-center mb-8">
          {coursesData.latestCoursesSection.title}
        </h2>

        <div className="max-w-6xl mx-auto grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {coursesData.courses
            .filter(c => c.type !== "book")
            .map(course =>
              course.type === "audio" ? (
                <AudioCourseCard key={course.id} course={course} />
              ) : (
                <VideoCourseCard key={course.id} course={course} />
              )
            )}
        </div>
      </section>

      {/* ================= BOOKS SECTION ================= */}

      <section className="py-12 px-4 sm:px-6 md:px-10 lg:px-14 bg-white">
  <h2 className="text-2xl md:text-3xl font-bold text-center mb-4 text-slate-800">
    {booksData.booksSection.title}
  </h2>

  <p className="text-center text-gray-500 max-w-2xl mx-auto mb-10">
    {booksData.booksSection.subtitle}
  </p>

  <div className="max-w-[1400px] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
    {booksData.books.map((book) => (
      <BookCard key={book.id} book={book} />
    ))}
  </div>
</section>


      {/* ================= CATEGORIES ================= */}
      <CategoriesSection />


      {/* ================= WHY CHOOSE ================= */}
      <section className="py-12 px-3 sm:px-6 md:px-10 lg:px-14 bg-white">
  <h2 className="text-3xl font-bold text-center mb-4 text-slate-800">
    {siteData.whyChooseSection.title}
  </h2>

  <p className="text-center text-gray-500 max-w-2xl mx-auto mb-12">
    Learn from experts, grow faster, and achieve your goals with confidence.
  </p>

  <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
    {siteData.whyChooseSection.items.map((item, i) => (
      <div
        key={i}
        className="group bg-gradient-to-r from-blue-200 to-indigo-200 rounded-2xl shadow-md hover:shadow-xl transition border border-blue-100 p-8 text-center relative overflow-hidden"
      >
        {/* Gradient Circle */}
        <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 flex items-center justify-center text-white text-2xl font-bold shadow-lg mb-5 group-hover:scale-110 transition">
          {i + 1}
        </div>

        {/* Title */}
        <h3 className="text-xl font-semibold text-slate-800 mb-2">
          {item.title}
        </h3>

        {/* Description */}
        <p className="text-gray-600 text-sm leading-relaxed">
          {item.description}
        </p>

        {/* Bottom glow */}
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-purple-600 to-indigo-600"></div>
      </div>
    ))}
  </div>
</section>


      {/* ================= HOW IT WORKS ================= */}
      <section className="py-12 px-3 sm:px-6 md:px-10 lg:px-14 bg-gray-100">
  <h2 className="text-3xl font-bold text-center mb-4 text-slate-800">
    {siteData.howItWorksSection.title}
  </h2>

  <p className="text-center text-gray-500 max-w-2xl mx-auto mb-12">
    Follow these simple steps and start your learning journey with confidence.
  </p>

  <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
    {siteData.howItWorksSection.steps.map((step, i) => (
      <div
        key={i}
        className="relative bg-gradient-to-r from-blue-200 to-indigo-200 rounded-2xl shadow-md hover:shadow-xl transition p-6 text-center border border-blue-100"
      >
        {/* Step Circle */}
        <div className="w-14 h-14 mx-auto rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 flex items-center justify-center text-white text-lg font-bold shadow-lg mb-4">
          {step.stepNumber}
        </div>

        {/* Line connector (desktop) */}
        {i !== siteData.howItWorksSection.steps.length - 1 && (
          <div className="hidden md:block absolute top-10 -right-4 w-8 h-1 bg-gradient-to-r from-purple-600 to-indigo-600"></div>
        )}

        {/* Title */}
        <h3 className="text-lg font-semibold text-slate-800 mb-2">
          {step.title}
        </h3>

        {/* Description */}
        <p className="text-gray-600 text-sm leading-relaxed">
          {step.description}
        </p>
      </div>
    ))}
  </div>
</section>


      {/* ================= AFFILIATE ================= */}
        <section className="py-12 px-3 sm:px-6 md:px-10 lg:px-14 bg-gradient-to-r from-purple-900 to-indigo-600 text-white relative overflow-hidden">

  {/* Decorative Blur */}
  <div className="absolute -top-20 -right-20 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>
  <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>

  <div className="relative max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

    {/* LEFT CONTENT */}
    <div>
      <h2 className="text-3xl md:text-4xl font-bold leading-tight">
        {siteData.affiliateSection.title}
      </h2>

      <p className="mt-4 text-lg text-white/90">
        {siteData.affiliateSection.description}
      </p>

      <ul className="mt-6 space-y-3 text-white/90">
        <li>✅ High commission on every sale</li>
        <li>✅ Zero investment to start</li>
        <li>✅ Trusted coaching brand</li>
        <li>✅ Real-time earnings tracking</li>
      </ul>

      <div className="mt-8 flex flex-wrap gap-4">
                <button onClick={() => navigate("/affiliate-register")}
          className="bg-white text-blue-700 px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition"
        >
          {siteData.affiliateSection.ctaLabel}
        </button>

        <button
          className="border border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-700 transition"
        >
          Learn More
        </button>
      </div>
    </div>

    {/* RIGHT INFO CARDS */}
    <div className="grid grid-cols-2 gap-6">

      <div className="bg-white/10 backdrop-blur rounded-2xl p-6 text-center shadow-lg">
        <h3 className="text-2xl font-bold">₹50K+</h3>
        <p className="text-sm mt-1">Monthly Earnings</p>
      </div>

      <div className="bg-white/10 backdrop-blur rounded-2xl p-6 text-center shadow-lg">
        <h3 className="text-2xl font-bold">10K+</h3>
        <p className="text-sm mt-1">Affiliates</p>
      </div>

      <div className="bg-white/10 backdrop-blur rounded-2xl p-6 text-center shadow-lg">
        <h3 className="text-2xl font-bold">30%</h3>
        <p className="text-sm mt-1">Commission</p>
      </div>

      <div className="bg-white/10 backdrop-blur rounded-2xl p-6 text-center shadow-lg">
        <h3 className="text-2xl font-bold">24/7</h3>
        <p className="text-sm mt-1">Support</p>
      </div>

    </div>

  </div>
</section>

    </div>
  );
}
