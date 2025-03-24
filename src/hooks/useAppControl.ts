import { useState, useEffect } from "react";
import useTrendingGifs from "hooks/api/useTrendingGifs.ts";
import { useGifContext } from "hooks/useGifContext.ts";
import { Gif, LockedGif } from "types/Gif.ts";

const LIMIT = 12;

const useAppControl = () => {
  const [offset, setOffset] = useState(0);
  const {
    data: fetchedGifs,
    isLoading,
    isError,
  } = useTrendingGifs(LIMIT, offset);
  const { lockedGifs } = useGifContext();
  const [displayedGifs, setDisplayedGifs] = useState<Gif[]>([]);

  useEffect(() => {
    if (!fetchedGifs) return;

    const newGrid: (Gif | null)[] = Array(LIMIT).fill(null);

    Object.values(lockedGifs).forEach((lockedGif: LockedGif) => {
      newGrid[lockedGif.position] = lockedGif;
    });

    const availableGifs = fetchedGifs.filter(
      (gif) => !Object.keys(lockedGifs).includes(gif.id),
    );

    let gifIndex = 0;
    for (let i = 0; i < LIMIT; i++) {
      if (newGrid[i] === null && gifIndex < availableGifs.length) {
        newGrid[i] = availableGifs[gifIndex++];
      }
    }

    const finalGifs = newGrid.filter((gif) => gif !== null) as Gif[];
    setDisplayedGifs(finalGifs);
  }, [fetchedGifs, lockedGifs]);

  const handleClick = () => {
    setOffset((prevOffset) => prevOffset + LIMIT);
  };

  return {
    data: displayedGifs,
    isLoading,
    isError,
    handleClick,
  };
};

export default useAppControl;
