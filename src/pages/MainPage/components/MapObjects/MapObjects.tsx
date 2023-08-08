import {
  YMaps,
  Map,
  Polyline,
  ZoomControl,
  Placemark,
} from "@pbe/react-yandex-maps";
import { useState } from "react";
import { texts } from "../../../../texts";
import s from "./MapObjects.module.css";
export function MapObjects() {
  const [state, setState] = useState({ text: "", visible: false });
  const [polylineStyle, setPolylineStyle] = useState(false);

  function showBalloon(text: string) {
    setState((prevState) => ({ text: text, visible: true }));
  }

  return (
    <div className={s.root}>
      <YMaps>
        <div className={s.map_container}>
          <Map
            instanceRef={(ref) => {
              ref && ref.behaviors.disable("scrollZoom");
            }}
            defaultState={{ center: [55.150859, 61.385872], zoom: 15 }}
            className={s.map}
          >
            <div className={s.geoObjects}>
              <div className={s.text}>
                <h1 className={s.header}>Карта выполненных объектов</h1>
                <span className={s.subText}>
                  За эти годы наша компания выполнила более 1000 объектов по
                  Челябинску и Челябинской области. Телекоммуникации, связть,
                  телефония, камеры видео-наблюдения
                </span>
              </div>
              <div
                className={
                  state.visible ? s.balloonVisible : s.balloonUnVisible
                }
              >
                {state.text}
              </div>
              {texts.Map.Polylines.map((polyline) => (
                <Polyline
                  key={polyline.text.title}
                  geometry={polyline.cordinates}
                  options={
                    polylineStyle
                      ? {
                          hasBalloon: true,
                          openBalloonOnClick: true,
                          strokeColor: "0066ffff",
                          strokeWidth: 8,
                          strokeStyle: {
                            style: "dot",
                            offset: 10,
                          },
                        }
                      : {
                          hasBalloon: true,
                          openBalloonOnClick: true,
                          strokeColor: "000000",
                          strokeWidth: 3,
                          strokeStyle: {
                            style: "solid",
                          },
                        }
                  }
                  onClick={() => {
                    showBalloon(`${polyline.text.description}`);
                  }}
                  onMouseEnter={() => {
                    setPolylineStyle((prevPolylineStyle) => !prevPolylineStyle);
                  }}
                  onMouseLeave={() => {
                    setPolylineStyle((prevPolylineStyle) => !prevPolylineStyle);
                  }}
                />
              ))}
              {texts.Map.Placemarks.map((placemark) => (
                <Placemark
                  geometry={placemark.cordinates}
                  className={s.placemark}
                  properties={{
                    balloonContentHeader: "Заголовок",
                    balloonContentBody: "Содержимое",
                    balloonContentFooter: "Подвал",
                    hintContent: "Подсказка",
                  }}
                  options={{ hasBalloon: true }}
                />
              ))}

              <ZoomControl options={{ visible: true }} />
            </div>
          </Map>
        </div>
      </YMaps>
    </div>
  );
}
