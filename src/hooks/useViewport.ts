import { useEffect, useState } from "react";

const useViewport = () => {
  const [width, setWidth] = useState(window.innerWidth);

  const size = {
    mobile: 1047,
    desktop: 1048,
  };

  const isMobile = width <= size.mobile;
  const isDesktop = width >= size.desktop;

  const handleResize = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return window.removeEventListener("resize", handleResize);
  }, []);

  return { isMobile, isDesktop };
};

export default useViewport;
