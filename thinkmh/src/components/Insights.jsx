import React from "react";
import { FaCalendarAlt } from "react-icons/fa";

const insights = [
  {
    title: "Economy",
    description:
      "Explore data-driven reports on Maharashtra's economic growth, employment trends, industrial development, and fiscal performance.",
    date: "June 27, 2026",
    pdf: "/pdfs/economy.pdf",
  },
  {
    title: "Governance",
    description:
      "Understand governance performance, transparency, public service delivery, and policy implementation through detailed research.",
    date: "June 27, 2026",
    pdf: "/pdfs/governance.pdf",
  },
  {
    title: "Politics",
    description:
      "Track political developments, public opinion, election trends, leadership analysis, and voter sentiment across Maharashtra.",
    date: "June 26, 2026",
    pdf: "/pdfs/politics.pdf",
  },
  {
    title: "Business",
    description:
      "Gain insights into consumer behavior, market trends, investment opportunities, and industry-specific intelligence.",
    date: "June 26, 2026",
    pdf: "/pdfs/business.pdf",
  },
];

const Insights = () => {
  const openPdf = (pdf) => {
    window.open(pdf, "_blank");
  };

  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="mb-8">
          <h2 className="text-5xl font-bold text-gray-900">
            Research Insights
          </h2>
          <div className="mt-6 border-b border-gray-300"></div>
        </div>

        {/* Insights List */}
        <div>
          {insights.map((item, index) => (
            <div
              key={index}
              className="py-8 border-b border-gray-200 cursor-pointer hover:bg-gray-50 transition duration-300 px-2 rounded"
            >
              {/* Title */}
              <h3 className="text-2xl font-semibold text-gray-900">
                {item.title}
              </h3>

              {/* Date */}
              <div className="flex items-center text-blue-600 mt-3">
                <FaCalendarAlt className="mr-2" />
                <span>{item.date}</span>
              </div>

              {/* Description */}
              <p className="text-gray-600 mt-4 leading-7 max-w-5xl">
                {item.description}
              </p>

              {/* Read More */}
              <button
                onClick={() => openPdf(item.pdf)}
                className="mt-5 text-green-700 font-semibold hover:underline"
              >
                Read More →
              </button>
            </div>
          ))}
        </div>

        {/* Bottom Link */}
        <div className="mt-8">
          <a
            href="/insights"
            className="uppercase text-green-700 font-medium tracking-wide hover:underline"
          >
            See All Insights
          </a>
        </div>
      </div>
    </section>
  );
};

export default Insights;