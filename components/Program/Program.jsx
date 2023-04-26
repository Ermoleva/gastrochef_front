import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import styles from './styles.module.scss'

const Program = ({ program }) => {
  const { name, calories, description, days } = program;

  return (
    <div className={styles.program}>
        <div className={styles.program__text}>
      <h2 className={styles.program__title}>{`${name} ${calories} ккал`}</h2>
      <p className={styles.program__info}>{description}</p>
      </div>
      
      <Tabs>
        <TabList >
          {days.map((day) => (
            <Tab key={day.day}>{day.day_name}</Tab>
          ))}
        </TabList>

        {days.map((day) => (
          <TabPanel key={day.day}>
            {day.meals.map((meal, mealIndex) => (
              <div key={mealIndex}>
                <h4>{`${meal.name} (${meal.time})`}</h4>
                {meal.items.map((item, itemIndex) => (
                  <p key={itemIndex}>{`${item.menu} ${item.weight}`}</p>
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
