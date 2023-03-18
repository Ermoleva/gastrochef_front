import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/shop.module.scss";
import first from "../public/images/shop-candy.png"
import second from "../public/images/shop-granols.png"

export default function shop() {
  return (
    <div className={styles.shop}>
      <div className={styles.container}>
        <div className={styles.shop__items}>
          <div className={styles.shop__item}>
            <Link href="/candies" legacyBehavior>
              <a>
                <Image
                  src={first}
                  alt="logo"
                  layout={"raw"}
                  className={styles.shop__img}
                />
              </a>
            </Link>
            <div className={styles.shop__name}>
              <h2 className={styles.shop__title}>Полезные конфеты</h2>
              <Link href="/candies" legacyBehavior>
                <a className={styles.shop__more_link}>
                  <button className={styles.shop__more_btn}>Ассортимент</button>
                </a>
              </Link>
            </div>
          </div>
          <div className={styles.shop__item_soon}>
            <Link href="/shopItem" legacyBehavior>
              <a>
                <Image
                  src={second}
                  alt="logo"
                  layout={"raw"}
                  className={styles.shop__img}
                />
              </a>
            </Link>
            <div className={styles.shop__name}>
              <h2 className={styles.shop__title}>Гранола</h2>
              <Link href="/shopItem" legacyBehavior>
                <a className={styles.shop__more_link_soon}>
                  <button className={styles.shop__more_btn}>Ассортимент</button>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
