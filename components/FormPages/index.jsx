import React, { useState } from "react";
import styles from "./styles.module.scss";
import checkboxicon from "../../public/images/checkbox_icon.svg";

export default function Form() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [nameError, setNameError] = useState(false);
  const [phoneError, setPhoneError] = useState(false);

  const validateName = (name) => {
    if (name.length < 2 || name.length > 20) {
      setNameError("Имя должно быть длиннее 2 букв и короче 20.");
    } else {
      setNameError("");
    }
  };

  const validatePhone = (phone) => {
    const phoneRegex =
      /^[\+]?3?[\s]?8?[\s]?\(?0\d{2}?\)?[\s]?\d{3}[\s|-]?\d{2}[\s|-]?\d{2}$/;
    if (phoneRegex.test(phone)) {
      setPhoneError("");
    } else {
      setPhoneError("Номер телефона должен начинаться с +380 и иметь 12 цифр");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!nameError && !phoneError) {
      // Submit form data
    } else {
    }
  };

  const [value1, setValue1] = useState(true);
  const [value2, setValue2] = useState(false);

  function changeHandler1() {
    setValue1(!value1);
  }
  function changeHandler2() {
    setValue2(!value2);
  }
  return (
    <div className={styles.form}>
      <h2 className={styles.form__title}>Оформити замовлення</h2>
      <p className={styles.form__subtitle}>
      Обговоріть усі деталі замовлення за телефоном або самі вкажіть усі подробиці
        онлайн
      </p>
      <form onSubmit={handleSubmit}>
        <label className={styles.input_wrapper}>
          <p className={styles.form__input_name}>Імя </p>
          <input
            className={styles.form__input}
            type="text"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
              validateName(e.target.value);
            }}
            // className={nameError ? "error" : "valid"}
          />
          {nameError && (
            <span className={styles.error_message}>{nameError}</span>
          )}
          {nameError === "" && <span className={styles.valid_indicator} />}
        </label>
        <label className={styles.input_wrapper}>
          <p className={styles.form__input_name}> Номер телефону</p>
          <input
            className={styles.form__input}
            type="tel"
            value={phone}
            onChange={(e) => {
              setPhone(e.target.value);
              validatePhone(e.target.value);
            }}
            // className={phoneError ? "error" : "valid"}
          />
          {phoneError && (
            <span className={styles.error_message}>{phoneError}</span>
          )}
          {phoneError === "" && <span className={styles.valid_indicator} />}
        </label>
        <div className={styles.back}>
          <div className={styles.back__form}>
            <div className={styles.back__form_checkbox_wrapp}>
              <label className={styles.back__form_checkbox}>
                <input type="checkbox" name="radio" />
                <p>Тест-день! Отримати знижку –30%?</p>
                <span className={styles.checkmark}> </span>
              </label>
            </div>
            <div className={styles.back__form_checkbox_wrapp}>
              <label className={styles.back__form_checkbox}>
                <input type="checkbox" name="radio" />
                <p>Згоден з умовами співробітництва</p>
                <span className={styles.checkmark}></span>
              </label>
            </div>
          </div>
        </div>

        <div className={styles.form__buttons}>
          <button className={styles.form__btn_phone} type="submit">Замовлення по телефону</button>
          <p className={styles.form__btn_or}>ИЛИ</p>
          <button className={styles.form__btn_online} type="submit">Онлайн замовлення</button>
        </div>
      </form>
    </div>
  );
}
