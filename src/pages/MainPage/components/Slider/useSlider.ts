import { useEffect } from "react";

export function useSlider() {
  useEffect(() => {
    const buttonPrev = document.querySelector(".swiper-button-prev");
    const buttonNext = document.querySelector(".swiper-button-next");
    if (!buttonPrev || !buttonNext) {
      return;
    }

    buttonPrev.innerHTML = `<svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M42 24L28 36.5L42 49" stroke="white" strokeWidth="2" stroke-linecap="round"/>
    </svg>`;
    buttonNext.innerHTML = `<svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M32 49L46 36.5L32 24" stroke="white" strokeWidth="2" stroke-linecap="round" />
</svg>`;
  }, []);
}
