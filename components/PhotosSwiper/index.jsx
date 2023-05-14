import React from "react";
import Image from "next/image";
import Slider from "react-slick";
import styles from "./styles.module.scss";

// Import slick styles
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import ServerImage from "../Images/ServerImage";

export default function PhotosSwiper({photos}) {
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
        {photos.map((photo) => (
          <div key={photo} className={styles.photo}>
            <ServerImage src={photo} type='gallery'
            className={styles.photo__img}
            width="380" height="570"/>
          </div>
        ))}
      </Slider>
    </div>
  );
}
