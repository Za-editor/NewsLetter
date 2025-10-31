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

const getSecondTrail = (bodyHtml, maxLength = 400) => {
  const plainText = stripHtml(bodyHtml).trim();

  if (plainText.length <= maxLength) return plainText;

  // Cut at the last space before maxLength to avoid cutting a word
  const snippet = plainText.slice(0, maxLength);
  const lastSpace = snippet.lastIndexOf(" ");
  return snippet.slice(0, lastSpace) + "...";
};
const NewsCardtext = ({ data }) => {
  if (!data || data.length === 0) return null;
  return (
    <>
      {data.map((item, index) => (
        <Link to={`/article/${encodeURIComponent(item.id)}`} key={index}>
          <div className="max-w-xl bg-white p-4 font-serif space-y-3 drop-shadow-xl cursor-pointer hover:scale-101 ease-in-out duration-300 group">
            <h1 className="text-[22px] font-bold leading-snug group-hover:text-[#04594D] duration-300 ease-in-out">
              {item?.fields.headline}
            </h1>

            <p className="text-[13px] text-gray-600 flex gap-2">
              {formatDate(item.webPublicationDate)} • {item.fields.byline}
            </p>

            <p className="text-[15px] leading-[1.55] text-[#04594D]">
              {item?.fields.trailText}
            </p>

            <p className="text-[15px] leading-[1.55]  text-gray-600">
              {getSecondTrail(item.fields.body)}
            </p>
          </div>
        </Link>
      ))}
    </>
  );
}

export default NewsCardtext