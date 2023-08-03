
import { ProductBanner } from "../../../../../types";

import s from "./Slide.module.css";

interface Props {
  product: ProductBanner;
}

export function Slide({ product}: Props) {

  return (
    <div className={s.root}>
      <div className={s.info}>
        <div className={s.container}>
          <div className={s.title_container}>
            <h1 className={s.title}>{product.title}</h1>
          </div>
          <div className={s.text_container}>
            <span className={s.text}>{product.text}</span>
          </div>

        </div>
      </div>
      <img
        className={s.bg_image_more}
        src={`${process.env.PUBLIC_URL}/slider/${product.img}`}
      />
    </div>
  );
}
