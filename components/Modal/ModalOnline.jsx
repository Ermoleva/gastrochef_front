import styles from "./modalOnline.module.scss";
import Image from "next/image";
import close from "../../public/images/closeModal.svg";
import { useState } from "react";
import Select from "react-select";
import queries from '../../data/queries';
import Swal from 'sweetalert2';

export default function ModalOnline({ active, setActive, cart }) {
  // const { count, price } = total;
  let count = 0;
  let price = 0;
  cart.forEach(item => {
    count += item.count;
    price += item.price * item.count;
  })
  const time = [
    {
      value: "13:00",
      label: "13:00",
    },
    {
      value: "14:30",
      label: "14:30",
    },
    {
      value: "15:45",
      label: "15:45",
    },
    {
      value: "17:00",
      label: "17:00",
    },
  ];

  const [timeDelivery, setTimeDelivery] = useState("");

  const getValueTime = () => {
    return timeDelivery ? time.find((c) => c.value === timeDelivery) : "";
  };

  // const onChange = (newValue:any) => {
  //     setTimeDelivery(newValue.value)
  // }

  const pay = [
    {
      value: "visa",
      label: "visa",
    },
    {
      value: "Наложный платеж",
      label: "Наложный платеж",
    },
    {
      value: "Privat24",
      label: "Privat24",
    },
  ];
  const [payDelivery, setPayDelivery] = useState("");

  const getValuePay = () => {
    return payDelivery ? pay.find((c) => c.value === payDelivery) : "";
  };

  const know = [
    {
      value: "instagram",
      label: "instagram",
    },
    {
      value: "Google реклама",
      label: "Google реклама",
    },
    {
      value: "От знакомых",
      label: "От знакомых",
    },
  ];
  const [whereKnow, setWhereKnow] = useState("");
  const getValueKnow = () => {
    return whereKnow ? know.find((c) => c.value === whereKnow) : "";
  };

  const connect = [
    {
      value: "Звонок для подтверждения заказа",
      label: "Звонок для подтверждения заказа",
    },
    {
      value: "СМС для подтверждения заказа",
      label: "СМС для подтверждения заказа",
    },
    {
      value: "Не подтверждать заказ",
      label: "Не подтверждать заказ",
    },
  ];
  const [connectUs, setConnectUs] = useState("");
  const getValueConnect = () => {
    return connectUs ? connect.find((c) => c.value === connectUs) : "";
  };


  const customStyles = {
    option: (provided, state) => ({
      ...provided,
      
      outLine: "none",
      backgroundColor: state.isSelected ? "#64D370" : "white",
      color: state.isSelected ? "white" : "black",
      "&:hover": {
        backgroundColor: "#64D370",
        color: "white",
      },
    }),
    input: (provided) => ({
        ...provided,
        borderRadius: "190px",
      }),
    menu: (provided, state) => ({
      ...provided,
      backgroundColor: "white",
    }),
    control: (provided) => ({
        ...provided,
        boxShadow: "none !important",
        borderRadius: "190px",
        borderColor: "green !important",
        "&:hover": {
          borderColor: "green !important",
        },
        "&:focus": {
          borderColor: "green !important",
        },
      }),
  };

  async function doOrder() {
    function value(id) {
      return document.querySelector('#modal-online #'+id)?.value;
    }
    const body = {
      name: value("name"),
      phone: value('phone'),
      cart,
      total: count + " шт / " + price + " грн",

      street: value('street'),
      house: value('house'),
      floor: value('floor'),

      flat: value('flat'),
      frontDoor: value('front-door'),
      intercom: value('intercom'),

      deliveryTime: timeDelivery,
      paymentMethod: payDelivery,
      whereKnow: whereKnow,
      contactInfo: connectUs,
    }
    // alert(JSON.stringify(body, undefined, 4))
    await queries.post('/order/create', body)
    // setActive(false)
    Swal.fire('Успіх', "Замовлення було оформлено. З вами скоро зв'яжуться!", 'success')
  }

  return (
    <div
      id='modal-online'
      className={[active ? styles.modal__active : styles.modal]}
      onClick={() => setActive(false)}
    >
      <div
        className={styles.modal__content}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={styles.modal__close}>
          <h2
            className={styles.modal__mistake}
            onClick={() => setActive(false)}
          >
            Заполните все поля правильно
          </h2>
          <Image
            onClick={() => setActive(false)}
            src={close}
            alt="close"
            layout={"row"}
            className={styles.modal__close_img}
          />
        </div>
        <div className={styles.modal__wrapp}>
          <div className={styles.modal__wrapp_left}>
            <input
              className={styles.modal__input}
              required
              placeholder="имя"
              name="name"
              type="text"
              id="name"
            />
            <input
              className={styles.modal__input}
              required
              placeholder="Введите номер телефона"
              name="tel"
              type="text"
              id="phone"
            />
            <div className={styles.modal__wrapp_adrress}>
              <input
                className={styles.modal__input}
                required
                placeholder="Улица"
                name="name"
                type="text"
                id="street"
              />
              <input
                className={styles.modal__input}
                required
                placeholder="Дом:"
                name="name"
                type="text"
                id="house"
              />
              <input
                className={styles.modal__input}
                required
                placeholder="Этаж:"
                name="name"
                type="text"
                id="floor"
              />
              <input
                className={styles.modal__input}
                required
                placeholder="Квартира: "
                name="name"
                type="text"
                id="flat"
              />
              <input
                className={styles.modal__input}
                required
                placeholder="Парадное:"
                name="name"
                type="text"
                id="front-door"
              />
              <input
                className={styles.modal__input}
                required
                placeholder="Домофон: "
                name="name"
                type="text"
                id="intercom"
              />
            </div>
          </div>
          <div className={styles.modal__wrapp_right}>
            <Select
              classNamePrefix="modal__select"
              // onChange={onChange}
              onChange={(n) => setTimeDelivery(n.value)}
              // value={getValueTime()}
              options={time}
              placeholder="Время доставки"
              styles={customStyles}
            />
            <Select
              classNamePrefix="modal__select"
              onChange={(n) => setPayDelivery(n.value)}
              // value={getValuePay()}
              options={pay}
              placeholder="Способ оплаты"
              styles={customStyles}
            />
            <Select
              classNamePrefix="modal__select"
              onChange={(n) => setWhereKnow(n.value)}
              // value={getValueKnow()}
              options={know}
              placeholder="Откуда узнали о нас"
              styles={customStyles}
            />
            <Select
              classNamePrefix="modal__select"
              onChange={(n) => setConnectUs(n.value)}
              // value={getValueConnect()}
              options={connect}
              placeholder="Как с Вами связаться?"
              styles={customStyles}
            />
          </div>
        </div>
        <div className={styles.modal__order}>
          <div className={styles.modal__btn} onClick={doOrder}>
            Заказать
          </div>
          <div className={styles.modal__total}>
            {count} шт / {price} грн
          </div>
        </div>
      </div>
    </div>
  );
}
