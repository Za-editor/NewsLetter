import { useQuery } from "@tanstack/react-query";
import {
  getAllNewsSection,
  getLatestNews,
  getTrendingNews,
} from "../services/api/newsApi";

export const useNewsSection = () => {
  return useQuery({
    queryKey: ["sections"],
    queryFn: getAllNewsSection,
    staleTime: 1000 * 60 * 30,
  });
};

export const useLatestNews = (pageSize) => {
  return useQuery({
    queryKey: ["latest", pageSize],
    queryFn: () => getLatestNews(pageSize),
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
