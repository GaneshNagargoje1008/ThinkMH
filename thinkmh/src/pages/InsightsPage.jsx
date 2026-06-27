import React, { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { FaCalendarAlt } from "react-icons/fa";

const insights = [
  {
    title: "Economy",
    description:
      "Explore data-driven reports on Maharashtra's economic growth, employment trends, industrial development, and fiscal performance.",
    date: "June 27, 2026",
    pdf: "/pdfs/economy.pdf",
    category: "economy",
    format: "article",
  },
  {
    title: "Governance",
    description:
      "Understand governance performance, transparency, public service delivery, and policy implementation through detailed research.",
    date: "June 27, 2026",
    pdf: "/pdfs/governance.pdf",
    category: "governance",
    format: "data-story",
  },
  {
    title: "Politics",
    description:
      "Track political developments, public opinion, election trends, leadership analysis, and voter sentiment across Maharashtra.",
    date: "June 26, 2026",
    pdf: "/pdfs/politics.pdf",
    category: "politics",
    format: "opinion",
  },
  {
    title: "Business",
    description:
      "Gain insights into consumer behavior, market trends, investment opportunities, and industry-specific intelligence.",
    date: "June 26, 2026",
    pdf: "/pdfs/business.pdf",
    category: "business",
    format: "infographic",
  },
];

const InsightsPage = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedFormat, setSelectedFormat] = useState("all");

  useEffect(() => {
    setSelectedCategory(searchParams.get("category") || "all");
    setSelectedFormat(searchParams.get("format") || "all");
  }, [searchParams]);

  const applyFilters = () => {
    const params = new URLSearchParams();

    if (selectedCategory !== "all")
      params.set("category", selectedCategory);

    if (selectedFormat !== "all")
      params.set("format", selectedFormat);

    navigate(`/insights?${params.toString()}`);
  };

  const filteredInsights = insights.filter((item) => {
    const categoryMatch =
      selectedCategory === "all" ||
      item.category === selectedCategory;

    const formatMatch =
      selectedFormat === "all" ||
      item.format === selectedFormat;

    return categoryMatch && formatMatch;
  });

  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <h1 className="text-5xl font-bold text-slate-900">
          Research Insights
        </h1>

        <p className="text-slate-600 mt-3">
          Browse research articles, reports, data stories and public policy
          insights.
        </p>

        {/* Filters */}

        <div className="mt-10 flex flex-wrap gap-4 items-center">

          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="border border-slate-300 rounded-lg px-4 py-3"
          >
            <option value="all">All Categories</option>
            <option value="economy">Economy</option>
            <option value="governance">Governance</option>
            <option value="politics">Politics</option>
            <option value="business">Business</option>
            <option value="society">Society</option>
            <option value="maharashtra-trends">
              Maharashtra Trends
            </option>
          </select>

          <select
            value={selectedFormat}
            onChange={(e) => setSelectedFormat(e.target.value)}
            className="border border-slate-300 rounded-lg px-4 py-3"
          >
            <option value="all">All Formats</option>
            <option value="article">Articles</option>
            <option value="infographic">Infographics</option>
            <option value="data-story">Data Stories</option>
            <option value="opinion">Opinion Pieces</option>
          </select>

          <button
            onClick={applyFilters}
            className="bg-blue-800 hover:bg-blue-900 text-white px-6 py-3 rounded-lg"
          >
            Apply Filters
          </button>

        </div>

        {/* Results */}

        <div className="mt-12">

          {filteredInsights.length === 0 ? (
            <div className="text-center py-20">
              <h3 className="text-2xl font-semibold text-slate-700">
                No Insights Found
              </h3>

              <p className="text-slate-500 mt-3">
                Try changing your filters.
              </p>
            </div>
          ) : (
            filteredInsights.map((item, index) => (
              <div
                key={index}
                className="py-8 border-b border-slate-200"
              >
                <h2 className="text-2xl font-semibold text-slate-900">
                  {item.title}
                </h2>

                <div className="flex items-center text-blue-700 mt-3">
                  <FaCalendarAlt className="mr-2" />
                  {item.date}
                </div>

                <p className="mt-4 text-slate-600 leading-8">
                  {item.description}
                </p>

                <button
                  onClick={() => window.open(item.pdf)}
                  className="mt-5 text-blue-700 font-semibold hover:underline"
                >
                  Read More →
                </button>
              </div>
            ))
          )}

        </div>

      </div>
    </section>
  );
};

export default InsightsPage;