import cn from "classnames";
import s from "./NavDesktop.module.css";
import { PhoneIcon } from "./../../../../icons/PhoneIcon";
import { EmailIcon } from "./../../../../icons/EmailIcon";
import { useNavDesktop } from "./useNavDesktop";
import { Link, useLocation } from "react-router-dom";
import { RoutePath } from "../../../../types";

interface Props {
  className?: string;
}

export function NavDesktop({ className }: Props) {
  const { state, handleClickTel, handleClickEmail } = useNavDesktop();
  const location = useLocation();
  console.log(location.pathname);
  return (
    <div className={cn(s.root, className)}>
      <div className={s.container}>
        <ul className={s.navigation}>
          <li>
            <Link
              className={
                location.pathname === RoutePath.MainPage
                  ? s.link_active
                  : s.link
              }
              to={RoutePath.MainPage}
            >
              Главная
            </Link>
          </li>
          <li>
            <Link
              className={
                location.pathname === RoutePath.RequisitesPage
                  ? s.link_active
                  : s.link
              }
              to={RoutePath.RequisitesPage}
            >
              Реквизиты
            </Link>
          </li>
          <li>
            <Link
              className={
                location.pathname === RoutePath.ContactsPage
                  ? s.link_active
                  : s.link
              }
              to={RoutePath.ContactsPage}
            >
              Контакты
            </Link>
          </li>
        </ul>
        <ul className={s.contacts}>
          <li onClick={handleClickTel} className={s.tel}>
            <PhoneIcon />
            {state.tel ? (
              <div className={s.telephonesBlock}>
                <span className={s.telNumber}>+7 351 247 46-90</span>
                <span className={s.telNumber2}>+7 351 247 46-91</span>
              </div>
            ) : (
              <span className={s.unVisibleTelNumber}></span>
            )}
          </li>

          <li className={s.email} onClick={handleClickEmail}>
            <EmailIcon />
            {state.email ? (
              <span className={s.telNumber}>metall@promstroy74.ru</span>
            ) : (
              <span className={s.unVisibleTelNumber}></span>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
}
