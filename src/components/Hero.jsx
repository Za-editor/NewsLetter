import { Link } from "react-router";

const Hero = ({news}) => {


  const mainNews = news?.[0];
  const tagNews = news?.[1];
  const thirdNews = news?.[2];
  const fourthNews = news?.[3];

 
  

  const formatDate = (dateString) => {
    return new Date(dateString).toISOString().split("T")[0];
  };


  return (
    <section className="container mx-auto px-4 md:px-0 grid grid-cols-1 lg:grid-cols-2 gap-8">
      <div className="p-6 space-y-6">
        {mainNews && (
          <Link to={`/article/${encodeURIComponent(mainNews.id)}`}>
            <div className="relative overflow-hidden group cursor-pointer h-[300px] md:h-[450px]">
              <img
                src={mainNews?.fields.thumbnail}
                alt={mainNews?.fields.headline}
                className="w-full h-full object-cover scale-110 group-hover:scale-100 ease-in-out duration-500"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black via-black/30 to-transparent" />
              <div className="absolute bottom-0 left-0 p-6 text-white">
                <h1 className="text-2xl md:text-3xl font-bold max-w-xl leading-tight group-hover:text-[#04594D] duration-300 ease-in-out">
                  {mainNews?.fields.headline}
                </h1>
                <p className="text-sm mt-2 opacity-90">
                  {formatDate(mainNews.webPublicationDate)} •
                  {mainNews.fields.byline}
                </p>
              </div>
            </div>
          </Link>
        )}

        <div className="py-6">
          {tagNews && (
            <Link to={`/article/${encodeURIComponent(tagNews.id)}`}>
              <div className="flex flex-col md:flex-row gap-4 hover:bg-gray-50 cursor-pointer ease-in-out duration-500 group p-2 rounded-md">
                <div className="flex-1">
                  <h2 className="text-xl md:text-[25px] font-bold mb-1 group-hover:text-[#04594D] duration-300 ease-in-out">
                    {tagNews?.fields.headline}
                  </h2>
                  <p className="text-sm md:text-[12px] text-[#04594D] max-w-2xl">
                    {tagNews?.fields.trailText}
                  </p>
                </div>

                <div className="w-full md:w-[120px] h-50 md:h-24 overflow-hidden">
                  <img
                    src={tagNews?.fields.thumbnail}
                    alt={tagNews?.fields.headline}
                    className="w-full h-full object-cover scale-110 group-hover:scale-100 ease-in-out duration-500"
                  />
                </div>
              </div>
            </Link>
          )}
        </div>
      </div>

      <div className="space-y-6">
        {thirdNews && (
          <Link to={`/article/${encodeURIComponent(thirdNews.id)}`}>
            <div className="flex flex-col md:flex-row gap-4 p-6 bg-[#1A1A1A]">
              <div className="md:w-[30%] text-white leading-relaxed text-base md:text-lg">
                {thirdNews?.fields.trailText}
              </div>

              <div className="md:w-[70%] relative overflow-hidden group cursor-pointer h-[250px] md:h-[350px]">
                <img
                  src={thirdNews?.fields.thumbnail}
                  alt={thirdNews?.fields.headline}
                  className="w-full h-full object-cover scale-110 group-hover:scale-100 ease-in-out duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
                <div className="absolute bottom-0 left-0 p-6 text-white">
                  <h1 className="text-2xl md:text-3xl font-bold max-w-xl leading-tight group-hover:text-[#04594D] duration-300 ease-in-out">
                    {thirdNews?.fields.headline}
                  </h1>
                  <p className="text-sm mt-2 opacity-90">
                    {formatDate(thirdNews.webPublicationDate)} •
                    {thirdNews.fields.byline}
                  </p>
                </div>
              </div>
            </div>
          </Link>
        )}

        {fourthNews && (
          <Link to={`/article/${encodeURIComponent(fourthNews.id)}`}>
            <div className="flex flex-col md:flex-row py-6 group cursor-pointer hover:bg-gray-50 p-2 rounded-md">
              <div className="relative overflow-hidden w-full md:w-[60%] h-[250px] md:h-[250px]">
                <img
                  src={fourthNews?.fields.thumbnail}
                  alt={fourthNews?.fields.headline}
                  className="w-full h-full object-cover scale-110 group-hover:scale-100 ease-in-out duration-500"
                />
              </div>

              <div className="space-y-3 md:space-y-4 md:pl-[50px] pt-4 md:pt-0">
                <h1 className="text-xl md:text-[25px] font-bold leading-snug text-gray-900 group-hover:text-[#04594D] duration-300 ease-in-out">
                  {fourthNews?.fields.headline}
                </h1>

                <p className="text-sm text-gray-600 flex space-x-3">
                  {formatDate(fourthNews.webPublicationDate)} •
                  {fourthNews.fields.byline}
                </p>

                <p className="text-sm md:text-[16px] leading-relaxed text-[#04594D]">
                  {fourthNews?.fields.trailText}
                </p>
              </div>
            </div>
          </Link>
        )}
      </div>
    </section>
  );
};

export default Hero;
