import { useQuery } from "@tanstack/react-query";
import { fetchTrendingGifs } from "services/giphyService.ts";

const useTrendingGifs = (limit = 12, offset = 0) => {
  return useQuery({
    queryKey: ["trending-gifs", limit, offset],
    queryFn: () => fetchTrendingGifs({ limit: limit, offset: offset }),
  });
};

export default useTrendingGifs;
