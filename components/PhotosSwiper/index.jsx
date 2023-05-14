import React from "react";
import Image from "next/image";
import Slider from "react-slick";
import { photos } from "../../data/Gallery";
import styles from "./styles.module.scss";

// Import slick styles
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export default function PhotosSwiper() {
  const settings = {
    dots: false,
    infinite: true,
    centerMode: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1530,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 940,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      }
    ]
  };

  return (
    <div className={styles.photos}>
      <Slider {...settings}>
        {photos.map((item) => (
          <div key={item.id} className={styles.photo}>
            <Image className={styles.photo__img} src={`/images/${item.image}`} width="380" height="570" />
          </div>
        ))}
      </Slider>
    </div>
  );
}
