import React from "react";
import Card from "../Card";
import styles from './Cards.module.css'

const Cards = ({ cities }) => {
  return (
    <div className={styles.cards}>
      {cities &&
        cities.map((c) => (
          <Card
           key={c.id}
           name={c.name}
           max={c.max}
           min={c.min}
           img={c.img}
           />
        ))}
    </div>
  );
};

export default Cards;