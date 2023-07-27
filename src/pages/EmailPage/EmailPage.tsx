import { BlockFormEmail } from "../MainPage/components/FormEmail/BlockFormEmail";
import s from "./EmailPage.module.css";

export function EmailPage() {
  return (
    <div className={s.root}>
      <BlockFormEmail />
    </div>
  );
}
