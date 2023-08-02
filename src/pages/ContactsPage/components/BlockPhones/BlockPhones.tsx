import { ArrowDown } from "../../../../icons/ArrowDown";
import { ArrowUp } from "../../../../icons/ArrowUp";
import s from "./BlockPhones.module.css";
import { useState } from "react";

export function BlockPhones() {
  const [state, setState] = useState({ email: false, tel: false });
  function handleClickEmail() {
    setState((prevState) => ({ email: !prevState.email, tel: prevState.tel }));
  }
  function handleClickTel() {
    setState((prevState) => ({ email: prevState.email, tel: !prevState.tel }));
  }

  return (
    <div className={s.root}>
      <div className={s.block}>
        <div className={s.selectRow} onClick={handleClickEmail}>
          <span className={s.title}>Наш E-mail</span>
          {state.email ? <ArrowUp /> : <ArrowDown />}
        </div>
        <ul className={state.email ? s.contacts : s.unVisibleContacts}>
          <li>
            <span className={s.email}>metall@promstroy74.ru</span>
          </li>
        </ul>
      </div>
      <div className={s.block}>
        <div className={s.selectRow} onClick={handleClickTel}>
          <span className={s.title}>Наши телефоны</span>
          {state.tel ? <ArrowUp /> : <ArrowDown />}
        </div>
        <ul className={state.tel ? s.contacts : s.unVisibleContacts}>
          <li>
            <a className={s.tel} href="tel:+73512474690">
              +73512474690
            </a>
          </li>
          <li>
            <a className={s.tel} href="tel:+73512474691">
              +73512474691
            </a>
          </li>
          <li>
            <a className={s.tel} href="tel:+73512474692">
              +73512474692
            </a>
          </li>
          <li>
            <a className={s.tel} href="tel:+73512474693">
              +73512474693
            </a>
          </li>
          <li>
            <a className={s.tel} href="tel:+79194066735">
              +79194066735
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
