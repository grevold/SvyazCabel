import s from "./ParalaxLayout.module.css";

export function ParalaxLayout() {
  return (
    <div className={s.wrapper}>
      <div
        className={s.header}
        style={{
          backgroundImage: `url('${process.env.PUBLIC_URL}/Mountain.png')`,
        }}
      ></div>
      <div className={s.section}>
        <span className={s.text}>
          Lorem Ipsum - это текст-"рыба", часто используемый в печати и
          вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на
          латинице с начала XVI века. В то время некий безымянный печатник
          создал большую коллекцию размеров и форм шрифтов, используя Lorem
          Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил
          без заметных изменений пять веков, но и перешагнул в электронный
          дизайн. Его популяризации в новое время послужили публикация листов
          Letraset с образцами Lorem Ipsum в 60-х годах и, в более недавнее
          время, программы электронной вёрстки типа Aldus PageMaker, в шаблонах
          которых используется Lorem Ipsum.
        </span>
      </div>
    </div>
  );
}
