import React, { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import styles from './styles.module.scss';
import axios from 'axios';

const Program = ({ program }) => {
  const { name, calories, description, days } = program;
  const [isFavorite, setIsFavorite] = useState(program.isFavorite);

  const handleLikeButtonClick = () => {
    setIsFavorite(!isFavorite);
  };
  const toggleFavorite = async () => {
    try {
      const newIsFavorite = !isFavorite;
      const response = await axios.patch(`http://localhost:5000/programs/${program.id}`, {
        isFavorite: newIsFavorite,
      });
  
      if (response.status === 200) {
        setIsFavorite(newIsFavorite);
      }
    } catch (error) {
      console.error('Ошибка при изменении isFavorite:', error);
    }
  };
  
  

  return (
    <div className={styles.program}>
      <div className={styles.program__text}>
        <h2 className={styles.program__title}>{`${name} ${calories} ккал`}</h2>
        <p className={styles.program__info}>{description}</p>
      </div>

      <button onClick={toggleFavorite} className={styles.program__likeButton}>
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




      <Tabs>
        <TabList>
          {days.map((day) => (
            <Tab key={day.day}>{day.day_name}</Tab>
          ))}
        </TabList>

        {days.map((day) => (
          <TabPanel key={day.day}>
            {day.meals.map((meal, mealIndex) => (
              <div className={styles.program__menu_wrap} key={mealIndex}>
                <div className={styles.program__name}>
                  <h4 className={styles.program__name_title}>{meal.name}</h4>
                  <p className={styles.program__time}>{meal.time}</p>
                </div>
                {meal.items.map((item, itemIndex) => (
                  <div key={itemIndex} className={styles.program__menu}>
                    <p className={styles.program__menu_name}>- {item.menu}</p>
                    <p className={styles.program__menu_time}>{item.weight}</p>
                  </div>
                ))}
              </div>
            ))}
          </TabPanel>
        ))}
      </Tabs>
    </div>
  );
};

export default Program;
