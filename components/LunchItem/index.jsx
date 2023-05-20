import styles from "../../styles/shopItem.module.scss"
import Image from "next/image";
import CountLunch from "./CountLunch";
import ServerImage from "../Images/ServerImage";
import img from "../../public/images/lunch-img.png"


export default function LunchItem({lunchItem, increase, decrease}){

    const {id, description1, description2,description3, title, gram, kcal, priceTotal, count, price,image} = lunchItem

    return(

        <div className={styles.product__item}>
            <ServerImage src={image} type="businesslunch/image"
                width="577" height="288" alt="product"
                className={styles.product__img}/>
            <div className={styles.product__lunch_wrapp}>
            <h2 className={styles.product__title}> Бізнес-ланч &quot;{title}&quot;</h2>
            <p className={styles.product__lunch_gramm}>
                {gram} г
            </p>
            <p className={styles.product__lunch_kcal}>
                {kcal} ккал
            </p>
            </div>
            <p className={styles.product__item_info}>
               1. {description1} 
            </p>
            <p className={styles.product__item_info}>
               2. {description2} 
            </p>
            <p className={styles.product__item_info}>
               3. {description3} 
            </p>
            <div className={styles.product__count}>
                <CountLunch id={id} price={price} priceTotal={priceTotal} count={count} increase={increase} decrease={decrease}/>
            </div>
        </div>
    )
}