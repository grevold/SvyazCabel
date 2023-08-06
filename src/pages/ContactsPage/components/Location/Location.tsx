import { YMaps, Map, Placemark, Polyline } from "@pbe/react-yandex-maps";
import { useState, useRef, useEffect } from "react";

import s from "./Location.module.css";

export function Location() {
  const [state, setState] = useState(false);
  const refPolyline1 = useRef<any>(null);
  useEffect(() => {
    const polyline = refPolyline1.current;
    if (!polyline) return;
    console.log(polyline);
    polyline.addEventListener("click", () => {
      console.log(polyline);
    });
  }, []);

  return (
    <YMaps>
      <div className={s.root}>
        <div className={s.container}>
          <div className={s.map_container}>
            <div className={s.text_container}>
              <h1 className={s.header}>Контакты</h1>
              <h2 className={s.sub_header}>Наше местоположение:</h2>
              <div className={s.text_addresses}>
                <div className={s.row_addresses}>
                  <span className={s.address_head}>Офис: </span>
                  <span className={s.address}>
                    г.Челябинск, ул.Курчатова, д.23-Б, оф.901
                  </span>
                </div>
                <div className={s.row_addresses}>
                  <span className={s.address_head}>Склад: </span>
                  <span className={s.address}>
                    Станция "Челябинск-Грузовой" ЮУЖД, код станции: 800101, код
                    предприятия: 1610
                  </span>
                </div>
                <div className={s.row_addresses}>
                  <span className={s.address_head}>Дла автомобилей: </span>
                  <span className={s.address}>
                    проходная напротив Троицкий тр. 21-Б, (поворот на дорогу к
                    станции после Троицкого тр. 21 (ТК "Челси"), если ехать от
                    центра.)
                  </span>
                </div>
              </div>
            </div>
            <Map
              defaultState={{ center: [55.150859, 61.385872], zoom: 15 }}
              className={s.map}
            >
              <div className={s.placemark_container}>
                <div className={s.balloon}> Объект №1</div>
                <Polyline
                  instanceRef={refPolyline1}
                  index="object_1"
                  geometry={[
                    [55.160851, 61.398822],
                    [55.158891, 61.39933],
                    [55.158267, 61.404263],
                    [55.156497, 61.401622],
                  ]}
                  properties={{
                    balloonContent: <h1>hello</h1>,
                    hintContent: <h1>hello</h1>,
                    balloonContentHeader: <h1>hello</h1>,
                    balloonContentBody: <h1>hello</h1>,
                  }}
                  options={{
                    hasBalloon: true,
                    openBalloonOnClick: true,
                  }}
                />

                {/* <Placemark
                  geometry={[55.150859, 61.385872]}
                  properties={{
                    balloonContentHeader: "Заголовок",
                    balloonContentBody: "Содержимое",
                    balloonContentFooter: "Подвал",
                    hintContent: "Подсказка"
                  }}
                  options={{ hasBalloon: true }}
                /> */}
              </div>
            </Map>
          </div>
        </div>
      </div>
    </YMaps>
  );
}
