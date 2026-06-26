import React from "react";

const reports = [
  {
    title: "Economics Pulse Tracker",
    desc: "Understanding economic sentiment across Maharashtra.",
    image: "/report-covers/economics.jpg",
    pdf: "/reports/economics-pulse-tracker.pdf",
  },
  {
    title: "Governance Pulse Tracker",
    desc: "Citizen perception of governance and services.",
    image: "/report-covers/governance.jpg",
    pdf: "/reports/governance-pulse-tracker.pdf",
  },
  {
    title: "Political Pulse Tracker",
    desc: "Political sentiment and voter behavior insights.",
    image: "/report-covers/politics.jpg",
    pdf: "/reports/political-pulse-tracker.pdf",
  },
  {
    title: "Consolidated Tracker",
    desc: "A complete 360-degree Maharashtra analysis.",
    image: "/report-covers/consolidated.jpg",
    pdf: "/reports/consolidated-tracker.pdf",
  },
];

const Reports = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">Latest Reports</h2>

        <div className="grid md:grid-cols-4 gap-8">
          {reports.map((report, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-xl overflow-hidden hover:-translate-y-2 hover:shadow-2xl transition-all duration-300"
            >
              <img
                src={report.image}
                alt={report.title}
                className="w-full h-72 object-cover"
              />

              <div className="p-5">
                <h3 className="font-bold text-lg mb-3">{report.title}</h3>

                <p className="text-gray-600 mb-4">{report.desc}</p>

                <button
                  onClick={() => window.open(report.pdf, "_blank")}
                  className="bg-blue-800 text-white px-4 py-2 rounded hover:bg-blue-900 transition"
                >
                  Buy Report
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reports;
