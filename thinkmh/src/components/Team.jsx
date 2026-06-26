import React from "react";

const Team = () => {
  return (
    <section className="bg-white-50 py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold text-slate-900 mt-3">
            Meet Our Leadership
          </h2>

          <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
            ThinkMH is driven by experienced professionals with expertise in
            research, technology, media, public engagement, and Maharashtra's
            socio-economic landscape.
          </p>
        </div>

        {/* Dr. Manasi Phadake */}

        <div className="grid md:grid-cols-3 gap-10 items-center mb-24">
          {/* Photo */}
          <div className="flex justify-center">
            <img
              src="/mansi.jpg"
              alt="Dr. Manasi Phadake"
              className="w-56 h-56 rounded-full object-cover shadow-xl border-4 border-blue-100"
            />
          </div>

          {/* Content */}
          <div className="md:col-span-2">
            <h3 className="text-4xl font-bold text-slate-900 mb-3">
              Dr. Manasi Phadake
            </h3>

            {/* <p className="text-blue-700 font-semibold text-lg mb-5">
              Designation
            </p> */}

            <p className="text-gray-700 leading-8 text-lg">
              Dr. Manasi Phadake is a key member of ThinkMH's leadership team.
              Her work focuses on research, analysis, and strategic direction
              across governance, society, and public policy initiatives.
              Detailed profile information can be updated once finalized.
            </p>
          </div>
        </div>

        {/* Vinayak Pachalag */}

        <div className="grid md:grid-cols-3 gap-10 items-center">
          {/* Content */}
          <div className="md:col-span-2 order-2 md:order-1">
            <h3 className="text-4xl font-bold text-slate-900 mb-3">
              Vinayak Pachalag
            </h3>

            <p className="text-blue-700 font-semibold text-lg mb-4">
              Founder, Director & CEO
            </p>

            <p className="font-medium text-gray-800 mb-5">
              M.Tech in AI | Electronics Engineer | Author | Media Strategist
            </p>

            <p className="text-gray-700 leading-8 text-lg">
              With 150+ lectures and 2 books, Vinayak brings deep insights into
              media, technology, and public engagement. He has spearheaded
              award-winning campaigns like Amacha Tharalay and is a recipient of
              the Maharshi Narad Puraskar.
            </p>

            <p className="text-gray-700 leading-8 text-lg mt-4">
              He serves as an advisor to educational institutions and national
              innovation councils, contributing to policy discussions,
              technology adoption, and public engagement initiatives.
            </p>
          </div>

          {/* Photo */}
          <div className="flex justify-center order-1 md:order-2">
            <img
              src="/vinayak.jpg"
              alt="Vinayak Pachalag"
              className="w-56 h-56 rounded-full object-cover shadow-xl border-4 border-blue-100"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
