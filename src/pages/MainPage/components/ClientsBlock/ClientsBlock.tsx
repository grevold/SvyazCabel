import { useElementInViewPortListener } from "../../../../hooks/useElementInViewPortListener";
import s from "./ClientsBlock.module.css";

export function ClientsBlock() {
  const { ref: ref1, isElementInViewPort: isElementInViewPort1 } =
    useElementInViewPortListener<HTMLDivElement>(30);
  return (
    <div
      ref={ref1}
      className={isElementInViewPort1 ? s.visibleRoot : s.unVisibleRoot}
    >
      <img
        className={s.img}
        src={`${process.env.PUBLIC_URL}/clients/backgroundFrame.png`}
      />
      <span className={s.text}>
        Наши клиенты - крупнейшие предприятия Российской Федерации в различных
        сферах
      </span>
    </div>
  );
}
