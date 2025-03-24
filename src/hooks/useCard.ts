import { useEffect, useState } from "react";
import { Gif } from "types/Gif.ts";
import { useGifContext } from "hooks/useGifContext.ts";

const useCard = (data: Gif) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const { lockGif, unlockGif, lockedGifs } = useGifContext();
  const isLocked = Boolean(lockedGifs[data.id]);

  useEffect(() => {
    const img = new Image();
    img.src = data.images.fixed_height_small.url;
    img.onload = () => setImageLoaded(true);

    return () => {
      img.onload = null;
    };
  }, [data.images.fixed_height_small.url]);

  const handleLockToggle = () => {
    if (isLocked) {
      unlockGif(data.id);
    } else {
      lockGif(data);
    }
  };

  return {
    imageLoaded,
    isLocked,
    handleLockToggle,
  };
};

export default useCard;
