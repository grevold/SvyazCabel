import s from "./ListWorks.module.css";
import { texts } from "../../../../texts";
import { Link } from "react-router-dom";
import { RoutePath } from "../../../../types";

export function ListWorks() {
  return (
    <div className={s.root}>
      <h1 className={s.title}>Мы выполняем широкий спектр работ</h1>
      <ul className={s.listWorks}>
        {texts.ListWorks.map((work) => (
          <li className={s.container}>
            <h2 className={s.titleWork}>{work.title}</h2>
            <div className={s.img_container}>
              <img
                className={s.img}
                src={`${process.env.PUBLIC_URL}/listWorks/${work.img}`}
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
