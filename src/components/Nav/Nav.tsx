import s from "./Nav.module.css";
import { NavDesktop } from "./components/NavDesktop/NavDesktop";
import { NavMobile } from "./components/NavMobile/NavMobile";

export function Nav() {
  return (
    <>
      <NavMobile className={s.navMobile} />
      <NavDesktop className={s.navDesktop} />
    </>
  );
}
