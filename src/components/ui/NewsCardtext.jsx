import React from 'react'
import { Link } from 'react-router';

const formatDate = (dateString) => {
  return new Date(dateString).toISOString().split("T")[0];
};

const stripHtml = (html) => {
  const temp = document.createElement("div");
  temp.innerHTML = html;
  return temp.textContent || temp.innerText || "";
};

const getSecondTrail = (bodyHtml) => {
  const plainText = stripHtml(bodyHtml);
  return plainText.split(". ").slice(0, 2).join(". ") + ".";
};
const NewsCardtext = ({ data }) => {
  if (!data || data.length === 0) return null;
  return (
    <>
      {data.map((item, index) => (
        <Link to={`/article/${encodeURIComponent(item.id)}`} key={index}>
          <div
          
            className="max-w-xl bg-white p-4 font-serif space-y-3 drop-shadow-xl cursor-pointer hover:scale-101 ease-in-out duration-300"
          >
            <h1 className="text-[22px] font-bold leading-snug">
              {item?.fields.headline}
            </h1>

            <p className="text-[13px] text-gray-600 flex gap-2">
              {formatDate(item.webPublicationDate)} • {item.fields.byline}
            </p>

            <p className="text-[15px] leading-[1.55] text-[#04594D]">
              {item?.fields.trailText}
            </p>

            <p className="text-[15px] leading-[1.55] text-[#04594D]">
              {getSecondTrail(item.fields.body)}
            </p>
          </div>
        </Link>
      ))}
    </>
  );
}

export default NewsCardtext