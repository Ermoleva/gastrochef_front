import React, { useState, useEffect } from 'react';
import Program from '../Program/Program';
import styles from './favorites.module.scss';
import FavoriteProgram from './FavoriteProgram';
import axios from 'axios';
import { getAuthQuery } from '../../data/queries';
import FavoriteCandy from './FavoriteCandy';
import FavoriteLunch from './FavoriteLunch';

const Favorites = () => {
    const [programs, setPrograms] = useState([]);
    const [candies, setCandies] = useState([]);
    const [lunches, setLunches] = useState([]);
  
    useEffect(() => {
      getAuthQuery('/mealplan').then(res => {
        setPrograms(res.data);
      }).catch(err => {
        console.error('Ошибка при загрузке программ:', err);
      })
      getAuthQuery('/candies').then(res => {
        setCandies(res.data);
      }).catch(err => {
        console.error('Ошибка при загрузке программ:', err);
      })
      getAuthQuery('/businesslunch').then(res => {
        setCandies(res.data);
      }).catch(err => {
        console.error('Ошибка при загрузке программ:', err);
      })
    }, [setPrograms,setCandies,setLunches]);

    function unlike(program) {
      program.isFavorite = false;
      setPrograms([...programs])
    }
    function unlikeCandy(candyItem) {
      candyItem.isFavorite = false;
      setCandies([...candies])
    }
    function unlikeLunch(lunchItem) {
      lunchItem.isFavorite = false;
      setLunches([...lunches])
    }
  
    const favoritePrograms = programs.filter(p => p.isFavorite);
    const favoriteCandies = candies.filter(p => p.isFavorite);
    const favoriteLunches = lunches.filter(p => p.isFavorite);
    
    return (
      <div className={styles.favorites}>
        <h2>улюблені товари</h2>
        {((favoritePrograms.length + favoriteCandies.length + favoriteLunches.length) > 0) ? (
          <div className={styles.favorites__programs}>
            {favoritePrograms.map((program) => (
              <FavoriteProgram
                key={program.id}
                program={program}
                onUnlike={() => unlike(program)}
              />
            ))}
            {favoriteCandies.map((candyItem) => (
              <FavoriteCandy
                key={candyItem.id}
                candyItem={candyItem}
                onUnlikeCandy={() => unlikeCandy(candyItem)}
              />
            ))}
            {favoriteLunches.map((lunchItem) => (
              <FavoriteLunch
                key={lunchItem.id}
                lunchItem={lunchItem}
                onUnlikeLunch={() => unlikeLunch(lunchItem)}
              />
            ))}
          </div>
        ) : (
          <p>Сподобаних товарів немає.</p>
        )}
      </div>
    );
  };
        
export default Favorites;