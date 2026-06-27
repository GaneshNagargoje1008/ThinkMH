import React from "react";

const partners = [
  {
    name: "Think Bank",
    role: "Knowledge Partner",
    logo: "/Think Bank.png",
    link: "https://www.youtube.com/@ThinkBankLive",
  },
  {
    name: "Maharashtra First",
    role: "On-Ground Partner",
    logo: "/Maharashtra First Logo Virendra Patil Final 18 May.png",
    link: null,
  },
  {
    name: "Pudhari",
    role: "Media Partner",
    logo: "/Pudhari.png",
    link: "https://pudhari.news/",
  },
];

const Partners = () => {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">

          <h2 className="text-4xl md:text-5xl font-bold text-slate-900">
            Our Partners
          </h2>

          <div className="w-20 h-1 bg-blue-700 mx-auto mt-5 rounded-full"></div>

          <p className="mt-6 text-lg text-slate-600 leading-8">
            ThinkMH collaborates with trusted organizations that strengthen our
            research capabilities, field operations, and public outreach across
            Maharashtra.
          </p>

        </div>

        {/* Partners */}
        <div className="grid md:grid-cols-3 border-t border-b border-slate-200">

          {partners.map((partner, index) => {
            const content = (
              <div
                className={`flex flex-col items-center text-center px-10 py-14 transition duration-300 hover:bg-slate-50 ${
                  index !== partners.length - 1
                    ? "md:border-r border-slate-200"
                    : ""
                }`}
              >
                {/* Logo */}
                <div className="h-24 flex items-center justify-center mb-8">
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="max-h-20 w-auto object-contain transition duration-300 hover:scale-105"
                  />
                </div>

                {/* Name */}
                <h3 className="text-2xl font-semibold text-slate-900">
                  {partner.name}
                </h3>

                {/* Role */}
                <p className="mt-2 text-sm uppercase tracking-[0.18em] text-slate-500">
                  {partner.role}
                </p>

                {/* Link */}
                {partner.link && (
                  <span className="mt-8 text-blue-700 font-medium text-sm hover:underline">
                    Visit Website →
                  </span>
                )}
              </div>
            );

            return partner.link ? (
              <a
                key={partner.name}
                href={partner.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                {content}
              </a>
            ) : (
              <div key={partner.name}>{content}</div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Partners;