import { useEffect, useState } from "react";

function usePrefersReducedMotion() {
  const [reduceMotion, setReduceMotion] = useState(() => {
    if (process.browser) {
      return window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    }
  });

  useEffect(() => {
    const mediaQuery = window.matchMedia?.("(prefers-reduced-motion: reduce)");
    
    const handleMediaChange = () => {
      setReduceMotion(mediaQuery?.matches);
    };

    try { // for Chrome & Firefox
      mediaQuery?.addEventListener("change", (e) => handleMediaChange());
      return () => {
        mediaQuery?.removeEventListener('change', (e) => handleMediaChange());
      };
    } catch (e1) { // for Safari
      mediaQuery?.addListener((e) => handleMediaChange());
      return () => {
        mediaQuery?.removeListener((e) => handleMediaChange());
      };
    }


  }, []);

  return reduceMotion;
}

export default usePrefersReducedMotion;
