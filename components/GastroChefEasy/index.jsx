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
        <h2 className={styles.info__title}>«GastroChef - легко для занятых»</h2>
        <p className={styles.info__text}>
            GastroChef - правильное питание с доставкой на дом, создано что бы
            облегчить жизнь, освободить время от готовки, от ненужных перекусов,
            фастфудов и дать возможность чувствовать себя легко и полным
            энергии, сил, для новых свершений и побед.
        </p>
        <p className={styles.info__text}>
            Все продукты для приготовления правильного питания закупаются только
            с сертификатами, а рационы готовятся на современной и безопасной
            кухне ночью перед приездом к Вам!
        </p>
        <p className={styles.info__text_main}>
            Друзья, если у Вас остались вопросы Вы с легкостью можете позвонить
            нам или написать мне лично в Инстаграм или Фейсбук.
        </p>
        <h3 className={styles.info__subtitle}>С уважением, Кобылинский Кирилл.</h3>
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
            <p className={styles.info__social_text}>- Я в социальных сетях</p>
        </div>
    </div>
    <Image src={info}
           alt="image" layout={'raw'} className={styles.info__img}/>
</div>
  )
}
