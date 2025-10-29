const Hero = () => {
  return (
    <section className="container mx-auto px-4 md:px-0 grid grid-cols-1 lg:grid-cols-2 gap-8">
      <div className="p-6 space-y-6">
        <div className="relative overflow-hidden group cursor-pointer h-[300px] md:h-[450px]">
          <img
            src="https://picsum.photos/900/550?random=1"
            alt="Main"
            className="w-full h-full object-cover scale-110 group-hover:scale-100 ease-in-out duration-500"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black via-black/30 to-transparent" />
          <div className="absolute bottom-0 left-0 p-6 text-white">
            <h1 className="text-2xl md:text-3xl font-bold max-w-xl leading-tight">
              Democrats Overhaul Party’s Primary Calendar, Upending a Political
              Tradition
            </h1>
            <p className="text-sm mt-2 opacity-90">
              By Ginny Dennis • Just now
            </p>
          </div>
        </div>

        <div className="py-6">
          <div className="flex flex-col md:flex-row gap-4 hover:bg-gray-50 cursor-pointer ease-in-out duration-500 group p-2 rounded-md">
            <div className="flex-1">
              <h2 className="text-xl md:text-[25px] font-bold mb-1">
                Philomena Cunk Is Weird Enough to Take on the World
              </h2>
              <p className="text-sm md:text-[12px] text-[#04594D] max-w-2xl">
                The new Netflix show "Cunk on Earth" looks like an ambitious BBC
                documentary. Until its fictional host, created by Charlie
                Brooker, starts to ask some deeply silly questions.
              </p>
            </div>

            <div className="w-full md:w-[120px] h-50 md:h-24 overflow-hidden">
              <img
                src="https://picsum.photos/seed/picsum/200/300"
                alt="news thumbnail"
                className="w-full h-full object-cover scale-110 group-hover:scale-100 ease-in-out duration-500"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-6">
        <div className="flex flex-col md:flex-row gap-4 p-6 bg-[#1A1A1A]">
          <div className="md:w-[30%] text-white leading-relaxed text-base md:text-lg">
            Secretary of State Antony J. Blinken on Friday canceled a weekend
            trip to Beijing after a Chinese spy balloon was sighted above the
            Rocky Mountain state of Montana, igniting a frenzy of media
            coverage.
          </div>

          <div className="md:w-[70%] relative overflow-hidden group cursor-pointer h-[250px] md:h-[350px]">
            <img
              src="https://picsum.photos/900/550?random=2"
              alt="Main"
              className="w-full h-full object-cover scale-110 group-hover:scale-100 ease-in-out duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
            <div className="absolute bottom-0 left-0 p-6 text-white">
              <h1 className="text-2xl md:text-3xl font-bold max-w-xl leading-tight">
                Democrats Overhaul Party’s Primary Calendar, Upending a
                Political Tradition
              </h1>
              <p className="text-sm mt-2 opacity-90">
                By Ginny Dennis • Just now
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row py-6 group cursor-pointer hover:bg-gray-50 p-2 rounded-md">
          <div className="relative overflow-hidden w-full md:w-[60%] h-[250px] md:h-[250px]">
            <img
              src="https://picsum.photos/600/600?random=7"
              alt="Balloon"
              className="w-full h-full object-cover scale-110 group-hover:scale-100 ease-in-out duration-500"
            />
            <h2 className="absolute inset-0 flex items-center justify-center text-white text-2xl md:text-3xl font-bold text-center px-4 leading-tight drop-shadow-lg">
              Balloon’s Journey
            </h2>
          </div>

          <div className="space-y-3 md:space-y-4 md:pl-[50px] pt-4 md:pt-0">
            <h1 className="text-xl md:text-[25px] font-bold leading-snug text-gray-900">
              More Airports to Use Greener ‘Glide’ Approach to Landing
            </h1>

            <p className="text-sm text-gray-600 flex space-x-3">
              <span>By Ginny Dennis</span>
              <span>•</span>
              <span>Feb. 4, 2023</span>
            </p>

            <p className="text-sm md:text-[16px] leading-relaxed text-[#04594D]">
              The Stopping Home Office Work’s Unproductive Problems (SHOW UP,
              get it?) Act of 2023 passed the Republican-majority US House of
              Representatives...
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
