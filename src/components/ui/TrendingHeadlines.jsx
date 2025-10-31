import React from "react";
import { Link } from "react-router";

const TrendingHeadlines = ({ data }) => {
  const formatDate = (dateString) => {
    return new Date(dateString).toISOString().split("T")[0];
  };

  //  Handle loading or empty state
  if (!data || data.length === 0) {
    return (
      <div className="bg-white p-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          Trending Headlines
        </h2>
        <p className="text-gray-500 text-sm">No trending news available.</p>
      </div>
    );
  }

  return (
    <div className="bg-white p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-gray-800">
          Trending Headlines
        </h2>
      </div>

      <div className="space-y-6">
        {data.map((item, index) => (
          <Link to={`/article/${encodeURIComponent(item.id)}`} key={index}>
            <div className="flex gap-4 border-b pb-4 border-gray-200 hover:bg-gray-100 ease-in-out duration-300 cursor-pointer group">
              <img
                src={item.fields?.thumbnail}
                alt={item.fields?.headline}
                className="w-32 h-32 object-cover"
              />
              <div className="flex flex-col justify-between">
                <div>
                  <h3 className="text-[15px] font-semibold  leading-snug group-hover:text-[#04594D] duration-300 ease-in-out">
                    {item.fields?.headline}
                  </h3>
                  <p className="text-sm text-[#04594D] mt-1">
                    {item.fields?.trailText}
                  </p>
                </div>
                <div className="flex justify-between text-xs text-gray-500 mt-2">
                  {formatDate(item.webPublicationDate)} • {item.fields?.byline}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default TrendingHeadlines;
