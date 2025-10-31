import TrendingHeadlines from "./ui/TrendingHeadlines";
import NewsCardImage from "./ui/NewsCardImage";
import NewsCardtext from "./ui/NewsCardtext";

const News = ({ latestNews, trendingNews, pageSize, setPageSize }) => {
  const evenNews = latestNews.filter((_, i) => i % 2 === 0);
  const oddNews = latestNews.filter((_, i) => i % 2 !== 0);

  if (latestNews.length === 0) {
    return <p>Loading...</p>;
  }

  return (
    <section className="bg-[#f9f8f5]">
      <div className="container mx-auto pb-[25px]">
        <div className="flex flex-col md:flex-row gap-[25px] px-4 lg:px-0">
          {/* Left section (Latest News) */}
          <div>
            <div className="flex items-center p-[30px] gap-[25px]">
              <h2 className="text-[35px] font-semibold text-gray-800 whitespace-nowrap">
                Latest News
              </h2>
              <div className="flex-1 h-px bg-gray-800 ml-3"></div>
            </div>

            <div className="flex flex-col gap-[25px]">
              {evenNews.map((evenItem, index) => {
                const oddItem = oddNews[index];
                const isReversed = index % 2 !== 0;

                return (
                  <div
                    key={evenItem.id || index}
                    className={`grid grid-cols-1 lg:grid-cols-2 gap-[25px] ${
                      isReversed ? "lg:flex-row-reverse" : ""
                    }`}
                  >
                    {!isReversed ? (
                      <>
                        <NewsCardImage data={[evenItem]} />
                        {oddItem && <NewsCardtext data={[oddItem]} />}
                      </>
                    ) : (
                      <>
                        {oddItem && <NewsCardtext data={[oddItem]} />}
                        <NewsCardImage data={[evenItem]} />
                      </>
                    )}
                  </div>
                );
              })}
            </div>

            <div className="flex justify-center mt-10">
              <button
                onClick={() => setPageSize((prev) => prev + 10)}
                className="bg-black text-white text-sm px-7 py-3 rounded-md hover:bg-gray-700 transition cursor-pointer"
              >
                View More
              </button>
            </div>
          </div>

          {/* Right section (Trending) */}
          <div className="w-full md:w-[60%] lg:w-[30%] mt-5">
            <TrendingHeadlines data={trendingNews} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default News;
