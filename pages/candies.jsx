import React from "react";
import PhotosSwiper from "../components/PhotosSwiper";
import Image from "next/image";
import styles from "../styles/shopItem.module.scss";
import backArrow from "../public/images/article_back_arrow.svg";
import CandyInfo from "../components/CandyItem/CandyInfo";
import CandyItem from "../components/CandyItem";
import { useState, useEffect } from "react";

import CandyItemModal from "../components/Modal/CandyItemModal";
import Modal from "../components/Modal/ModalCandy";
import ModalNumber from "../components/Modal/ModalNumber";
import ModalOnline from "../components/Modal/ModalOnline";
import queries from "../data/queries";

export default function candies(props) {
  const initCardData = [...props.candies];
  initCardData.forEach(c => {
    c.count = 0;
    c.priceTotal = c.price;
  })
  const [cart, setCart] = useState(initCardData);
  const [modalCandyActive, setModalCandyActive] = useState(false);
  const [numberActive, setNumberActive] = useState(false);
  const [onlineActive, setOnlineActive] = useState(false);
  const [total, setTotal] = useState({
    price: cart.reduce((prev, curr) => {
      return prev + curr.priceTotal;
    }, 0),
    count: cart.reduce((prev, curr) => {
      return prev + curr.count;
    }, 0),
  });

  useEffect(() => {
    setTotal({
      price: cart.reduce((prev, curr) => {
        return prev + curr.priceTotal;
      }, 0),
      count: cart.reduce((prev, curr) => {
        return prev + curr.count;
      }, 0),
    });
  }, [cart]);
  const increase = (id) => {
    setCart(() => {
      return cart.map((candyItem) => {
        if (candyItem.id === id) {
          return {
            ...candyItem,
            count: candyItem.count + 1,
            priceTotal: (candyItem.count + 1) * candyItem.price,
          };
        }
        return candyItem;
      });
    });
  };

  const decrease = (id) => {
    setCart(() => {
      return cart.map((candyItem) => {
        if (candyItem.id === id) {
          const newCount = candyItem.count - 1 >= 0 ? candyItem.count - 1 : 0;
          return {
            ...candyItem,
            count: newCount,
            priceTotal: newCount * candyItem.price,
          };
        }
        return candyItem;
      });
    });
  };
  const candies = cart.map((candyItem) => {
    // eslint-disable-next-line react/jsx-key
    return (
      <CandyItem
        key={candyItem.id}
        candyItem={candyItem}
        increase={increase}
        decrease={decrease}
      />
    );
  });
  const candiesModal = cart.map((candyItem) => {
    // eslint-disable-next-line react/jsx-key
    return (
      <CandyItemModal
        key={candyItem.id}
        candyItem={candyItem}
        total={total}
        increase={increase}
        decrease={decrease}
      />
    );
  });

  return (
    <div>
      <Modal
        active={modalCandyActive}
        setActive={setModalCandyActive}
        numberActive={numberActive}
        setNumberActive={setNumberActive}
        onlineActive={onlineActive}
        setOnlineActive={setOnlineActive}
        total={total}
        candiesModal={candiesModal}
        increase={increase}
        decrease={decrease}
      />
      <ModalNumber active={numberActive} setActive={setNumberActive} />
      <ModalOnline
        active={onlineActive}
        cart={cart}
        setActive={setOnlineActive}
      />
      <CandyInfo />
      <div className={styles.product__main}>
        <div className={styles.container}>
          <div className={styles.product__header}>
            {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
            <a href="/shop" className={styles.product__back}>
              <Image
                src={backArrow}
                alt="logo"
                layout={"raw"}
                className={styles.product__back_arrow}
              />
              <p>Назад</p>
            </a>
            <button
              className={styles.product__order}
              onClick={() => setModalCandyActive(true)}
            >
              Оформить заказ
            </button>
          </div>
          <div className={styles.product__items}>{candies}</div>
        </div>
      </div>
      <PhotosSwiper />
    </div>
  );
}

export async function getStaticProps() {
  const res = await queries.get('/candies');
  return {
    props: { 
      candies: res.data 
    },
  };
}