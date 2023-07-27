import cn from "classnames";
import { useNavMobile } from "./useNavMobile";
import { Burger } from "./../../../../icons/Burger";

import s from "./NavMobile.module.css";
import { ModalMenu } from "./components/ModalMenu/ModalMenu";

interface Props {
  className?: string;
}

export function NavMobile({ className }: Props) {
  const { state, handleClick } = useNavMobile();

  return (
    <div className={s.container}>
      <div className={cn(s.root, className)} onClick={handleClick}>
        {!state && <Burger />}
      </div>
      <ModalMenu
        onClose={handleClick}
        isOpened={state}
        className={s.modalVisible}
      />
    </div>
  );
}
