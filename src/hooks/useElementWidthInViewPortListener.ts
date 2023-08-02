import { useEffect, useRef, useState } from "react";

export const useElementWidthInViewPortListener = <T extends HTMLElement>(
  elementWidthInViewPortPercentage: number
) => {
  const ref = useRef<T>(null);
  const [isElementInViewPort, setIsElementInViewPort] =
    useState<boolean>(false);

  useEffect(() => {
    function handleScroll(event: Event) {
      const root = ref.current;
      if (!root) return;
      const distance = root.offsetLeft - window.innerWidth - window.scrollX;

      if (
        distance <= 0 &&
        -distance >=
          (root.clientWidth / 100) * elementWidthInViewPortPercentage
      ) {
        setIsElementInViewPort(true);
      } else {
        setIsElementInViewPort(false);
      }
    }
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return { ref, isElementInViewPort };
};
