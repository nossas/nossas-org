import { useState, useEffect } from "react";

interface WindowSize {
  width: number;
  height: number;
  isMobile: boolean;
  isSSR?: boolean;
}

const MOBILE_WIDTH_BASE: number = 991;

const useWindowSize = (): WindowSize => {
  // use isSSR to render Loading when isn't possible check window resize
  const isSSR = typeof window === "undefined";

  const [windowSize, setWindowSize] = useState<WindowSize>({
    width: isSSR ? 1200 : window.innerWidth,
    height: isSSR ? 800 : window.innerHeight,
    isMobile: isSSR ? false : window.innerWidth < MOBILE_WIDTH_BASE,
  });

  useEffect(() => {
    window.addEventListener("resize", () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
        isMobile: window.innerWidth < MOBILE_WIDTH_BASE,
      });
    });

    return () => {
      window.removeEventListener("resize", () => {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
          isMobile: window.innerWidth < MOBILE_WIDTH_BASE,
        });
      });
    };
  }, []);

  return { ...windowSize, isSSR };
};

export default useWindowSize;
