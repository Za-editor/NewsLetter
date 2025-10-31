import React from "react";

const TrendingHeadlines = ({data}) => {
  
const formatDate = (dateString) => {
  return new Date(dateString).toISOString().split("T")[0];
};

  return (
    <div className="bg-white p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-gray-800">
          Trending Headlines
        </h2>
        <button className="bg-black text-white text-sm px-4 py-2 rounded-md hover:bg-gray-700 ease-in-out duration-500 transition cursor-pointer">
          View All
        </button>
      </div>

      <div className="space-y-6 ">
        {data.map((item) => (
          <div
            key={item.id}
            className="flex gap-4 border-b pb-4 border-gray-200 hover:bg-gray-100 ease-in-out duration-300 cursor-pointer"
          >
            <img
              src={item.fields.thumbnail}
              alt={item.title}
              className="w-32 h-32 object-cover"
            />
            <div className="flex flex-col justify-between">
              <div>
                <h3 className="text-[15px] font-semibold text-gray-900 leading-snug">
                  {item.fields.headline}
                </h3>
                <p className="text-sm text-gray-600 mt-1">
                  {item.fields.trailText}
                </p>
              </div>
              <div className="flex justify-between text-xs text-gray-500 mt-2">
                {formatDate(item.webPublicationDate)} • {item.fields.byline}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrendingHeadlines;
