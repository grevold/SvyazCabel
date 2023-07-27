import s from "./Industries.module.css";
import { CircleDiagram } from "./components/CircleDiagram/CircleDiagram";

export function Industries() {
  return (
    <div className={s.root}>
      <ul className={s.container}>
        <li>
          <CircleDiagram
            persent={30}
            name={"Судостроение"}
            img={"Shipbuilding.png"}
          />
        </li>
        <li>
          <CircleDiagram
            persent={30}
            name={"Обрабатывающая промышленность"}
            img={"Manufacturing.png"}
          />
        </li>
        <li>
          <CircleDiagram
            persent={15}
            name={"Добывающая промышленность"}
            img={"Mining.png"}
          />
        </li>
        <li>
          <CircleDiagram
            persent={15}
            name={"Тяжелое машиностроение"}
            img={"Heavy.png"}
          />
        </li>
        <li>
          <CircleDiagram persent={5} name={"НИИ"} img={"Science.png"} />
        </li>
        <li>
          <CircleDiagram persent={5} name={"Авиастроение"} img={"Flying.png"} />
        </li>
      </ul>
    </div>
  );
}
