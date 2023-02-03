import React from "react";

const Card = ({name, max, min, img}) => {
  return (
    <div>
        <button>X</button>
      <p>{name}</p>
      <div>
        <div>
          <p>Min</p>
          <p>{min}</p>
        </div>
        <div>
          <p>Max</p>
          <p>{max}</p>
        </div>
        <img src={`http://openweathermap.org/img/wn/${img}@2x.png`} alt="" />
      </div>
    </div>
  );
};

export default Card;
