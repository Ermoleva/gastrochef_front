import React, { useState, useEffect } from 'react';
import Program from '../Program/Program';
import styles from './favorites.module.scss';
import FavoriteProgram from './FavoriteProgram';
import axios from 'axios';

const Favorites = () => {
    const [programs, setPrograms] = useState([]);
  
    useEffect(() => {
      const fetchPrograms = async () => {
        try {
          const response = await axios.get('http://localhost:5000/programs');
          setPrograms(response.data);
        } catch (error) {
          console.error('Ошибка при загрузке программ:', error);
        }
      };
  
      fetchPrograms();
    }, []);
  
    const favoritePrograms = programs.filter((program) => program.isFavorite);
  
    const handleFavoriteToggle = async (id) => {
        try {
          const response = await axios.patch(`http://localhost:5000/programs/${id}`, {
            isFavorite: !programs.find(program => program.id === id).isFavorite,
          });
      
          if (response.status === 200) {
            setPrograms(
              programs.map(
                program =>
                  program.id === id ? { ...program, isFavorite: !program.isFavorite } : program
              )
            );
          }
        } catch (error) {
          console.error('Ошибка при изменении isFavorite:', error);
        }
      };
      
        
          return (
            <div className={styles.favorites}>
              <h2>Избранные товары</h2>
              {favoritePrograms.length > 0 ? (
                <div className={styles.favorites__programs}>
                  {favoritePrograms.map((program) => (
                    <FavoriteProgram
                      key={program.id}
                      program={program}
                      onFavoriteToggle={handleFavoriteToggle}
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