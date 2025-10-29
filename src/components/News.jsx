import React from "react";
import TrendingHeadlines from "./ui/TrendingHeadlines";
import NewsCardImage from "./ui/NewsCardImage";
import NewsCardtext from "./ui/NewsCardtext";

const News = () => {
  return (
    <section className="bg-[#f9f8f5]">
      <section className="container mx-auto">
        <div className="flex w-full flex-col  md:flex-row gap-[25px] px-4 lg:px-0">
          <div className="">
            <div className="flex items-center p-[30px] gap-[25px]">
              <h2 className="text-[35px] font-semibold text-gray-800 whitespace-nowrap">
                Latest News
              </h2>
              <div className="flex-1 h-px bg-gray-800 ml-3"></div>
            </div>
            <div className=" grid grid-cols-1 lg:grid-cols-2 gap-[25px]">
              <NewsCardImage />
              <NewsCardtext />
            </div>
          </div>
          <div className="w-full md:w-[60%] lg:w-[30%] mt-5">
            <TrendingHeadlines />
          </div>
        </div>
      </section>
    </section>
  );
};

export default News;
