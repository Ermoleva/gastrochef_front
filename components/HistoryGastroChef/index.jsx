import React from 'react'
import styles from "./styles.module.scss"
import Image from 'next/image';
import history from "../../public/images/history_img.png"


export default function HistoryGastroChef() {
  return (
    <div className={styles.history}>
                <Image src={history}
                       alt="image" layout={'raw'} className={styles.history__img}/>

                <div className={styles.history__info}>
                    <h2 className={styles.history__info_title}>
                    Історія GastroChef почалася понад 6 років тому...
                    </h2>
                    <p className={styles.history__info_text}>
                    Довгий час я спостерігав як людям не вистачає часу для правильного
                        і здорового харчування, яке правильне, просто харчування регулярного.
                    </p>
                    <p className={styles.history__info_text}>
                    Вони могли поснідати, в обід з&apos;їсти щось на кшталт шаурми чи снека,
                        а ввечері через голод наїстися, що погано позначалося на їх обміні
                        речовин та природно здоров&apos;я.
                    </p>
                    <p className={styles.history__info_text}>
                    Бажання хоч якось змінити ситуацію та допомогти людям не давало мені
                        спокою і вирішив відкрити доставку їжі правильного харчування.
                    </p>
                    <p className={styles.history__info_text}>
                    Я зі своїм 17-річним досвідом у спорті та проф. освітою, разом
                        з дієтологом розробили раціони правильного харчування з підрахунком
                        калорій (КБЖУ).
                    </p>
                    <h3 className={styles.history__info_subtitle}>
                    Знайомтеся! Команда GastroChef!
                    </h3>
                </div>

    </div>
  )
}
