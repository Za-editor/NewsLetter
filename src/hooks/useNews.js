import { useQuery } from "@tanstack/react-query";
import {
  fetchArticleDetails,
  getAllNewsSection,
  getLatestNews,
  getTrendingNews,
} from "../services/api/newsApi";

export const useNewsSection = (sectionId) => {
  return useQuery({
    queryKey: ["sections", sectionId],
    queryFn: () => getAllNewsSection(sectionId),
    staleTime: 1000 * 60 * 30,
  });
};

export const useLatestNews = (sectionId, pageSize) => {
  return useQuery({
    queryKey: ["latest",sectionId, pageSize,],
    queryFn: () => getLatestNews(sectionId,pageSize),
    staleTime: 1000 * 60 * 30,
    keepPreviousData: true,
  });
};

export const useTrendingNews = () => {
  return useQuery({
    queryKey: ["trending"],
    queryFn: getTrendingNews,
    staleTime: 1000 * 60 * 30,
  });
};

export const useArticle = (decodedId) => {
  return useQuery({
    queryKey: ["article", decodedId],
    queryFn: () => fetchArticleDetails(decodedId),
    staleTime: 1000 * 60 * 30,
  });
}
