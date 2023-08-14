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
            <span className={s.contact}>+7 351 282-11-77</span>
          </li>

          <li className={s.email} onClick={handleClickEmail}>
            <EmailIcon />
            <span className={s.contact}>oooskabel@yandex.ru</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
