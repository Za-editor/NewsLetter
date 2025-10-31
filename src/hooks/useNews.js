import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
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
    staleTime: 1000 * 60 * 10,
    enabled: true,
  });
};

export const useLatestNews = (sectionId, pageSize) => {
  return useInfiniteQuery({
    queryKey: ["latest", sectionId],
    queryFn: ({ pageParam = 0 }) =>
      getLatestNews(sectionId, pageSize, pageParam),
    getNextPageParam: (lastPage, allPages) => {
      
      if (lastPage.length === pageSize) return allPages.length;
      return undefined;
    },
    staleTime: 1000 * 60 * 10,
  });
};

export const useTrendingNews = () => {
  return useQuery({
    queryKey: ["trending"],
    queryFn: getTrendingNews,
    staleTime: 1000 * 60 * 10,
  });
};

export const useArticle = (decodedId) => {
  return useQuery({
    queryKey: ["article", decodedId],
    queryFn: () => fetchArticleDetails(decodedId),
    staleTime: 1000 * 60 * 10,
  });
}
