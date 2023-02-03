import styles from './Card.module.css'

const Card = ({ name, max, min, img }) => {
  return (
    <div className={styles.card}>
        {/* <button>X</button> */}
        <p>{name}</p>
        <img src={`http://openweathermap.org/img/wn/${img}@2x.png`} alt="" />
      <div className={styles.tempContainer}>
        <div className={styles.tempLeft}>
          <p>Min:</p>
          <p>{min}</p>
        </div>
        <div className={styles.tempRigth}>
          <p>Max:</p>
          <p>{max}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
