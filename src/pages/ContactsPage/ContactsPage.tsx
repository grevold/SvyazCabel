import s from "./ContactsPage.module.css";

export function ContactsPage() {
  return (
    <div className={s.root}>
      <div className={s.container}>
        <div className={s.text_block}>
          <h1 className={s.header}>Контакты</h1>
          <h2 className={s.sub_header}>Телефоны:</h2>
          <span className={s.adress}>+7 952 512-88-60</span>
          <h2 className={s.sub_header}>E-mail:</h2>
          <span className={s.adress}>oooskabel@yandex.ru</span>
          <h2 className={s.sub_header}>Адрес:</h2>
          <span className={s.adress}>
            Челябинская область,
            <br /> г. Челябинск, ул. Куйбышева, д. 3, офис 35
          </span>
        </div>
        <img className={s.map} src={`${process.env.PUBLIC_URL}/Map.png`} />
      </div>
    </div>
  );
}
