
import Hero from "../components/Hero";
import News from "../components/News";
import {
  useLatestNews,
  useNewsSection,
  useTrendingNews,
} from "../hooks/useNews";
import { useParams } from "react-router";

const HomePage = () => {
  const { sectionId } = useParams();
  
  const { data: homeNews, isLoading: loadingHome } = useNewsSection(sectionId);
  const { data, fetchNextPage,  isFetchingNextPage } =
    useLatestNews(sectionId, 10);
  const { data: trendingNews } = useTrendingNews();

  const latestNews = data?.pages.flat() || [];
  if (loadingHome) return <p>Loading News</p>;
  return (
    <>
      <Hero news={homeNews} />
      <News
        latestNews={latestNews}
        trendingNews={trendingNews}
       
        setPageSize={() => fetchNextPage()}
        isFetchingNextPage={isFetchingNextPage}
      />
    </>
  );
};

export default HomePage;
