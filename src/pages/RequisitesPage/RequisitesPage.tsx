import s from "./RequisitesPage.module.css";

export function RequisitesPage() {
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

  if (window.screen.width > 1000) {
    return (
      <div className={s.root}>
        <div className={s.playground}>
          <button className={s.sound} onMouseDown={playKick}>
            Kick
          </button>
          <button className={s.sound} onMouseDown={playHat}>
            Hat
          </button>
          <button className={s.sound} onMouseDown={playClap}>
            Clap
          </button>
          <button className={s.sound} onMouseDown={playBass}>
            Bass
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className={s.root}>
      <div className={s.playground}>
        <button className={s.sound} onTouchStart={playKick}>
          Kick
        </button>
        <button className={s.sound} onTouchStart={playHat}>
          Hat
        </button>
        <button className={s.sound} onTouchStart={playClap}>
          Clap
        </button>
        <button className={s.sound} onTouchStart={playBass}>
          Bass
        </button>
      </div>
    </div>
  );
}
