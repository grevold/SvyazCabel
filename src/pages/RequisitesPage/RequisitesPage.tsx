import { Link } from "react-router-dom";
import s from "./RequisitesPage.module.css";

export function RequisitesPage() {
  return (
    <div className={s.root}>
      <div className={s.document}>
        <h2 className={s.header}>Реквизиты</h2>
        <Link
          to={
            "https://drive.google.com/file/d/1nltVXtGX-Vwz4E1v4gfxxmvBd-qeTWjv/view?usp=drive_link"
          }
          target="_blank"
        >
          <div className={s.container}>
            <img
              className={s.prev}
              src={`${process.env.PUBLIC_URL}/requisites/prev_2.png`}
            />
          </div>
        </Link>
        <a
          className={s.button}
          href={`${process.env.PUBLIC_URL}/requisites/Requisites.pdf`}
          download
        >
          Скачать
        </a>
      </div>

      <div className={s.document}>
        <h2 className={s.header}>СРО</h2>
        <Link
          to={
            "https://drive.google.com/file/d/1XBpZwpSvTJg3orz3TSZQKa8APz8b1WGk/view?usp=drive_link"
          }
          target="_blank"
        >
          <div className={s.container}>
            <img
              className={s.prev}
              src={`${process.env.PUBLIC_URL}/requisites/prev_1.png`}
            />
          </div>
        </Link>
        <a
          className={s.button}
          href={`${process.env.PUBLIC_URL}/requisites/SRO.pdf`}
          download
        >
          Скачать
        </a>
      </div>
    </div>
  );
}
