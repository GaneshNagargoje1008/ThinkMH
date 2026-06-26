import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const Hero = () => {
  return (
    <section>
      <Swiper
        modules={[Pagination, Autoplay]}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        loop={true}
      >
        {/* Slide 1 */}

        <SwiperSlide>
          <div
            className="relative h-[90vh] bg-cover bg-center"
            style={{
              backgroundImage: "url('/images/hero1.jpg')",
            }}
          >
            <div className="absolute inset-0 bg-blue-950/70"></div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 h-full flex items-center">
              <div className="max-w-3xl">
                <span className="uppercase tracking-[4px] text-blue-300 font-semibold">
                  ThinkMH Research Platform
                </span>

                <h1 className="text-6xl font-bold text-white mt-5 leading-tight">
                  Understanding Maharashtra on Ground via Data
                </h1>

                <p className="text-gray-300 text-xl mt-6 leading-8">
                  ThinkMH combines data, field research, public sentiment
                  tracking, and market intelligence to provide a comprehensive
                  understanding of Maharashtra's economy, governance, politics,
                  and society.
                </p>

                <div className="flex gap-5 mt-10">
                  <button className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-lg font-semibold transition">
                    Explore Reports
                  </button>

                  <button className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-lg font-semibold transition">
                    Contact Us
                  </button>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 2 */}

        <SwiperSlide>
          <div
            className="relative h-[90vh] bg-cover bg-center"
            style={{
              backgroundImage: "url('/images/hero2.jpg')",
            }}
          >
            <div className="absolute inset-0 bg-black/60"></div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 h-full flex items-center">
              <div className="max-w-3xl">
                <span className="uppercase tracking-[4px] text-blue-300 font-semibold">
                  Pulse Tracker
                </span>

                <h1 className="text-6xl font-bold text-white mt-5">
                  Maharashtra Pulse Tracker
                </h1>

                <p className="text-gray-300 text-xl mt-6 leading-8">
                  Measure economic confidence, governance perception, and
                  political sentiment through data-backed surveys.
                </p>
                <div className="flex gap-5 mt-10">
                  <button className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-lg font-semibold transition">
                    Explore Reports
                  </button>

                  <button className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-lg font-semibold transition">
                    Contact Us
                  </button>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 3 */}

        <SwiperSlide>
          <div
            className="relative h-[90vh] bg-cover bg-center"
            style={{
              backgroundImage: "url('/images/hero3.jpg')",
            }}
          >
            <div className="absolute inset-0 bg-black/60"></div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 h-full flex items-center">
              <div className="max-w-3xl">
                <span className="uppercase tracking-[4px] text-blue-300 font-semibold">
                  Governance Tracker
                </span>

                <h1 className="text-6xl font-bold text-white mt-5">
                  Data That Drives Better Governance
                </h1>

                <p className="text-gray-300 text-xl mt-6 leading-8">
                  Track transparency, accountability, public services, and
                  governance performance across Maharashtra.
                </p>
                <div className="flex gap-5 mt-10">
                  <button className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-lg font-semibold transition">
                    Explore Reports
                  </button>

                  <button className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-lg font-semibold transition">
                    Contact Us
                  </button>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 4 */}

        <SwiperSlide>
          <div
            className="relative h-[90vh] bg-cover bg-center"
            style={{
              backgroundImage: "url('/images/hero4.jpg')",
            }}
          >
            <div className="absolute inset-0 bg-black/60"></div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 h-full flex items-center">
              <div className="max-w-3xl">
                <span className="uppercase tracking-[4px] text-blue-300 font-semibold">
                  Market Intelligence
                </span>

                <h1 className="text-6xl font-bold text-white mt-5">
                  Maharashtra Market Intelligence Reports
                </h1>

                <p className="text-gray-300 text-xl mt-6 leading-8">
                  Consumer trends, industry analysis, sector outlook, and
                  business intelligence for policymakers and enterprises.
                </p>
                <div className="flex gap-5 mt-10">
                  <button className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-lg font-semibold transition">
                    Explore Reports
                  </button>

                  <button className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-lg font-semibold transition">
                    Contact Us
                  </button>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Hero;
