import { useState, useEffect } from "react";
import { ScrollPositionType } from "../types/Types";

const useScrollPosition = () => {
  const [scrollPosition, setScrollPosition] = useState<ScrollPositionType>({
    position: undefined,
  });

  useEffect(() => {
    const updatePosition = () => {
      setScrollPosition({ position: window.pageYOffset });
    };
    window.addEventListener("scroll", updatePosition);
    updatePosition();
    return () => window.removeEventListener("scroll", updatePosition);
  }, []);

  return scrollPosition;
};

export default useScrollPosition;
