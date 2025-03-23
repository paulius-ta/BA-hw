import { Gif, GifResponse } from "/types/Gif.ts";
import { transformGifData } from "services/giphyHelper.ts";

const API_KEY = import.meta.env.VITE_GIPHY_API_KEY;
const BASE_URL = import.meta.env.VITE_GIPHY_API_BASE_URL;

interface FetchParams {
  limit?: number;
  offset?: number;
}

export const fetchTrendingGifs = async ({
  limit,
  offset,
}: FetchParams = {}): Promise<Gif[]> => {
  try {
    const response = await fetch(
      `${BASE_URL}/trending?api_key=${API_KEY}&limit=${limit}&offset=${offset}`,
    );

    const data: GifResponse = await response.json();
    return transformGifData(data);
  } catch (error) {
    console.error("Error fetching gifs:", error);
    throw error;
  }
};
