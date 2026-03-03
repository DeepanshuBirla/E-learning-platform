import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

export default function HeroSlider({ slides }) {
  const navigate = useNavigate();

  return (
    <section className="bg-gradient-to-r from-blue-950 to-blue-700 text-white py-20 px-6 md:px-20">
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        loop
        className="max-w-7xl mx-auto"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="grid md:grid-cols-2 gap-10 items-center">

              {/* LEFT */}
              <div>
                <span className="inline-block bg-[#FF8C1A] text-sm px-4 py-1 rounded-full font-semibold mb-4">
                  70% OFF Limited Offer
                </span>

                <h1 className="text-4xl md:text-5xl font-bold leading-tight mt-3">
                  {slide.title}
                </h1>

                <p className="mt-4 text-lg text-white/90">
                  {slide.subtitle}
                </p>

                <div className="mt-6 flex gap-4 flex-wrap">
                  <button
                    onClick={() => navigate(slide.primaryButton.action)}
                    className="bg-[#FF8C1A] hover:bg-[#ff9f40] transition text-white px-6 py-3 rounded-full font-semibold shadow-lg"
                  >
                    {slide.primaryButton.label}
                  </button>

                  <button
                    onClick={() => navigate(slide.secondaryButton.action)}
                    className="border border-white text-white hover:bg-white hover:text-[#0B3C8A] transition px-6 py-3 rounded-full font-semibold"
                  >
                    {slide.secondaryButton.label}
                  </button>
                </div>
              </div>

              {/* RIGHT IMAGE */}
              <div className="relative">
                <img
                  src={slide.image.src}
                  alt={slide.image.alt}
                  className="rounded-2xl shadow-2xl h-80 w-full object-cover border-4 border-white/20"
                />
              </div>

            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
