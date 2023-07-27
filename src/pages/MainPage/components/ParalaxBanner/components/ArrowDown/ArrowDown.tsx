import cn from "classnames";
import s from "./ArrowDown.module.css";

interface Props {
  className?: string;
}

export function ArrowDown({ className }: Props) {
  const scrollTo = () => {
    window.scroll({
      top: 650,
      behavior: "smooth",
    });
  };
  return <div className={cn(s.arrowCta, className)} onClick={scrollTo}></div>;
}
