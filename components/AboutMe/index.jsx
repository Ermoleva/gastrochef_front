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
                        Здравствуйте! Меня зовут <span>Кобылинский Кирилл</span>, и я
                        являюсь <span>основателем GastroChef.</span>
                    </h2>
                    <p className={styles.about__info_text}>
                        Я Мастер Спорта Украины по тяжёлой атлетике, а так же состоял в
                        составе сборной Украины.
                    </p>
                    <p className={styles.about__info_text}>
                        У меня высшее образование национального университета физического
                        воспитания и спорта Украины (НФВСУ), а так же в прошлом я
                        профессиональный фитнес тренер!
                    </p>
                    <h3 className={styles.about__info_subtitle}>
                        И я хочу Вам рассказать побольше о GastroChef.
                    </h3>
                </div>

                <Image src={image}
                       alt="me" layout={'raw'} className={styles.about__img}/>


            </div>
        </div>
  )
}
