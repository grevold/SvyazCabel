import { useElementInViewPortListener } from "../../../../hooks/useElementInViewPortListener";

import s from "./History.module.css";

export function History() {
  const { ref: ref1, isElementInViewPort: isElementInViewPort1 } =
    useElementInViewPortListener<HTMLDivElement>(30);
  const { ref: ref2, isElementInViewPort: isElementInViewPort2 } =
    useElementInViewPortListener<HTMLDivElement>(30);
  const { ref: ref3, isElementInViewPort: isElementInViewPort3 } =
    useElementInViewPortListener<HTMLDivElement>(30);

  return (
    <div className={s.root} id={"scroller"}>
      <div className={s.container}>
        <div className={s.age}>
          <div
            ref={ref1}
            className={isElementInViewPort1 ? s.VisibleBlock : s.UnVisibleBlock}
          >
            <img
              className={s.img}
              src={`${process.env.PUBLIC_URL}/history/block_1.png`}
            />
            <span className={s.text}>
              «Промышленное строительство» - поставщик металлопроката
              федерального уровня с опытом работы на рынке более 25 лет.
            </span>
          </div>
          <div
            ref={ref2}
            className={isElementInViewPort2 ? s.VisibleBlock : s.UnVisibleBlock}
          >
            <img
              className={s.img}
              src={`${process.env.PUBLIC_URL}/history/block_2.png`}
            />
            <span className={s.text}>
              История компании берёт своё начало с 1998 года. С каждым годом
              компания достигала новых высот. Все это время мы были с нашими
              клиентами и росли вместе с ними.
            </span>
          </div>
        </div>
        <div
          ref={ref3}
          className={
            isElementInViewPort3 ? s.VisibleGeography : s.UnVisibleGeography
          }
        >
          <img
            className={s.img}
            src={`${process.env.PUBLIC_URL}/history/monument.png`}
          />
          <span className={s.text_geography}>
            Удобное географическое расположение позволяет осуществлять снабжение
            предприятий-клиентов по всей стране: от Калининграда до
            Владивостока.
          </span>
        </div>
      </div>
    </div>
  );
}
