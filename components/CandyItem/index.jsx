import styles from "../../styles/shopItem.module.scss"
import Image from "next/image";
import CountCandy from "./CountCandy";
import img from "../../public/images/product-img.png"

export default function CandyItem({candyItem, increase, decrease}) {
    // eslint-disable-next-line react-hooks/rules-of-hooks

    const {title, description, proteins, fats, carbohydrates, kcal, count, id, price, priceTotal, image} = candyItem;

    return(
        <div className={styles.product__item}>

            <Image src={`/images/${image}`} width="580" height="280"
                   alt="candy" className={styles.product__img}/>
            <h2 className={styles.product__title}>{title}</h2>
            <p className={styles.product__item_info}>
                {description}
            </p>
            <div className={styles.product__item_wrapp}>
                <p className={styles.product__item_cont}> Белки - {proteins} </p>
                <p className={styles.product__item_cont}>Жиры - {fats}</p>
                <p className={styles.product__item_cont}>Углеводы - {carbohydrates}</p>
                <p className={styles.product__item_cont}>{kcal} ккал</p>
            </div>
            <div className={styles.product__count}>
                <CountCandy {...{count , increase, id, price, priceTotal, decrease}}/>
            </div>
        </div>
    )
}