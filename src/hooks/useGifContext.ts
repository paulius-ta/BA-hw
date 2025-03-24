import { useContext } from "react";
import { GifContext } from "providers/GifContext.ts";

export const useGifContext = () => {
  return useContext(GifContext);
};
