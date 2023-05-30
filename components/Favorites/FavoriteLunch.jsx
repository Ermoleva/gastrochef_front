import React, { useState } from 'react';
import styles from './favorites.module.scss';
import { useRouter } from 'next/router';
import axios from 'axios';
import { postAuthQuery } from '../../data/queries';

const FavoriteLunch = ({ lunchItem, onUnlikeLunch }) => {
  const { title, price, description1, description2,description3 } = lunchItem;
  const [isFavorite, setIsFavorite] = useState(lunchItem.isFavorite || false);
  const router = useRouter();

  
  const toggleFavorite = async () => {
    const fav = !isFavorite;
    try {
      if (!fav && onUnlikeLunch) onUnlikeLunch();
      setIsFavorite(fav);
      await postAuthQuery('/businesslunch/favorite', {
        id: lunchItem.id, like: fav
      });
      console.log("set favorite")
    } catch (error) {
      setIsFavorite(!fav);
      console.error('Ошибка при изменении isFavorite:', error);
    }
  };

  return (
    <div className={styles.favoriteProgram}>
        
      <div className={styles.favoriteProgram__text}>
        <h2
          className={styles.favoriteProgram__title}
          onClick={() => router.push('/')}
        >{title} {price} грн</h2>
        {console.log(lunchItem)}
        <p className={styles.favoriteProgram__info}>{description1}</p>
        <p className={styles.favoriteProgram__info}>{description2}</p>
        <p className={styles.favoriteProgram__info}>{description3}</p>
      </div>

      <button onClick={toggleFavorite} className={styles.favoriteProgram__likeButton}>
        <svg
          width="24"
          height="24"
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
  );
};

export default FavoriteLunch;
