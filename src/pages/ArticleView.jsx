import React from "react";
import { FaBookmark, FaRegBookmark, FaShareAlt } from "react-icons/fa";
import TrendingHeadlines from "../components/ui/TrendingHeadlines";

const ArticleView = () => {
  return (
    <section className="my-[25px] container mx-auto flex gap-[25px] ">
      <div className=" w-full shadow-sm">
        {/* Article Image */}
        <img
          src="https://picsum.photos/900/550?random=1"
          alt="Article Cover"
          className="w-full  mb-5"
        />
        <div className="p-6">
          {/* Title */}
          <h1 className="text-2xl font-semibold text-gray-900 leading-snug mb-3">
            Furor Over Chinese Spy Balloon Leads to a Diplomatic Crisis
          </h1>

          {/* Author Info + Actions */}
          <div className="flex items-center justify-between text-sm text-gray-500 mb-5 ">
            <div className="flex items-center gap-2">
              <span className="font-medium text-gray-700">By Brian Naylor</span>
              <span>•</span>
              <span>Feb 5, 2023</span>
              <span>•</span>
              <span>3 min read</span>
            </div>
            <div className="flex items-center gap-3 text-gray-600">
              <FaRegBookmark className="cursor-pointer hover:text-black" />
              <FaShareAlt className="cursor-pointer hover:text-black" />
            </div>
          </div>

          {/* Article Body */}
          <div className="space-y-4 text-[15px] text-gray-700 leading-relaxed">
            <p>
              The Pentagon called the object, which has flown from Montana to
              Kansas, an “intelligence gathering” balloon. Beijing said it was
              used mainly for weather research and had strayed off course.
            </p>

            <p>
              <span className="font-semibold">WASHINGTON —</span> Secretary of
              State Antony J. Blinken on Friday canceled a weekend trip to
              Beijing after a Chinese spy balloon was sighted above the Rocky
              Mountain state of Montana, gaining a frenzy of media coverage and
              political criticism that threatened to derail the first visit by
              an American diplomat to China that President Biden had promoted to
              stabilize U.S.–China relations.
            </p>

            <p>
              Mr. Blinken called the Chinese surveillance an “irresponsible act”
              and a “clear violation of U.S. sovereignty and international law.”
            </p>

            <p>
              China’s decision to halt his invitation “does not remove planned
              visits,” he said, “but at a time certain conditions are met.”
            </p>

            <p>
              Mr. Blinken canceled the trip after civilians in Montana this week
              reported seeing a large white balloon drifting eastward in the
              sky.
            </p>
          </div>
        </div>
      </div>
      <div className="">
        <TrendingHeadlines />
      </div>
    </section>
  );
};

export default ArticleView;
