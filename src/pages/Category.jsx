import React, { useState } from "react";
import Hero from "../components/Hero";
import News from "../components/News";
import { useLatestNews, useNewsSection, useTrendingNews } from "../hooks/useNews";
import { useParams } from "react-router";

const Category = () => {
const {sectionId} = useParams()
  const [pageSize, setPageSize] = useState(10);
  const { data: homeNews, isLoading: loadingHome } = useNewsSection(sectionId);
  const { data: latestNews, isLoading } = useLatestNews(sectionId, pageSize);
  const { data: trendingNews } = useTrendingNews();
  if (loadingHome || isLoading) return <p>Loading News</p>;
  return (
    <>
      <Hero news={homeNews} />
      <News
        latestNews={latestNews}
        trendingNews={trendingNews}
        pageSize={pageSize}
        setPageSize={setPageSize}
      />
    </>
  );
};

export default Category;
