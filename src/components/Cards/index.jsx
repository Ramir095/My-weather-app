import React from "react";
import Card from "../Card";
import styles from './Cards.module.css'

const Cards = ({ cities, handleDelete }) => {
  return (
    <div className={styles.cards}>
      {cities &&
        cities.map((c) => (
          <Card
           key={c.id}
           name={c.name}
           max={c.max}
           min={c.min - 6}
           img={c.img}
           handleDelete={() => handleDelete(c.id)}
           />
        ))}
    </div>
  );
};

export default Cards;