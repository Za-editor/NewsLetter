import React from "react";
import { FaBookmark, FaRegBookmark, FaShareAlt } from "react-icons/fa";
import TrendingHeadlines from "../components/ui/TrendingHeadlines";
import { useArticle, useTrendingNews } from "../hooks/useNews";
import { useParams } from "react-router";

const ArticleView = () => {
  const { id } = useParams();
  const decodedId = decodeURIComponent(id);
  const { data: article, isLoading, error } = useArticle(decodedId);
  const { data: trendingNews } = useTrendingNews();

  const formatDate = (dateString) => {
    return new Date(dateString).toISOString().split("T")[0];
  };

  if (isLoading) return <p className="p-8 text-center">Loading article...</p>;
  if (error) return <p className="p-8 text-center">Failed to load article.</p>;

  console.log(article);

  return (
    <section className="my-[25px] container mx-auto flex flex-col lg:flex-row gap-[25px] px-4">
      {/* Main Article */}
      <div className="w-full lg:w-[70%] shadow-sm">
        {/* Article Image */}
        <img
          src={article.fields.thumbnail}
          alt="Article Cover"
          className="w-full mb-5"
        />
        <div className="p-6">
          {/* Title */}
          <h1 className="text-2xl md:text-3xl font-bold leading-tight mb-3">
            {article.fields.headline}
          </h1>

          {/* Author Info + Actions */}
          <div className="flex items-center justify-between text-sm text-gray-500 mb-5">
            <div className="flex items-center gap-2">
              <p className="text-sm mt-2 opacity-90">
                {formatDate(article.webPublicationDate)} •{" "}
                {article.fields.byline}
              </p>
            </div>
            <div className="flex items-center gap-3 text-gray-600">
              <FaRegBookmark className="cursor-pointer hover:text-black" />
              <FaShareAlt className="cursor-pointer hover:text-black" />
            </div>
          </div>

          {/* Article Body */}
          <div className="">
            <p className="text-[20px] text-[#04594D] mb-5 italic cursor-pointer">
              {article.fields.trailText}
            </p>
            <div
              className="prose max-w-none text-[13px] md:text-[17px] text-gray-700 leading-relaxed prose-p:mb-4 prose-a:text-blue-600 hover:prose-a:underline"
              dangerouslySetInnerHTML={{ __html: article.fields.body }}
            />
          </div>
        </div>
      </div>

      {/* Sidebar (Trending Headlines) */}
      <div className="w-full lg:w-[30%]">
        <TrendingHeadlines data={trendingNews} />
      </div>
    </section>
  );
};

export default ArticleView;
