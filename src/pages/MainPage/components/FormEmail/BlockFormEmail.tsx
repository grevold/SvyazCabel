import { FormEmail } from "./components/FormEmail/FormEmail";
import emailjs from "emailjs-com";
import { useRef } from "react";

import s from "./BlockFormEmail.module.css";

export function BlockFormEmail() {
  const ref = useRef<HTMLFormElement>(null);

  async function sendEmail() {
    const form = ref.current;
    if (!form) return;

    return emailjs
      .sendForm(
        "service_v5d7rfb",
        "template_14ahvmh",
        form,
        "vQ8Xdu_NZDBlLutft"
      )
      .then(
        (result) => {
          console.log("Форма отправлена");
        },
        (error) => {
          console.log(error.text);
        }
      );
  }

  return (
    <div className={s.root}>
      <h2 className={s.header}>Оставьте заявку, мы вам обязательно ответим</h2>
      <FormEmail onSubmit={sendEmail} ref={ref} />
    </div>
  );
}
