import styles from "../../styles/shopItem.module.scss"
import Image from "next/image";
import CountLunch from "./CountLunch";
import img from "../../public/images/lunch-img.png"


export default function LunchItem({lunchItem, increase, decrease}){

    const {id, description, title, gram, kcal, priceTotal, count, price} = lunchItem

    return(
        <div className={styles.product__item}>
            <Image src={img}
                   alt="product" layout={'raw'} className={styles.product__img}/>
            <div className={styles.product__lunch_wrapp}>
            <h2 className={styles.product__title}>{title}</h2>
            <p className={styles.product__lunch_gramm}>
                {gram} г
            </p>
            <p className={styles.product__lunch_kcal}>
                {kcal} ккал
            </p>
            </div>
            <p className={styles.product__item_info}>
               {description} 
            </p>
            <div className={styles.product__count}>
                <CountLunch id={id} price={price} priceTotal={priceTotal} count={count} increase={increase} decrease={decrease}/>
            </div>
        </div>
    )
}