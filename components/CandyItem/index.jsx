import styles from "../../styles/shopItem.module.scss"
import Image from "next/image";
import CountCandy from "./CountCandy";
import ServerImage from "../Images/ServerImage";
import { useRouter } from "next/router";
import { useState } from "react";
import { postAuthQuery } from "../../data/queries";

export default function CandyItem({candyItem, increase, decrease}) {
    // eslint-disable-next-line react-hooks/rules-of-hooks

    const {title, description, proteins, fats, carbohydrates, kcal, count, id, price, priceTotal, image} = candyItem;
    const [isFavorite, setIsFavorite] = useState(candyItem.isFavorite || false);
    const router = useRouter();

    const toggleFavorite = async () => {
        const fav = !isFavorite;
        try {
          setIsFavorite(fav);
          await postAuthQuery('/candies/favorite', {
            id: candyItem.id, like: fav
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
            {console.log(candyItem)}
            <ServerImage src={image} type="candies/image"
                width="580" height="280" alt="candy"
                className={styles.product__img}/>
            <h2 className={styles.product__title}>{title}</h2>
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
            <p className={styles.product__item_info}>
                {description}
            </p>
            <div className={styles.product__item_wrapp}>
                <p className={styles.product__item_cont}> Білки - {proteins} </p>
                <p className={styles.product__item_cont}>Жири - {fats}</p>
                <p className={styles.product__item_cont}>Вуглеводи - {carbohydrates}</p>
                <p className={styles.product__item_cont}>{kcal} ккал</p>
            </div>
            <div className={styles.product__count}>
                <CountCandy {...{count , increase, id, price, priceTotal, decrease}}/>
            </div>
        </div>
    )
}