import { useState, useEffect } from "react";

const useScrollPosition = () => {
  const [scrollPosition, setScrollPosition] = useState<{
    position: number | undefined;
  }>({
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
