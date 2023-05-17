import React from 'react'
import styles from "./styles.module.scss";
import Image from "next/image";

import inst from "../../public/images/inst_icon.svg";
import facebook from "../../public/images/facebook_icon.svg"
import info from "../../public/images/info_png.png"

export default function GastroChefEasy() {
  return (
    <div className={styles.info}>
    <div className={styles.info__wrapp}>
        <h2 className={styles.info__title}>«GastroChef – легко для зайнятих»</h2>
        <p className={styles.info__text}>
        GastroChef - правильне харчування з доставкою додому, створене щоб
            полегшити життя, звільнити час від готування, від непотрібних перекусів,
            фастфудів і дати можливість почуватися легко і повним
            енергії, сил, для нових звершень та перемог.
        </p>
        <p className={styles.info__text}>
        Всі продукти для приготування правильного харчування закуповуються тільки
            з сертифікатами, а раціони готуються на сучасній та безпечній
            кухні вночі перед приїздом до Вас!
        </p>
        <p className={styles.info__text_main}>
        Друзі, якщо у Вас залишилися питання, Ви з легкістю можете зателефонувати
            нам чи написати мені особисто в Інстаграм чи Фейсбук.
        </p>
        <h3 className={styles.info__subtitle}>З повагою, Кобилінський Кирило.</h3>
        <div className={styles.info__social}>
            <div className={styles.info__social_icon}>
                <div className={styles.info__social_item}>
                    <a href="src/components/section/info#" className={styles.info__social_img_link}
                    >
                        <Image src={inst}
                               alt="image" layout={'raw'} className={styles.info__social_img}/>
                    </a>
                </div>
                <div className={styles.info__social_item}>
                    <a href="src/components/section/info#" className={styles.info__social_img_link}
                    >
                        <Image src={facebook}
                               alt="image" layout={'raw'} className={styles.info__social_img}/>
                    </a>
                </div>
            </div>
            <p className={styles.info__social_text}>- Я у соціальних мережах</p>
        </div>
    </div>
    <Image src={info}
           alt="image" layout={'raw'} className={styles.info__img}/>
</div>
  )
}
