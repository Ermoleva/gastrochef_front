import React, { useRef, useState } from "react";
import Image from "next/image";
import {photos} from "../../data/Gallery";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./styles.module.scss";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

export default function PhotosSwiper() {
  return (
    <div className={styles.photos}>
      <Swiper
        slidesPerView={5}
        spaceBetween={5}
        modules={[Pagination]}
        className="photosSwiper"
      >
        {photos.map((item) => (
          <SwiperSlide key={item.id} className={styles.photo}>
            <Image src={`/images/${item.image}`} width="380" height="570" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
