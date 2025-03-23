import useTrendingGifs from "hooks/api/useTrendingGifs.ts";
import { useState } from "react";

const useAppControl = () => {
  const [offset, setOffset] = useState(0);
  const limit = 12;
  const { data, isLoading, isError } = useTrendingGifs(limit, offset);

  const handleClick = () => {
    setOffset((prevOffset) => prevOffset + limit);
  };

  return {
    data,
    isLoading,
    isError,
    handleClick,
  };
};

export default useAppControl;
