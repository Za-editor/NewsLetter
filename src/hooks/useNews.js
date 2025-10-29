import { useQuery } from "@tanstack/react-query";
import { getAllNewsSection } from "../services/api/newsApi";

export const useNewsSection = () => {
  return useQuery({
    queryKey: ["sections"],
    queryFn: getAllNewsSection,
  });
};
