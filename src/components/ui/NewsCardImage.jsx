import React from "react";
import { Link } from "react-router";

const formatDate = (dateString) => {
  return new Date(dateString).toISOString().split("T")[0];
};
const NewsCardImage = ({ data }) => {
  if (!data || data.length === 0) return null;
  return (
    <>
      {data.map((item, index) => (
        <Link to={`/article/${encodeURIComponent(item.id)}`} key={index}>
          <div className="relative overflow-hidden group cursor-pointer h-[300px] md:h-[350px] drop-shadow-2xl hover:scale-101 ease-in-out duration-300">
            <img
              src={item?.fields.thumbnail}
              alt="Main"
              className="w-full h-full object-cover scale-110 group-hover:scale-100 ease-in-out duration-500"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black via-black/30 to-transparent" />
            <div className="absolute bottom-0 left-0 p-6 text-white">
              <h1 className="text-5 md:text-[25px] font-bold max-w-xl leading-tight">
                {item?.fields.headline}
              </h1>
              <p className="text-sm mt-2 opacity-90">
                {formatDate(item.webPublicationDate)} • {item.fields.byline}
              </p>
            </div>
          </div>
        </Link>
      ))}
    </>
  );
};

export default NewsCardImage;
