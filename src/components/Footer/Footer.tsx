import { Link } from "react-router-dom";
import s from "./Footer.module.css";
import { RoutePath } from "../../types";
import { WhiteLogo } from "../../icons/WhiteLogo";
import { PhoneIcon } from "../../icons/PhoneIcon";
import { EmailIcon } from "../../icons/EmailIcon";
import cn from "classnames";

interface Props {
  className?: string;
}

export function Footer({ className }: Props) {
  return (
    <div className={cn(s.root, className)}>
      <div className={s.container}>
        <ul className={s.nav}>
          <li>
            <Link className={s.link} to={RoutePath.MainPage}>
              Главная
            </Link>
          </li>
          <li>
            <Link className={s.link} to={RoutePath.RequisitesPage}>
              Реквизиты
            </Link>
          </li>
          <li>
            <Link className={s.link} to={RoutePath.ContactsPage}>
              Контакты
            </Link>
          </li>
        </ul>
        <ul className={s.contacts_container}>
          <li className={s.contact_block}>
            <PhoneIcon />
            <span className={s.contact}>+7 351 247 46-90</span>
          </li>
          <li className={s.contact_block}>
            <EmailIcon />
            <span className={s.contact}>metall@promstroy74.ru</span>
          </li>
        </ul>
        <WhiteLogo className={s.logo} />
      </div>
    </div>
  );
}
