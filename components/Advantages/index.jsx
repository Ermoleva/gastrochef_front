import styles from "./styles.module.scss";
import Image from "next/image";
import advantage_1 from "../../public/images/advantage_1.svg";
import advantage_2 from "../../public/images/advantage_2.svg";
import advantage_3 from "../../public/images/advantage_3.svg";
import advantage_4 from "../../public/images/advantage_4.svg";
import advantage_5 from "../../public/images/advantage_5.svg";
import advantage_6 from "../../public/images/advantage_6.svg";

export default function Advantages() {
  return (
    <div className={styles.advantages}>
      <div className={styles.advantages__container}>
        <div className={styles.advantages__item}>
          <Image
            className={styles.advantages__item_image}
            src={advantage_1}
            width={53}
            height={63}
          />
          <p className={styles.advantages__item_text}>
            Бережём природу. Эко-тара и проборы.
          </p>
        </div>
        <div className={styles.advantages__item}>
          <Image
            className={styles.advantages__item_image}
            src={advantage_2}
            width={53}
            height={63}
          />
          <p className={styles.advantages__item_text}>
            28 дней без повторения, более 300 блюд!
          </p>
        </div>
        <div className={styles.advantages__item}>
          <Image
            className={styles.advantages__item_image}
            src={advantage_3}
            width={53}
            height={63}
          />
          <p className={styles.advantages__item_text}>
            Бесплатно заменяем блюда и ингредиенты.
          </p>
        </div>
        <div className={styles.advantages__item}>
          <Image
            className={styles.advantages__item_image}
            src={advantage_4}
            width={53}
            height={63}
          />
          <p className={styles.advantages__item_text}>
            Готовим ночью, упаковываем и отправляем Вам!
          </p>
        </div>
        <div className={styles.advantages__item}>
          <Image
            className={styles.advantages__item_image}
            src={advantage_5}
            width={53}
            height={63}
          />
          <p className={styles.advantages__item_text}>
            Ежедневная удобная и бесплатная доставка с 6:00 до 10:00
          </p>
        </div>
        <div className={styles.advantages__item}>
          <Image
            className={styles.advantages__item_image}
            src={advantage_6}
            width={53}
            height={63}
          />
          <p className={styles.advantages__item_text}>
            Сохраняем Вашу энергию и до 14 часов в неделю освобождая от готовки!
          </p>
        </div>
      </div>
    </div>
  );
}
