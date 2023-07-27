import { useForm } from "react-hook-form";
import { object, string } from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { forwardRef } from "react";
import { withHookFormMask } from "use-mask-input";

import s from "./FormEmail.module.css";

interface Props {
  onSubmit: () => Promise<void>;
}

interface FormValues {
  from_name: string;
  from_email: string;
  from_phone: string;
  from_message: string;
}

const formSchema = object().shape({
  from_name: string().required("Введите имя"),
  from_email: string().required("Введите email").email("невалидный email"),
  from_phone: string()
    .required("Введите телефон")
    .matches(/^\+7 \d{3} \d{3}-\d{2}-\d{2}$/, "Неверно введен телефон"),
  from_message: string(),
});

export const FormEmail = forwardRef<HTMLFormElement, Props>(
  ({ onSubmit }: Props, ref) => {
    const { register, handleSubmit, formState, reset } = useForm<FormValues>({
      mode: "onTouched",
      // @ts-ignore
      resolver: yupResolver(formSchema),
    });

    const submit = handleSubmit(() => {
      onSubmit().finally(reset);
    });

    const { errors } = formState;
    return (
      <form className={s.root} onSubmit={submit} ref={ref}>
        <label className={s.label}>Имя (Организация)</label>
        <input className={s.input} type="text" {...register("from_name")} />
        {errors.from_name?.message && (
          <div className={s.error_message}>{errors.from_name?.message}</div>
        )}
        <label className={s.label}> Ваш Email</label>
        <input className={s.input} type="email" {...register("from_email")} />
        {errors.from_email?.message && (
          <div className={s.error_message}>{errors.from_email?.message}</div>
        )}
        <label className={s.label}> Ваш телефон</label>

        <input
          {...withHookFormMask(register("from_phone"), [
            "+7 999 999-99-99",
            "+7 999 999-99-99",
          ])}
          type="text"
          className={s.input}
          placeholder="+7 999 999-99-99"
        />

        {errors.from_phone?.message && (
          <div className={s.error_message}>{errors.from_phone?.message}</div>
        )}
        <label className={s.label}>Сообщение</label>
        <textarea className={s.text} {...register("from_message")} />
        {errors.from_message?.message && (
          <div className={s.error_message}>{errors.from_message?.message}</div>
        )}
        <button
          className={formState.isValid ? s.buttonUnLock : s.buttonLock}
          type="submit"
          disabled={!formState.isValid}
        >
          Отправить
        </button>
      </form>
    );
  }
);
