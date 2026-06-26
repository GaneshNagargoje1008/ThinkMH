import { useSearchParams } from "react-router-dom";

const InsightsPage = () => {
  const [searchParams] = useSearchParams();

  const category = searchParams.get("category");
  const format = searchParams.get("format");

  return (
    <div className="max-w-7xl mx-auto py-20 px-6">
      <h1 className="text-5xl font-bold mb-4">
        Insights
      </h1>

      <p className="text-gray-600 mb-10">
        {category
          ? `Category: ${category}`
          : format
          ? `Format: ${format}`
          : "All Insights"}
      </p>

      {/* Static cards for now */}
    </div>
  );
};

export default InsightsPage;