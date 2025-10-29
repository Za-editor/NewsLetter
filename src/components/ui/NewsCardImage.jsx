import React from "react";

const NewsCardImage = () => {
  return (
    <div className="relative overflow-hidden group cursor-pointer h-[300px] md:h-[350px] drop-shadow-2xl hover:scale-101 ease-in-out duration-300">
      <img
        src="https://picsum.photos/900/550?random=1"
        alt="Main"
        className="w-full h-full object-cover scale-110 group-hover:scale-100 ease-in-out duration-500"
      />
      <div className="absolute inset-0 bg-linear-to-t from-black via-black/30 to-transparent" />
      <div className="absolute bottom-0 left-0 p-6 text-white">
        <h1 className="text-5 md:text-[25px] font-bold max-w-xl leading-tight">
          Democrats Overhaul Party’s Primary Calendar, Upending a Political
          Tradition
        </h1>
        <p className="text-sm mt-2 opacity-90">By Ginny Dennis • Just now</p>
      </div>
    </div>
  );
};

export default NewsCardImage;
