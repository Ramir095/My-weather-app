import React from "react";
import Card from "../Card";
import styles from './Cards.module.css'

const Cards = ({ data }) => {
  return (
    <div className={styles.cards}>
      {data &&
        data.map((c) => (
          <Card
           key={c.id}
           name={c.name}
           max={c.main.temp_max}
           min={c.main.temp_min}
           img={c.weather[0].icon}
           />
        ))}
    </div>
  );
};

export default Cards;