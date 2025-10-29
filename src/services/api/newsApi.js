const API_KEY = import.meta.env.VITE_API_KEY;

export const getAllNewsSection = async () => {
  const res = await fetch(
    `https://content.guardianapis.com/search?api-key=test
&show-fields=headline,trailText,body,thumbnail,byline`
  );
  if (!res.ok) throw new Error("Network response was not ok");
  const data = await res.json();
  console.log(data.response.results);
  return data.response.results;
};
