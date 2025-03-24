import { ReactNode, useState } from "react";
import { GifContext } from "providers/GifContext.ts";
import { Gif } from "types/Gif.ts";

interface GifProviderProps {
  children: ReactNode;
}

export const GifProvider = ({ children }: GifProviderProps) => {
  const [lockedGifs, setLockedGifs] = useState<Record<string, Gif>>({});

  const lockGif = (gif: Gif) => {
    setLockedGifs((prev) => ({
      ...prev,
      [gif.id]: gif,
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
