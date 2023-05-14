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
          Бережемо природу. Еко-тара та проділи.
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
          28 днів без повторення, понад 300 страв!
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
          Безкоштовно замінюємо страви та інгредієнти.
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
          Готуємо вночі, упаковуємо та відправляємо Вам!
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
          Щоденна зручна та безкоштовна доставка з 10:00 до 22:00
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
          Зберігаємо Вашу енергію і до 14 години на тиждень звільняючи від готування!
          </p>
        </div>
      </div>
    </div>
  );
}
