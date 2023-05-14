import React, { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import styles from './styles.module.scss';
import queries, { postAuthQuery } from '../../data/queries';
import Swal from 'sweetalert2';
import { useRouter } from 'next/router';


const weekDays = {
  "monday": ["Понеділок", "ПН"],
  "tuesday": ["Вівторок", "ВТ"],
  "wednesday": ["Середа", "СР"],
  "thursday": ["Четвер", "ЧТ"],
  "friday": ["П'ятниця", "ПТ"],
  "saturday": ["Субота", "СБ"],
  "sunday": ["Неділя", "НД"],
}
const mealTypes = {
  "breakfast": ["Завтрак", "7:00 - 9:00"],
  "second_bf": ["Второй завтрак", "10:00 - 11:00"],
  "lunch": ["Обед", "13:00 - 15:00"],
  "afternoon": ["Полдник", "16:00 - 17:00"],
  "dinner": ["Ужин", "19:00 - 20:00"],
}

function localeDayOfWeek(dayOfWeek) {
  return weekDays[dayOfWeek] ? weekDays[dayOfWeek][0] : dayOfWeek;
}
function shortDayOfWeek(dayOfWeek) {
  return weekDays[dayOfWeek] ? weekDays[dayOfWeek][1] : dayOfWeek;
}
function localeMeals(meals) {
  return mealTypes[meals] ? mealTypes[meals][0] : meals;
}
function mealsTime(meals) {
  return mealTypes[meals] ? mealTypes[meals][1] : meals;
}

const Program = ({ program }) => {
  const { name, calories, description, plans } = program;
  const [isFavorite, setIsFavorite] = useState(program.isFavorite || false);
  const router = useRouter();

  const handleLikeButtonClick = () => {
    setIsFavorite(!isFavorite);
  };


  const toggleFavorite = async () => {
    const fav = !isFavorite;
    try {
      setIsFavorite(fav);
      await postAuthQuery('/mealplan/favorite', {
        id: program.id, like: fav
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
  
  

  return (
    <div className={styles.program}>
      <div className={styles.program__text}>
        <div className={styles.program__title_wrap}>
        <h2 className={styles.program__title}>{name} {calories ? `${calories} ккал` : ''}</h2>
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
        
        <p className={styles.program__info}>{description}</p>
      </div>

      

      <Tabs>
        <TabList>
          {Object.keys(plans).map((dayOfWeek) => (
            <Tab key={dayOfWeek}>{shortDayOfWeek(dayOfWeek)}</Tab>
          ))}
        </TabList>

        {Object.entries(plans).map(([dayOfWeek, meals]) => (
          <TabPanel key={dayOfWeek}>
            {Object.entries(meals).map(([type, {text, kcal, gram}]) => (
              <div className={styles.program__menu_wrap} key={type}>
                <div className={styles.program__name}>
                  <h4 className={styles.program__name_title}>{localeMeals(type)}</h4>
                  <p className={styles.program__time}>{mealsTime(type)}</p>
                </div>
                {/* {meal.items.map((item, itemIndex) => ( */}
                  <div className={styles.program__menu}>
                    <p className={styles.program__menu_name}>- {text}</p>
                    { gram && (<p className={styles.program__menu_time}>{gram} гр.</p>) }
                  </div>
                {/* ))} */}
              </div>
            ))}
          </TabPanel>
        ))}
      </Tabs>
    </div>
  );
};

export default Program;
