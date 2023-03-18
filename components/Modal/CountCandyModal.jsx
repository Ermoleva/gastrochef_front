import styles from "./countCandy.module.scss";

const CountCandyModal = ({count, increase, id, priceTotal, decrease}) => {

    return (
        <div className={styles.candy}>
            <div className={styles.candy__counter}>
            <div className={styles.candy__incr} onClick={() => {decrease(id)}}>
                <p>-</p>
            </div>
            <p className={styles.candy__count_num} >{count}</p>
            <div className={styles.candy__decr} onClick={() => {increase(id)}}>
                <p>+</p>
            </div>
            </div>
            <div className={styles.candy__price}>{priceTotal} грн</div>
        </div>
    )
}
export default CountCandyModal;