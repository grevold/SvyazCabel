import { useEffect, useRef, useState } from "react";

export const useElementInViewPortListener = <T extends HTMLElement>(
  elementHeightInViewPortPercentage: number
) => {
  const ref = useRef<T>(null);
  const [isElementInViewPort, setIsElementInViewPort] =
    useState<boolean>(false);

  useEffect(() => {
    function handleScroll(event: Event) {
      const root = ref.current;
      if (!root) return;
      const distance = root.offsetTop - window.innerHeight - window.scrollY;

      if (
        distance <= 0 &&
        -distance >=
          (root.clientHeight / 100) * elementHeightInViewPortPercentage
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
