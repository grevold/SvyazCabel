import { ProductBanner } from "../../../../../types";

import s from "./Slide.module.css";

interface Props {
  product: ProductBanner;
}

export function Slide({ product }: Props) {
  return (
    <div className={s.root}>
      <div className={s.info}>
        <div className={s.container}>
          <h1 className={s.title}>{product.title}</h1>
          <div className={s.marks}>{product.marks}</div>
          <div className={s.products}>{product.products}</div>
          <div className={s.icons}>
            {product.icons.map((icon) => (
              <img
                key={icon}
                className={s.icon}
                src={`${process.env.PUBLIC_URL}/slider/labels/${icon}`}
              />
            ))}
          </div>
        </div>
      </div>
      <img
        className={s.bg_image}
        src={`${process.env.PUBLIC_URL}/slider/${product.product_bg}`}
      />
    </div>
  );
}
