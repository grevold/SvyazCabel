import s from "./Requisites.module.css";
import { useRequisites } from "./useRequisites";

import cn from "classnames";

interface Props {
  className?: string;
}

export function Requisites({ className }: Props) {
  const { state } = useRequisites();

  return (
    <div className={cn(s.root, className)}>
      <span className={s.header}>
        Вы можете скачать PDF-файл с реквизитами компании
      </span>
      <a
        className={s.container}
        href={`${process.env.PUBLIC_URL}/requisites/Requisites_Prom_Stroy.pdf`}
        download
      >
        <img
          className={s.img}
          src={`${process.env.PUBLIC_URL}/requisites/RequisitesIcon.png`}
        />
        <div
          className={state ? s.shadowBlock : s.shadowBlockLowShadowEffect}
        ></div>
        <button className={s.button}>Скачать</button>
      </a>
    </div>
  );
}
