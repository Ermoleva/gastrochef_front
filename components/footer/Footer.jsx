import { Link } from "@mui/material";
import Image from "next/image";
import React from "react";
import styles from "./styles.module.scss";
import logo from "../../public/images/logo_footer.svg";
import inst from "../../public/images/inst_icon.svg";
import facebook from "../../public/images/facebook_icon.svg";
import viber from "../../public/images/viber_icon.svg";
import telegram from "../../public/images/telegram_icon.svg";

export default function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.footer__container}>
        <div className={styles.footer__links}>
          <Link href="/" className={styles.footer__link}>
            Программа питания
          </Link>
          <Link href="/lunch" className={styles.footer__link}>
            Бизнес ланчи
          </Link>
          <Link href="/shop" className={styles.footer__link}>
            Gastro Shop
          </Link>
          <Link href="/about" className={styles.footer__link}>
            О нас
          </Link>
          <Link href="/blog" className={styles.footer__link}>
            Блог
          </Link>
        </div>
        <div className={styles.footer__logo}>
          <Image
            className={styles.footer__logo_img}
            src={logo}
            layout={"raw"}
          />
          <p className={styles.footer__logo_text}>сервис здорового питания</p>
        </div>
        <div className={styles.footer__social}>
          <a
            href="src/components/section/footer#"
            className={styles.footer__social_link}
          >
            Условия <br />
            сотрудничества
          </a>
          <a
            href="src/components/section/footer#"
            className={styles.footer__social_link}
          >
            FAQ
          </a>
          <div className={styles.footer__social_items}>
            <div className={styles.footer__social_item}>
              <a
                href="src/components/section/footer#"
                className={styles.footer__social_img_link}
              >
                <Image
                  src={inst}
                  alt="logo"
                  layout={"raw"}
                  className={styles.footer__social_img}
                />
              </a>
            </div>
            <div className={styles.footer__social_item}>
              <a
                href="src/components/section/footer#"
                className={styles.footer__social_img_link}
              >
                <Image
                  src={facebook}
                  alt="logo"
                  layout={"raw"}
                  className={styles.footer__social_img}
                />
              </a>
            </div>
            <div className={styles.footer__social_item}>
              <a
                href="src/components/section/footer#"
                className={styles.footer__social_img_link}
              >
                <Image
                  src={viber}
                  alt="logo"
                  layout={"raw"}
                  className={styles.footer__social_img}
                />
              </a>
            </div>
            <div className={styles.footer__social_item}>
              <a
                href="src/components/section/footer#"
                className={styles.footer__social_img_link}
              >
                <Image
                  src={telegram}
                  alt="logo"
                  layout={"raw"}
                  className={styles.footer__social_img}
                />
              </a>
            </div>
          </div>
          <div className={styles.footer__number}>
            <a href="tel:+380689494919" className={styles.footer__number_link}>
              +38 (068) 949 - 49 - 19
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
