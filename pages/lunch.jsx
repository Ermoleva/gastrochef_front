import React from "react";
import styles from "../styles/shopItem.module.scss";
import { useState, useEffect } from "react";

import Image from "next/image";
import PhotosSwiper from "../components/PhotosSwiper";
import LunchItem from "../components/LunchItem";
import LunchItemModal from "../components/Modal/LunchItemModal";
import Modal from "../components/Modal/ModalLunch";
import ModalNumber from "../components/Modal/ModalNumber";
import ModalOnline from "../components/Modal/ModalOnline";
import queries, { getServerAuthQuery, postQuery } from "../data/queries";

export default function Lunch(props) {
  const initCardData = [...props.businesslunch];
  initCardData.forEach(c => {
    c.count = 0;
    c.priceTotal = c.price;
  })
  const [cart, setCart] = useState(initCardData);
  const [modalLunchActive, setModalLunchActive] = useState(false);
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
      return cart.map((lunchItem) => {
        if (lunchItem.id === id) {
          return {
            ...lunchItem,
            count: lunchItem.count + 1,
            priceTotal: (lunchItem.count + 1) * lunchItem.price,
          };
        }
        return lunchItem;
      });
    });
  };

  const decrease = (id) => {
    setCart(() => {
      return cart.map((lunchItem) => {
        if (lunchItem.id === id) {
          const newCount = lunchItem.count - 1 >= 0 ? lunchItem.count - 1 : 0;
          return {
            ...lunchItem,
            count: newCount,
            priceTotal: newCount * lunchItem.price,
          };
        }
        return lunchItem;
      });
    });
  };

  const lunch = cart.map((lunchItem) => {
    // eslint-disable-next-line react/jsx-key
    return (
      <LunchItem
        key={lunchItem.id}
        lunchItem={lunchItem}
        increase={increase}
        decrease={decrease}
      />
    );
  });
  const lunchModal = cart.map((lunchItem) => {
    // eslint-disable-next-line react/jsx-key
    return (
      <LunchItemModal
        key={lunchItem.id}
        lunchItem={lunchItem}
        total={total}
        increase={increase}
        decrease={decrease}
      />
    );
  });

  return (
    <>
      <Modal
        active={modalLunchActive}
        setActive={setModalLunchActive}
        total={total}
        lunchModal={lunchModal}
        increase={increase}
        decrease={decrease}
        numberActive={numberActive}
        setNumberActive={setNumberActive}
        onlineActive={onlineActive}
        setOnlineActive={setOnlineActive}
      />
      <ModalNumber active={numberActive} setActive={setNumberActive} />
      <ModalOnline
        active={onlineActive}
        cart={cart}
        setActive={setOnlineActive}
      />
      <section className={styles.product__info}>
        <div className={styles.container}>
          <h2 className={styles.product__info_title}>Бизнес-ланчи</h2>
          <p className={styles.product__info_text}>
          Пропонуємо солодку колекцію корисних цукерок. Створені з любов&apos;ю та
            виготовлені з натуральних продуктів без додавання цукру - з
            турботою про вас і ваших близьких!
            <br />
            <br />
            Вартість доставки 60 грн за попереднім замовленням (за 1 добу).
            Попереднє замовлення передбачає доставку наступного дня з
            6:00–10:00. Мінімальне замовлення – від 6 цукерок. Вага 1 кави 25 г.
            <br />
            <br />
            Замовлення завтра приймаються до 11-00 поточного дня.
            <br />
            <br />
            Цукерки доставляються у прозорих пакетах зі стікером. Ви можете
            замовити подарунковий бокс зі стрічкою вартістю 20 грн
          </p>
        </div>
      </section>
      <section className={styles.product__main}>
        <div className={styles.container}>
          <div className={styles.product__header}>
            <button
              className={styles.product__order}
              onClick={() => setModalLunchActive(true)}
            >
              Оформити замовлення
            </button>
          </div>
          <div className={styles.product__items}>{lunch}</div>
        </div>
      </section>
      <PhotosSwiper photos={props.photos}/>
    </>
  );
}

export async function getServerSideProps({req,res}) {
  const bl = await getServerAuthQuery(req, '/businesslunch');
  const photos = await postQuery('/gallery/getall');
  return {
    props: { 
      businesslunch: bl.data,
      photos: photos.data
    },
  };
}