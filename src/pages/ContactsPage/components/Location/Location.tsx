import { YMaps, Map, Placemark, Polyline } from "@pbe/react-yandex-maps";
import { useState, useRef, useEffect } from "react";

import s from "./Location.module.css";

export function Location() {
  function playKick() {
    let audio = new Audio(
      `${process.env.PUBLIC_URL}/Samples/Drums/Kick_02.mp3`
    );
    audio.play();
  }
  function playHat() {
    let audio = new Audio(`${process.env.PUBLIC_URL}/Samples/Drums/Hat_01.mp3`);
    audio.play();
  }
  function playClap() {
    let audio = new Audio(
      `${process.env.PUBLIC_URL}/Samples/Drums/Clap_06.mp3`
    );
    audio.play();
  }
  function playBass() {
    let audio = new Audio(
      `${process.env.PUBLIC_URL}/Samples/Drums/Bass_01.mp3`
    );
    audio.play();
  }

  return (
    <div className={s.root_music}>
      <div className={s.playground}>
        <button className={s.sound} onClick={playKick}>
          Kick
        </button>
        <button className={s.sound} onClick={playHat}>
          Hat
        </button>
        <button className={s.sound} onClick={playClap}>
          Clap
        </button>
        <button className={s.sound} onClick={playBass}>
          Bass
        </button>
      </div>
    </div>
  );
}
