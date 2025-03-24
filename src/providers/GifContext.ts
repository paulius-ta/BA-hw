import { createContext } from "react";
import { Gif } from "types/Gif.ts";

export interface GifContextType {
  lockedGifs: Record<string, Gif>;
  lockGif: (gif: Gif) => void;
  unlockGif: (gifId: string) => void;
}

export const GifContext = createContext<GifContextType>({
  lockedGifs: {},
  lockGif: () => {},
  unlockGif: () => {},
});
