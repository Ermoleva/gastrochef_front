import React from 'react';
import styles from './favorites.module.scss';
import { useRouter } from 'next/router';
import axios from 'axios';

const FavoriteProgram = ({ program, onFavoriteToggle }) => {
  const { name, calories, description } = program;
  const router = useRouter();

  const toggleFavorite = async () => {
    try {
      const newIsFavorite = !program.isFavorite;
      const response = await axios.patch(`http://localhost:5000/programs/${program.id}`, {
        isFavorite: newIsFavorite,
      });

      if (response.status === 200) {
        onFavoriteToggle(program.id);
      }
    } catch (error) {
      console.error('Ошибка при изменении isFavorite:', error);
    }
  };

  return (
    <div className={styles.favoriteProgram}>
      <div className={styles.favoriteProgram__text}>
        <h2
          className={styles.favoriteProgram__title}
          onClick={() => router.push('/')}
        >{`${name} ${calories} ккал`}</h2>
        <p className={styles.favoriteProgram__info}>{description}</p>
      </div>

      <button onClick={toggleFavorite} className={styles.favoriteProgram__likeButton}>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill={program.isFavorite ? '#64D370' : 'none'}
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

export default FavoriteProgram;
