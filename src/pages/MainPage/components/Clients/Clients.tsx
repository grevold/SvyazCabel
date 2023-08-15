import { useElementInViewPortListener } from "../../../../hooks/useElementInViewPortListener";

import s from "./Clients.module.css";

export function Clients() {
  const { ref: ref1, isElementInViewPort: isElementInViewPort1 } =
    useElementInViewPortListener<HTMLDivElement>(50);
  const { ref: ref2, isElementInViewPort: isElementInViewPort2 } =
    useElementInViewPortListener<HTMLDivElement>(50);
  const { ref: ref3, isElementInViewPort: isElementInViewPort3 } =
    useElementInViewPortListener<HTMLDivElement>(50);
  const { ref: ref4, isElementInViewPort: isElementInViewPort4 } =
    useElementInViewPortListener<HTMLDivElement>(50);
  const { ref: ref5, isElementInViewPort: isElementInViewPort5 } =
    useElementInViewPortListener<HTMLDivElement>(50);
  const { ref: ref6, isElementInViewPort: isElementInViewPort6 } =
    useElementInViewPortListener<HTMLDivElement>(50);
  const { ref: ref7, isElementInViewPort: isElementInViewPort7 } =
    useElementInViewPortListener<HTMLDivElement>(50);
  const { ref: ref8, isElementInViewPort: isElementInViewPort8 } =
    useElementInViewPortListener<HTMLDivElement>(50);
  const { ref: ref9, isElementInViewPort: isElementInViewPort9 } =
    useElementInViewPortListener<HTMLDivElement>(50);
  const { ref: ref10, isElementInViewPort: isElementInViewPort10 } =
    useElementInViewPortListener<HTMLDivElement>(50);
  const { ref: ref11, isElementInViewPort: isElementInViewPort11 } =
    useElementInViewPortListener<HTMLDivElement>(50);
  const { ref: ref12, isElementInViewPort: isElementInViewPort12 } =
    useElementInViewPortListener<HTMLDivElement>(50);

  if (window.screen.width < 1200) {
    return (
      <div className={s.root}>
        <h1 className={s.header}>Наши клиенты</h1>
        <ul className={s.clientsList}>
          <li>
            <div>
              <img
                className={s.logo}
                src={`${process.env.PUBLIC_URL}/clients/Rostelekom.png`}
              />
            </div>
          </li>
          <li>
            <div>
              <img
                className={s.logo}
                src={`${process.env.PUBLIC_URL}/clients/Trubodetal.png`}
              />
            </div>
          </li>
          <li>
            <div>
              <img
                className={s.logo}
                src={`${process.env.PUBLIC_URL}/clients/TsinkoviyZavod.png`}
              />
            </div>
          </li>
          <li>
            <div>
              <img
                className={s.logo}
                src={`${process.env.PUBLIC_URL}/clients/StsAvtodor.png`}
              />
            </div>
          </li>
          <li>
            <div>
              <img
                className={s.logo}
                src={`${process.env.PUBLIC_URL}/clients/MehanicheskiyZavod.png`}
              />
            </div>
          </li>
          <li>
            <div>
              <img
                className={s.logo}
                src={`${process.env.PUBLIC_URL}/clients/TSK.png`}
              />
            </div>
          </li>
          <li>
            <div>
              <img
                className={s.logo}
                src={`${process.env.PUBLIC_URL}/clients/CHTPZ.png`}
              />
            </div>
          </li>
          <li>
            <div>
              <img
                className={s.logo}
                src={`${process.env.PUBLIC_URL}/clients/SoyusPisheprom.png`}
              />
            </div>
          </li>
          <li>
            <div>
              <img
                className={s.logo}
                src={`${process.env.PUBLIC_URL}/clients/Unichel.png`}
              />
            </div>
          </li>
          <li>
            <div>
              <img
                className={s.logo}
                src={`${process.env.PUBLIC_URL}/clients/MVD.png`}
              />
            </div>
          </li>
          <li>
            <div>
              <img
                className={s.logo}
                src={`${process.env.PUBLIC_URL}/clients/Legion.png`}
              />
            </div>
          </li>
          <li>
            <div>
              <img
                className={s.logo}
                src={`${process.env.PUBLIC_URL}/clients/Dortransstroy.png`}
              />
            </div>
          </li>
        </ul>
      </div>
    );
  }

  return (
    <div className={s.root}>
      <h1 className={s.header}>Наши клиенты</h1>

      <ul className={s.clientsList}>
        <li>
          <div ref={ref1}>
            <img
              className={isElementInViewPort1 ? s.logo : s.logo_down}
              src={`${process.env.PUBLIC_URL}/clients/Rostelekom.png`}
            />
          </div>
        </li>
        <li>
          <div ref={ref2}>
            <img
              className={isElementInViewPort2 ? s.logo : s.logo_down}
              src={`${process.env.PUBLIC_URL}/clients/Trubodetal.png`}
            />
          </div>
        </li>
        <li>
          <div ref={ref3}>
            <img
              className={isElementInViewPort3 ? s.logo : s.logo_down}
              src={`${process.env.PUBLIC_URL}/clients/TsinkoviyZavod.png`}
            />
          </div>
        </li>
        <li>
          <div ref={ref4}>
            <img
              className={isElementInViewPort4 ? s.logo : s.logo_down}
              src={`${process.env.PUBLIC_URL}/clients/StsAvtodor.png`}
            />
          </div>
        </li>
        <li>
          <div ref={ref5}>
            <img
              className={isElementInViewPort5 ? s.logo : s.logo_down}
              src={`${process.env.PUBLIC_URL}/clients/MehanicheskiyZavod.png`}
            />
          </div>
        </li>
        <li>
          <div ref={ref6}>
            <img
              className={isElementInViewPort6 ? s.logo : s.logo_down}
              src={`${process.env.PUBLIC_URL}/clients/TSK.png`}
            />
          </div>
        </li>
        <li>
          <div ref={ref7}>
            <img
              className={isElementInViewPort7 ? s.logo : s.logo_down}
              src={`${process.env.PUBLIC_URL}/clients/CHTPZ.png`}
            />
          </div>
        </li>
        <li>
          <div ref={ref8}>
            <img
              className={isElementInViewPort8 ? s.logo : s.logo_down}
              src={`${process.env.PUBLIC_URL}/clients/SoyusPisheprom.png`}
            />
          </div>
        </li>
        <li>
          <div ref={ref9}>
            <img
              className={isElementInViewPort9 ? s.logo : s.logo_down}
              src={`${process.env.PUBLIC_URL}/clients/Unichel.png`}
            />
          </div>
        </li>
        <li>
          <div ref={ref10}>
            <img
              className={isElementInViewPort10 ? s.logo : s.logo_down}
              src={`${process.env.PUBLIC_URL}/clients/MVD.png`}
            />
          </div>
        </li>
        <li>
          <div ref={ref11}>
            <img
              className={isElementInViewPort11 ? s.logo : s.logo_down}
              src={`${process.env.PUBLIC_URL}/clients/Legion.png`}
            />
          </div>
        </li>
        <li>
          <div ref={ref12}>
            <img
              className={isElementInViewPort12 ? s.logo : s.logo_down}
              src={`${process.env.PUBLIC_URL}/clients/Dortransstroy.png`}
            />
          </div>
        </li>
      </ul>
    </div>
  );
}
