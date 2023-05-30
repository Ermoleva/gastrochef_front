import styles from "../../styles/shopItem.module.scss"
import Image from "next/image";
import CountLunch from "./CountLunch";
import ServerImage from "../Images/ServerImage";
import img from "../../public/images/lunch-img.png"
import { useRouter } from "next/router";
import { useState } from "react";
import { postAuthQuery } from "../../data/queries";


export default function LunchItem({lunchItem, increase, decrease}){

    const {id, description1, description2,description3, title, gram, kcal, priceTotal, count, price,image} = lunchItem
    const [isFavorite, setIsFavorite] = useState(lunchItem.isFavorite || false);
    const router = useRouter();

    const toggleFavorite = async () => {
        const fav = !isFavorite;
        try {
          setIsFavorite(fav);
          await postAuthQuery('/businesslunch/favorite', {
            id: lunchItem.id, like: fav
          });
          console.log("set favorite")
        } catch (error) {
          if ((Array.isArray(error) && error[1] == 401) || error?.response?.status == 401) {
            Swal.fire({
              title: "Ви не авторізовані",
              icon: "error",
              confirmButtonText: "Авторизуватись"
            }).then((res) => {
              if (res.isConfirmed) {
                router.push('/login')
              }
            });
          }
          setIsFavorite(!fav);
          console.error('Ошибка при изменении isFavorite:', error);
        }
      };
    return(

        <div className={styles.product__item}>
            {console.log(lunchItem.description1)}
            <ServerImage src={image} type="businesslunch/image"
                width="577" height="288" alt="product"
                className={styles.product__img}/>
            <div className={styles.product__lunch_wrapp}>
            <h2 className={styles.product__title}> Бізнес-ланч &quot;{title}&quot;</h2>
           
            <p className={styles.product__lunch_gramm}>
                {gram} г
            </p>
            <p className={styles.product__lunch_kcal}>
                {kcal} ккал
            </p>
            <button onClick={toggleFavorite} className={styles.program__likeButton}>
        <svg width="24" height="24"
          viewBox="0 0 24 24"
          fill={isFavorite ? '#64D370' : 'none'}
          stroke="#64D370"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
        </svg>
      </button>
            </div>
            <p className={styles.product__item_info}>
               1. {description1} 
            </p>
            <p className={styles.product__item_info}>
               2. {description2} 
            </p>
            <p className={styles.product__item_info}>
               3. {description3} 
            </p>
            <div className={styles.product__count}>
                <CountLunch id={id} price={price} priceTotal={priceTotal} count={count} increase={increase} decrease={decrease}/>
            </div>
        </div>
    )
}