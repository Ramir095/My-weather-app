import React from "react";
import Card from "../Card";

const Cards = ({ data }) => {
  return (
    <div>
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