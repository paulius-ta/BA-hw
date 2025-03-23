import { useEffect, useState } from "react";
import { Gif } from "types/Gif.ts";

const useCard = (data: Gif) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = data.images.fixed_height_small.url;
    img.onload = () => setImageLoaded(true);

    return () => {
      img.onload = null;
    };
  }, [data.images.fixed_height_small.url]);

  return {
    imageLoaded,
  };
};

export default useCard;
