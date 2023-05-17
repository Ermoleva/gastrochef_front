import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
import styles from "./styles.module.scss";
import { banners } from "../../data/Banners";
import Link from "next/link";
import SuperImage from "../Images/SuperImage";

export default function Slider() {
  return (
    <div className={styles.slider}>
      <div className={styles.slider__container}>
        <Swiper
          spaceBetween={30}
          loop={true}
          centeredSlides={true}
          autoplay={{
            delay: 1000500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="banner"
        >
          {banners.map((ban) => (
            // eslint-disable-next-line react/jsx-key
            <SwiperSlide className={styles.slider__item}>
              <div className={styles.slider__item_wrap}>
                <div className={styles.slider__item_text}>
                  <h1 className={styles.slider__item_title}>{ban.title}</h1>
                  <p className={styles.slider__item_subtitle}>{ban.subtitle}</p>
                  <div className={styles.slider__item_dop_info}>
                    <Link href="#" className={styles.slider__item_button}>
                      {ban.button}
                    </Link>
                    <p className={styles.slider__item_promo}>
                      {ban.actionText}
                    </p>
                  </div>
                </div>
                <SuperImage
                className={styles.slider__item_image}
                src={ban.image} width={794} height={794}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
