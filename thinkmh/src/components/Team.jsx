import React from "react";

const Team = () => {
  return (
    <section className="bg-slate-50 py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-14">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900">
            Meet Our Leadership
          </h2>

          <div className="w-20 h-1 bg-blue-700 mx-auto mt-5 rounded-full"></div>

          <p className="mt-6 text-lg text-slate-600 leading-8">
            ThinkMH is driven by experienced professionals bringing expertise in
            research, governance, technology, media, and public policy to
            deliver evidence-based insights for Maharashtra's socio-economic
            development.
          </p>
        </div>

        {/* ======================= CARD 1 ======================= */}

        <div className="bg-white rounded-3xl shadow-lg border border-gray-100 overflow-hidden mb-16 hover:shadow-2xl transition duration-500">
          <div className="grid lg:grid-cols-5">
            {/* Image */}

            <div className="lg:col-span-2 bg-slate-100 flex justify-center items-center p-10">
              <img
                src="/ManasiPhadke.png"
                alt="Dr. Manasi Phadake"
                className="w-72 h-80 object-cover rounded-2xl shadow-lg"
              />
            </div>

            {/* Content */}

            <div className="lg:col-span-3 p-12 flex flex-col justify-center">
              <span className="uppercase tracking-[0.25em] text-blue-700 text-sm font-semibold">
                Research Leadership
              </span>

              <h3 className="text-4xl font-bold text-slate-900 mt-3">
                Dr. Manasi Phadake
              </h3>

              <div className="w-20 h-1 bg-blue-700 rounded-full my-6"></div>

              <p className="text-slate-600 leading-9 text-lg">
                Dr. Manasi Phadake is a key member of ThinkMH's leadership team.
                Her work focuses on research, analysis, strategic planning,
                governance, and public policy initiatives. She contributes
                towards evidence-based decision making through high-quality
                research and socio-economic analysis.
              </p>

              <div className="flex flex-wrap gap-3 mt-8">
                <span className="px-4 py-2 rounded-full bg-blue-50 text-blue-700 text-sm font-medium">
                  Governance
                </span>

                <span className="px-4 py-2 rounded-full bg-blue-50 text-blue-700 text-sm font-medium">
                  Public Policy
                </span>

                <span className="px-4 py-2 rounded-full bg-blue-50 text-blue-700 text-sm font-medium">
                  Research
                </span>

                <span className="px-4 py-2 rounded-full bg-blue-50 text-blue-700 text-sm font-medium">
                  Strategy
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* ======================= CARD 2 ======================= */}

        <div className="bg-white rounded-3xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-2xl transition duration-500">
          <div className="grid lg:grid-cols-5">
            {/* Content */}

            <div className="lg:col-span-3 p-12 flex flex-col justify-center order-2 lg:order-1">
              <span className="uppercase tracking-[0.25em] text-blue-700 text-sm font-semibold">
                Founder & CEO
              </span>

              <h3 className="text-4xl font-bold text-slate-900 mt-3">
                Vinayak Pachalag
              </h3>

              <div className="w-20 h-1 bg-blue-700 rounded-full my-6"></div>

              <p className="font-semibold text-slate-700 mb-6 text-lg">
                M.Tech in AI | Electronics Engineer | Author | Media Strategist
              </p>

              <p className="text-slate-600 leading-9 text-lg">
                With over 150 lectures and two published books, Vinayak Pachalag
                has built a distinguished career spanning artificial
                intelligence, media, technology, innovation, and public
                engagement. He has led award-winning campaigns and actively
                contributes to policy discussions, institutional development,
                and technology adoption.
              </p>

              <div className="flex flex-wrap gap-3 mt-8">
                <span className="px-4 py-2 rounded-full bg-blue-50 text-blue-700 text-sm font-medium">
                  Artificial Intelligence
                </span>

                <span className="px-4 py-2 rounded-full bg-blue-50 text-blue-700 text-sm font-medium">
                  Media
                </span>

                <span className="px-4 py-2 rounded-full bg-blue-50 text-blue-700 text-sm font-medium">
                  Technology
                </span>

                <span className="px-4 py-2 rounded-full bg-blue-50 text-blue-700 text-sm font-medium">
                  Innovation
                </span>
              </div>
            </div>

            {/* Image */}

            <div className="lg:col-span-2 bg-slate-100 flex justify-center items-center p-10 order-1 lg:order-2">
              <img
                src="/vinayak.jpg"
                alt="Vinayak Pachalag"
                className="w-72 h-80 object-cover rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
