import React, { useState, useEffect } from 'react';
import Program from '../Program/Program';
import styles from './favorites.module.scss';
import FavoriteProgram from './FavoriteProgram';
import axios from 'axios';
import { getAuthQuery } from '../../data/queries';

const Favorites = () => {
    const [programs, setPrograms] = useState([]);
  
    useEffect(() => {
      getAuthQuery('/mealplan').then(res => {
        setPrograms(res.data);
      }).catch(err => {
        console.error('Ошибка при загрузке программ:', error);
      })
    }, [setPrograms]);

    function unlike(program) {
      program.isFavorite = false;
      setPrograms([...programs])
    }
  
    const favoritePrograms = programs.filter(p => p.isFavorite);
    
    return (
      <div className={styles.favorites}>
        <h2>Избранные товары</h2>
        {favoritePrograms.length > 0 ? (
          <div className={styles.favorites__programs}>
            {favoritePrograms.map((program) => (
              <FavoriteProgram
                key={program.id}
                program={program}
                onUnlike={() => unlike(program)}
              />
            ))}
          </div>
        ) : (
          <p>Понравившихся товаров нет.</p>
        )}
      </div>
    );
  };
        
export default Favorites;