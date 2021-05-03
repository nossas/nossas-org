import { useState, useEffect } from "react";

interface WindowSize {
  width: number;
  height: number;
  isSSR?: boolean;
}

const useWindowSize = (): WindowSize => {
  const isSSR = typeof window === "undefined";

  const [windowSize, setWindowSize] = useState<WindowSize>({
    width: isSSR ? 1200 : window.innerWidth,
    height: isSSR ? 800 : window.innerHeight,
  });

  useEffect(() => {
    window.addEventListener("resize", () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    });

    return () => {
      window.removeEventListener("resize", () => {
        setWindowSize({ width: window.innerWidth, height: window.innerHeight });
      });
    };
  }, []);

  return { ...windowSize, isSSR };
};

export default useWindowSize;
