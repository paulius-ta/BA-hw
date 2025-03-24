import { createContext } from "react";
import { Gif, LockedGif } from "types/Gif.ts";

export interface GifContextType {
  lockedGifs: Record<string, LockedGif>;
  lockGif: (gif: Gif, position: number) => void;
  unlockGif: (gifId: string) => void;
}

export const GifContext = createContext<GifContextType>({
  lockedGifs: {},
  lockGif: () => {},
  unlockGif: () => {},
});
