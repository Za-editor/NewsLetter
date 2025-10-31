const API_KEY = import.meta.env.VITE_API_KEY;

export const getAllNewsSection = async (sectionId) => {
  const res = await fetch(
    `https://content.guardianapis.com/${sectionId? sectionId: "search"}?api-key=test
&show-fields=headline,trailText,body,thumbnail,byline,body&page-size=4`
  );
  if (!res.ok) throw new Error("Network response was not ok");
  const data = await res.json();

  return data.response.results;
};

export const getLatestNews = async (sectionId,pageSize, page=0) => {
  const res = await fetch(
    `https://content.guardianapis.com/${
      sectionId ? sectionId : "search"
    }?api-key=test&order-by=newest&show-fields=headline,trailText,body,thumbnail,byline,body&page-size=${pageSize}&page=${
      page + 1
    }`
  );
  if (!res.ok) throw new Error("Network response was not ok");
  const data = await res.json();

  return data.response.results;
};

export const getTrendingNews = async () => {
  const res = await fetch(
    `https://content.guardianapis.com/search?api-key=test&section=news&order-by=newest&show-fields=headline,trailText,body,thumbnail,byline,body&page-size=10`
  );
  if (!res.ok) throw new Error("Network response was not ok");
  const data = await res.json();
  return data.response.results;
};

export const fetchArticleDetails = async (decodedId) => {
const res = await fetch(
  `https://content.guardianapis.com/${decodedId}?api-key=test&show-fields=show-fields=headline,trailText,body,thumbnail,byline,body`
);
    if (!res.ok) throw new Error("Network response was not ok");
    const data = await res.json();
    console.log(data);
    return data.response.content;
}