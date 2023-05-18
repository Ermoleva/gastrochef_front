import React from 'react'
import Image from 'next/image';
import styles from "./styles.module.scss"

import image from "../../public/images/slider3.png";

export default function AboutMe() {
  return (
    <div className={styles.about}>
            <div className={styles.container}>
                <div className={styles.about__info}>
                    <h2 className={styles.about__info_title}>
                    Вітаю! Мене звати <span>Кобилинський Кирило</span>, і я 
                    є <span>засновником GastroChef.</span>
                    </h2>
                    <p className={styles.about__info_text}>
                    Я Майстер Спорту України з важкої атлетики, а також перебував у
                        склад збірної України.
                    </p>
                    <p className={styles.about__info_text}>
                    У мене вища освіта національного університету фізичного
                        виховання та спорту України (НФЗСУ), а так само в минулому я
                        професійний фітнес тренер!
                    </p>
                    <h3 className={styles.about__info_subtitle}>
                    І я хочу Вам розповісти більше про GastroChef.
                    </h3>
                </div>

                <Image src={image}
                       alt="me" layout={'raw'} className={styles.about__img}/>


            </div>
        </div>
  )
}
