import { useState, useEffect } from "react";
import { useElementInViewPortListener } from "../../../../../../hooks/useElementInViewPortListener";

import s from "./CircleDiagram.module.css";

const countAnimationInterval = 50;

interface Props {
  persent: number;
  name: string;
  img: string;
}

export function CircleDiagram({ persent, name, img }: Props) {
  const { ref, isElementInViewPort } =
    useElementInViewPortListener<HTMLDivElement>(persent);

  const [count, setCount] = useState<number>(0);
  useEffect(() => {
    if (!isElementInViewPort) {
      setCount(0);
      return;
    }
    const intervalId = setInterval(() => {
      setCount((prevCount) => {
        if (prevCount === persent) {
          clearInterval(intervalId);
          return prevCount;
        }
        return prevCount + 1;
      });
    }, countAnimationInterval);
    return () => clearInterval(intervalId);
  }, [isElementInViewPort]);

  return (
    <div className={s.root} ref={ref}>
      <h2 className={s.header}>{name}</h2>
      <h2 className={s.persent}>{count}%</h2>
      <img
        className={s.img}
        src={`${process.env.PUBLIC_URL}/industries/${img}`}
      />
      <svg className={s.chart} width="300" height="300" viewBox="0 0 50 50">
        <circle
          className={isElementInViewPort ? s.unit : s.unit_half}
          style={
            isElementInViewPort
              ? { strokeDasharray: `${persent} 100` }
              : { strokeDasharray: "0 100" }
          }
          r="15.9"
          cx="50%"
          cy="50%"
        ></circle>
      </svg>
    </div>
  );
}
