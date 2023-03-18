import React from 'react'
import styles from "../../styles/shopItem.module.scss"

export default function CandyInfo() {
  return (
    <div className={styles.product__info}>
                <div className={styles.container}>
                    <h2 className={styles.product__info_title}>Полезные конфеты</h2>
                    <p className={styles.product__info_text}>
                        Представляем сладкую коллекцию полезных конфет. Созданы с любовью и
                        изготовлены из натуральных продуктов без добавления сахара - с
                        заботой о вас и ваших близких!
                        <br/><br/>

                        Стоимость доставки 60 грн по предварительному заказу (за 1 сутки).
                        Предварительный заказ предполагает доставку на следующий день с
                        6:00-10:00. Минимальный заказ - от 6 конфет. Вес 1 кофетки 25 г.
                        <br/><br/>
                        Заказы на завтрa принимаются до 11-00 текущего дня.
                        <br/><br/>

                        Конфеты доставляются в прозрачных пакетах со стикером. Вы можете
                        заказать подарочный бокс с лентой стоимостью 20 грн
                    </p>
                </div>
  </div>
  )
}
