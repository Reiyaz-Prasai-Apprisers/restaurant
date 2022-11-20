import { BreakPoints } from "@app/lib/types/grid";
import { useState } from "react";
import useIsomorphicLayoutEffect from "./useIsomorphicLayoutEffect";
export const useBreakPoints = (): BreakPoints => {
  const [size, setSize] = useState<BreakPoints>("xl");

  useIsomorphicLayoutEffect(() => {
    const breakPoint = {
      xs: 320,
      s: 480,
      m: 768,
      l: 1024,
      xl: 1440,
    };
    const setBreakPoint = () => {
      if (window.innerWidth <= 425) return setSize("xs");
      if (window.innerWidth <= 768) return setSize("s");
      if (window.innerWidth <= 1080) return setSize("m");
      if (window.innerWidth <= 1440) return setSize("l");
      if (window.innerWidth <= 1800) return setSize("xl");
      return setSize("xxl");
    };
    setBreakPoint();
    const handleResize = () => {
      setBreakPoint();
    };
    window.addEventListener("resize", handleResize, false);
    return () => window.removeEventListener("resize", handleResize, false);
  }, []);
  return size;
};
