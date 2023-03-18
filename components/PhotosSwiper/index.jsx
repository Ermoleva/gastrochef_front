import React, { useRef, useState } from "react";
import Image from 'next/image';

import photo1 from "../../public/images/photo1.png"
import photo2 from "../../public/images/photo2.png"
import photo3 from "../../public/images/photo3.png"
import photo4 from "../../public/images/photo4.png"
import photo5 from "../../public/images/photo5.png"
import photo6 from "../../public/images/photo6.png"
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./styles.module.scss"

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";


// import required modules
import { Pagination } from "swiper";

export default function PhotosSwiper() {
  return (
    <div className={styles.photos}>
       <Swiper
        slidesPerView={6}
        spaceBetween={10}
        loop={true}
        centeredSlides={true}
        modules={[Pagination]}
        className="photosSwiper"
      >
        <SwiperSlide className={styles.photo}>
            <Image src={photo1} layout={"raw"} />
        </SwiperSlide>
        <SwiperSlide className={styles.photo}>
            <Image src={photo2} layout={"raw"} />
        </SwiperSlide>
        <SwiperSlide className={styles.photo}>
            <Image src={photo3} layout={"raw"} />
        </SwiperSlide>
        <SwiperSlide className={styles.photo}>
            <Image src={photo4} layout={"raw"} />
        </SwiperSlide>
        <SwiperSlide className={styles.photo}>
            <Image src={photo5} layout={"raw"} />
        </SwiperSlide>
        <SwiperSlide className={styles.photo}>
            <Image src={photo6} layout={"raw"} />
        </SwiperSlide>
        <SwiperSlide className={styles.photo}>
            <Image src={photo3} layout={"raw"} />
        </SwiperSlide>
        <SwiperSlide className={styles.photo}>
            <Image src={photo4} layout={"raw"} />
        </SwiperSlide>
      </Swiper>
    </div>
  )
}
