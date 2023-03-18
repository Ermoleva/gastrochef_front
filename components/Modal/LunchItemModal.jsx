import styles from "./modalCandy.module.scss"
import CountCandyModal from "./CountCandyModal";

export default function LunchItemModal({lunchItem, increase, decrease}){

    const {count} = lunchItem;

    return(
        // [count > 0 ? styles.modal__item : styles.modal__item_active ]
        <div className={styles.modal__item}>
            <h1 className={styles.modal__item_title}>{lunchItem.title}</h1>
            <div className={styles.modal__item_footer}>
                <CountCandyModal count={lunchItem.count} increase={increase} id={lunchItem.id} priceTotal={lunchItem.priceTotal} decrease={decrease}/>
            </div>
        </div>
    )
}