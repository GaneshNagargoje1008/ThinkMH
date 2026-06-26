import React from "react";

const insights = [
  {
    title: "Economy",
    description:
      "Explore data-driven reports on Maharashtra's economic growth, employment trends, industrial development, and fiscal performance.",
    color: "bg-blue-50",
    border: "border-blue-600",
    button: "text-blue-700",
    pdf: "/pdfs/economy.pdf",
  },
  {
    title: "Governance",
    description:
      "Understand governance performance, transparency, public service delivery, and policy implementation through detailed research.",
    color: "bg-green-50",
    border: "border-green-600",
    button: "text-green-700",
    pdf: "/pdfs/governance.pdf",
  },
  {
    title: "Politics",
    description:
      "Track political developments, public opinion, election trends, leadership analysis, and voter sentiment across Maharashtra.",
    color: "bg-amber-50",
    border: "border-amber-600",
    button: "text-amber-700",
    pdf: "/pdfs/politics.pdf",
  },
  {
    title: "Business",
    description:
      "Gain insights into consumer behavior, market trends, investment opportunities, and industry-specific intelligence.",
    color: "bg-purple-50",
    border: "border-purple-600",
    button: "text-purple-700",
    pdf: "/pdfs/business.pdf",
  },
];

const Insights = () => {
  const openPdf = (pdfPath) => {
    window.open(pdfPath, "_blank");
  };

  return (
    <section className="py-10 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-gray-900">
            Latest Insights
          </h2>

          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Explore our latest research reports, market intelligence,
            governance studies, and data-driven insights shaping Maharashtra's
            future.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {insights.map((item, index) => (
            <div
              key={index}
              className={`${item.color} border-t-4 ${item.border} rounded-xl p-7 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 flex flex-col`}
            >
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                {item.title}
              </h3>

              <p className="text-gray-600 leading-7 flex-grow">
                {item.description}
              </p>

              <button
                onClick={() => openPdf(item.pdf)}
                className={`mt-8 font-semibold ${item.button} hover:underline`}
              >
                Read More →
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Insights;