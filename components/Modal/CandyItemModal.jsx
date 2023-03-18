import styles from "./modalCandy.module.scss";
import CountCandyModal from "./CountCandyModal";

export default function CandyItemModal({ candyItem, increase, decrease }) {
  const { count } = candyItem;

  return (
    // [count > 0 ? styles.modal__item : styles.modal__item_active ]
    <div className={styles.modal__item}>
      <h1 className={styles.modal__item_title}>{candyItem.title}</h1>
      <div className={styles.modal__item_footer}>
        <CountCandyModal
          count={candyItem.count}
          increase={increase}
          id={candyItem.id}
          priceTotal={candyItem.priceTotal}
          decrease={decrease}
        />
      </div>
    </div>
  );
}
