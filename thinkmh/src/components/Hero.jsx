import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const Hero = () => {
  return (
    <section className="w-full overflow-hidden">
      <Swiper
        modules={[Pagination, Autoplay]}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        loop={true}
        className="w-full"
      >
        {/* Slide 1 */}
        <SwiperSlide>
          <div
            className="relative h-[80vh] sm:h-[85vh] md:h-[90vh] w-full bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: "url('/images/hero1.jpg')",
            }}
          >
            <div className="absolute inset-0 bg-blue-950/75"></div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
              <div className="max-w-3xl w-full text-left">
                <span className="block uppercase tracking-[2px] sm:tracking-[4px] text-blue-300 text-xs sm:text-sm font-semibold">
                  ThinkMH Research Platform
                </span>

                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-3 sm:mt-5 leading-tight">
                  Understanding Maharashtra on Ground via Data
                </h1>

                <p className="text-gray-300 text-base sm:text-lg md:text-xl mt-4 sm:mt-6 leading-relaxed">
                  ThinkMH combines data, field research, public sentiment
                  tracking, and market intelligence to provide a comprehensive
                  understanding of Maharashtra's economy, governance, politics,
                  and society.
                </p>

                <div className="flex flex-col sm:flex-row gap-3 sm:gap-5 mt-8 sm:mt-10">
                  <button className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-white transition text-center">
                    Explore Reports
                  </button>

                  <button className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-white transition text-center">
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
            className="relative h-[80vh] sm:h-[85vh] md:h-[90vh] w-full bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: "url('/images/hero2.jpg')",
            }}
          >
            <div className="absolute inset-0 bg-black/65"></div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
              <div className="max-w-3xl w-full text-left">
                <span className="block uppercase tracking-[2px] sm:tracking-[4px] text-blue-300 text-xs sm:text-sm font-semibold">
                  Pulse Tracker
                </span>

                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-3 sm:mt-5 leading-tight">
                  Maharashtra Pulse Tracker
                </h1>

                <p className="text-gray-300 text-base sm:text-lg md:text-xl mt-4 sm:mt-6 leading-relaxed">
                  Measure economic confidence, governance perception, and
                  political sentiment through data-backed surveys.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-5 mt-8 sm:mt-10">
                  <button className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-white transition text-center">
                    Explore Reports
                  </button>

                  <button className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-white transition text-center">
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
            className="relative h-[80vh] sm:h-[85vh] md:h-[90vh] w-full bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: "url('/images/hero3.jpg')",
            }}
          >
            <div className="absolute inset-0 bg-black/65"></div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
              <div className="max-w-3xl w-full text-left">
                <span className="block uppercase tracking-[2px] sm:tracking-[4px] text-blue-300 text-xs sm:text-sm font-semibold">
                  Governance Tracker
                </span>

                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-3 sm:mt-5 leading-tight">
                  Data That Drives Better Governance
                </h1>

                <p className="text-gray-300 text-base sm:text-lg md:text-xl mt-4 sm:mt-6 leading-relaxed">
                  Track transparency, accountability, public services, and
                  governance performance across Maharashtra.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-5 mt-8 sm:mt-10">
                  <button className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-white transition text-center">
                    Explore Reports
                  </button>

                  <button className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-white transition text-center">
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
            className="relative h-[80vh] sm:h-[85vh] md:h-[90vh] w-full bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: "url('/images/hero4.jpg')",
            }}
          >
            <div className="absolute inset-0 bg-black/65"></div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
              <div className="max-w-3xl w-full text-left">
                <span className="block uppercase tracking-[2px] sm:tracking-[4px] text-blue-300 text-xs sm:text-sm font-semibold">
                  Market Intelligence
                </span>

                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-3 sm:mt-5 leading-tight">
                  Maharashtra Market Intelligence Reports
                </h1>

                <p className="text-gray-300 text-base sm:text-lg md:text-xl mt-4 sm:mt-6 leading-relaxed">
                  Consumer trends, industry analysis, sector outlook, and
                  business intelligence for policymakers and enterprises.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-5 mt-8 sm:mt-10">
                  <button className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-white transition text-center">
                    Explore Reports
                  </button>

                  <button className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-white transition text-center">
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