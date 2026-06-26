import React from "react";
import { ArrowUpRight, ExternalLink, Globe, Layers, Users } from "lucide-react";

const Partners = () => {
  return (
    <div className="bg-slate-50 font-sans antialiased text-slate-900 selection:bg-blue-600 selection:text-white">
      {/* 1. VIBRANT HERO TITLE HEADER BANNER */}
      <section className="relative bg-gradient-to-b from-slate-900 via-blue-950 to-slate-900 text-white pt-20 pb-28 px-4 sm:px-6 lg:px-8 overflow-hidden text-center">
        {/* Subtle geometric structure background mask lines */}
        <div className="absolute inset-0 opacity-10 pointer-events-none mix-blend-overlay bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_80%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(6,182,212,0.1),transparent_50%)]"></div>

        <div className="relative z-10 max-w-4xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-white mt-4 mb-4">
            Our Ecosystem Partners
          </h2>
          <p className="text-base sm:text-lg text-slate-300 font-light leading-relaxed max-w-2xl mx-auto">
            ThinkMH collaborates with leading knowledge consortiums, localized
            field infrastructure networks, and flagship media institutions to
            deliver hyper-verified insights across Maharashtra.
          </p>
        </div>
      </section>

      {/* 2. CORE COLLABORATION GRID CARDS LAYER */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 pb-24 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* PARTNER CARD 1: THINK BANK */}
          <a
            href="https://www.youtube.com/@ThinkBankLive"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white border border-slate-100 rounded-3xl p-8 shadow-md hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group"
          >
            <div>
              {/* Dynamic Logo Wrapper Asset Box */}
              <div className="h-28 w-full bg-slate-50/80 rounded-2xl border border-slate-100 p-4 flex items-center justify-center mb-6 relative overflow-hidden group-hover:bg-blue-50/50 transition-colors">
                <img
                  src="/ThinkBank.svg"
                  alt="Think Bank"
                  className="h-16 w-auto object-contain relative z-10 group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="flex items-center justify-between">
                <h3 className="text-xl font-black text-blue-950 tracking-tight group-hover:text-blue-600 transition-colors">
                  Think Bank
                </h3>
                <span className="px-2.5 py-1 bg-blue-50 text-blue-700 text-[10px] font-bold uppercase tracking-wider rounded-md border border-blue-100 flex items-center gap-1">
                  <Globe className="w-3 h-3" /> Knowledge
                </span>
              </div>

              <p className="text-slate-500 text-xs font-light mt-3 leading-relaxed">
                Core analytical mapping collaborator pooling global
                macro-research systems with contextual data stories.
              </p>
            </div>

            <div className="mt-8 pt-4 border-t border-slate-50 flex items-center justify-between text-xs font-bold text-blue-600 group-hover:text-blue-700">
              <span>Redirect to Platform</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </div>
          </a>

          {/* PARTNER CARD 2: MAHARASHTRA FIRST */}
          <div className="bg-white border border-slate-100 rounded-3xl p-8 shadow-md flex flex-col justify-between">
            <div>
              {/* Logo Wrapper Asset Box */}
              <div className="h-28 w-full bg-slate-50/80 rounded-2xl border border-slate-100 p-4 flex items-center justify-center mb-6">
                <img
                  src="/images/maharashtrafirst.png"
                  alt="Maharashtra First"
                  className="h-16 w-auto object-contain"
                />
              </div>

              <div className="flex items-center justify-between">
                <h3 className="text-xl font-black text-blue-950 tracking-tight">
                  Maharashtra First
                </h3>
                <span className="px-2.5 py-1 bg-emerald-50 text-emerald-700 text-[10px] font-bold uppercase tracking-wider rounded-md border border-emerald-100 flex items-center gap-1">
                  <Layers className="w-3 h-3" /> On-Ground
                </span>
              </div>

              <p className="text-slate-500 text-xs font-light mt-3 leading-relaxed">
                Primary empirical field infrastructure driver leading complex
                multi-tier consumer opinion trackers.
              </p>
            </div>

            <div className="mt-8 pt-4 border-t border-slate-50 flex items-center justify-between text-xs font-medium text-slate-400">
              <span>Verified Deployment Partner</span>
            </div>
          </div>

          {/* PARTNER CARD 3: PUDHARI */}
          <a
            href="https://pudhari.news/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white border border-slate-100 rounded-3xl p-8 shadow-md hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group"
          >
            <div>
              {/* Dynamic Logo Wrapper Asset Box */}
              <div className="h-28 w-full bg-slate-50/80 rounded-2xl border border-slate-100 p-4 flex items-center justify-center mb-6 relative overflow-hidden group-hover:bg-blue-50/50 transition-colors">
                <img
                  src="/pudhari.jpg"
                  alt="Pudhari"
                  className="h-16 w-auto object-contain relative z-10 group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="flex items-center justify-between">
                <h3 className="text-xl font-black text-blue-950 tracking-tight group-hover:text-blue-600 transition-colors">
                  Pudhari
                </h3>
                <span className="px-2.5 py-1 bg-purple-50 text-purple-700 text-[10px] font-bold uppercase tracking-wider rounded-md border border-purple-100 flex items-center gap-1">
                  <Users className="w-3 h-3" /> Media
                </span>
              </div>

              <p className="text-slate-500 text-xs font-light mt-3 leading-relaxed">
                Flagship state dissemination vector providing reliable
                publication visibility for primary insights.
              </p>
            </div>

            <div className="mt-8 pt-4 border-t border-slate-50 flex items-center justify-between text-xs font-bold text-blue-600 group-hover:text-blue-700">
              <span>Read News Portal</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </div>
          </a>
        </div>
      </main>
    </div>
  );
};

export default Partners;
