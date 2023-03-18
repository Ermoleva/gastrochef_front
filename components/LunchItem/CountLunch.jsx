import styles from "../../styles/shopItem.module.scss";
import {React} from "react";


export default function CountLunch({id, priceTotal,count, increase,decrease, price}){
    return(
        <>
            <div className={styles.product__incr} onClick={() => {decrease(id)}}>
                <p>-</p>
            </div>
            <p className={styles.product__count_num}>{count}</p>
            <div className={styles.product__decr} onClick={() => {increase(id)}}>
                <p>+</p>
            </div>
            <div className={styles.product__price}>{count ? count : "1"} порция \</div>

            <div className={styles.product__date}>{priceTotal ? priceTotal : priceTotal=+price} грн</div>
        </>
    )
}
