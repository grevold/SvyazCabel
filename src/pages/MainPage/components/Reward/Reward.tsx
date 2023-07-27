import { useElementInViewPortListener } from "../../../../hooks/useElementInViewPortListener";
import s from "./Reward.module.css";

export function Reward() {
  const { ref: ref1, isElementInViewPort: isElementInViewPort1 } =
    useElementInViewPortListener<HTMLDivElement>(10);

  if (window.screen.width < 1000) {
    return (
      <div className={s.visibleRoot}>
        <span className={s.text}>
          «Промышленное строительство» - надёжный поставщик по версии ЭТП
          Фабрикант
        </span>
        <img
          className={s.img}
          src={`${process.env.PUBLIC_URL}/reward/reward.png`}
        />
      </div>
    );
  }
  return (
    <div
      ref={ref1}
      className={isElementInViewPort1 ? s.visibleRoot : s.unVisibleRoot}
    >
      <span className={s.text}>
        «Промышленное строительство» - надёжный поставщик по версии ЭТП
        Фабрикант
      </span>
      <img
        className={s.img}
        src={`${process.env.PUBLIC_URL}/reward/reward.png`}
      />
    </div>
  );
}
