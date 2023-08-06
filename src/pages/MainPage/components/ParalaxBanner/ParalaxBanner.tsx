import { useState, useRef, useEffect } from "react";

import s from "./ParalaxBanner.module.css";
import { ArrowDown } from "./components/ArrowDown/ArrowDown";

export function ParalaxBanner() {
  const [MousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });
  const refContainer = useRef<any>(null);

  function handleMouseMove(event: any) {
    console.log(event);

    setMousePosition({ x: event.pageX, y: event.pageY });
  }

  function handleMouseDown(event: any) {
    const container = refContainer.current;
    if (!container) return;
    container.addEventListener("mousemove", () => {
      handleMouseMove(event);
    });
  }

  if (window.screen.width < 700) {
    return (
      <div className={s.root}>
        <div className={s.layers_container}>
          <div
            className={s.layer_1}
            style={{
              backgroundImage: `url('${process.env.PUBLIC_URL}/paralax/sky.png')`,
            }}
          ></div>

          <div
            className={s.layer_2}
            style={{
              backgroundImage: `url('${process.env.PUBLIC_URL}/paralax/construction2.png')`,
            }}
          ></div>
          <div className={s.layer_dark} />
          <div className={s.layer_3} />
          <div className={s.layer_text}>
            <img
              src={`${process.env.PUBLIC_URL}/paralax/WhiteLogo.png`}
              className={s.logo}
            />
          </div>
          <div className={s.arrow}>
            <ArrowDown />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={s.root}>
      <div
        ref={refContainer}
        className={s.layers_container}
        onMouseDown={(event) => handleMouseDown(event)}
        style={{
          transform: `rotateX(${
            (MousePosition.x - window.innerWidth / 2) * -0.09
          }deg) rotateY(${
            (MousePosition.y - window.innerHeight / 2) * 0.01
          }deg)`,
        }}
      >
        <div
          className={s.layer_1}
          style={{
            backgroundImage: `url('${process.env.PUBLIC_URL}/paralax/sky.png')`,
          }}
        ></div>

        <div
          className={s.layer_2}
          style={{
            backgroundImage: `url('${process.env.PUBLIC_URL}/paralax/construction2.png')`,
          }}
        ></div>
        <div className={s.layer_dark} />
        <div className={s.layer_3} />
        <div className={s.layer_text}>
          <img
            src={`${process.env.PUBLIC_URL}/paralax/WhiteLogo.png`}
            className={s.logo}
          />
        </div>
        <div className={s.arrow}>
          <ArrowDown />
        </div>
      </div>
    </div>
  );
}
