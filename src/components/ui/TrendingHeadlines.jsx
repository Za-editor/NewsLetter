import React from "react";

const TrendingHeadlines = () => {
  const headlines = [
    {
      id: 1,
      image: "https://picsum.photos/900/550?random=5", // replace with real image
      title: "U.S. downs suspected Chinese spy balloon over the Atlantic coast",
      description:
        "China called the vessel’s downing “an excessive reaction” and said it “retains the right to respond further.”",
      author: "Caleb Hudahl",
      date: "Feb. 5, 2023",
    },
    {
      id: 2,
      image: "https://picsum.photos/900/550?random=3", // replace with real image
      title:
        "Mystery Portrait May Be a Raphael, Artificial Intelligence Suggests",
      description:
        "A mysterious portrait of the Virgin Mary and Jesus may have been painted by the master Raphael, facial recognition finds.",
      author: "Ailyn Cyrnelle",
      date: "Feb. 5, 2023",
    },
  ];

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
        {headlines.map((item) => (
          <div
            key={item.id}
            className="flex gap-4 border-b pb-4 border-gray-200 hover:bg-gray-100 ease-in-out duration-300 cursor-pointer"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-32 h-32 object-cover"
            />
            <div className="flex flex-col justify-between">
              <div>
                <h3 className="text-[15px] font-semibold text-gray-900 leading-snug">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 mt-1">{item.description}</p>
              </div>
              <div className="flex justify-between text-xs text-gray-500 mt-2">
                <span>By {item.author}</span>
                <span>{item.date}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrendingHeadlines;
