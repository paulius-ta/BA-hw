import { ReactNode, useState, useEffect, useRef } from "react";
import { GifContext } from "providers/GifContext.ts";
import { Gif, LockedGif } from "types/Gif.ts";

interface GifProviderProps {
  children: ReactNode;
}

const STORAGE_KEY = "giphy_locked_gifs";

const loadInitialState = () => {
  const savedGifs = localStorage.getItem(STORAGE_KEY);
  return savedGifs ? JSON.parse(savedGifs) : {};
};

export const GifProvider = ({ children }: GifProviderProps) => {
  const isFirstRender = useRef(true);
  const [lockedGifs, setLockedGifs] =
    useState<Record<string, LockedGif>>(loadInitialState());

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    localStorage.setItem(STORAGE_KEY, JSON.stringify(lockedGifs));
  }, [lockedGifs]);

  const lockGif = (gif: Gif, position: number) => {
    setLockedGifs((prev) => ({
      ...prev,
      [gif.id]: {
        ...gif,
        position,
      },
    }));
  };

  const unlockGif = (gifId: string) => {
    setLockedGifs((prev) => {
      const newLockedGifs = { ...prev };
      delete newLockedGifs[gifId];
      return newLockedGifs;
    });
  };

  return (
    <GifContext.Provider
      value={{
        lockedGifs,
        lockGif,
        unlockGif,
      }}
    >
      {children}
    </GifContext.Provider>
  );
};
