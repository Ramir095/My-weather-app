import styles from './Card.module.css';
import { IoAddCircleOutline } from "react-icons/io5";

const Card = ({ name, max, min, img, primary }) => {
  return (
    <div className={`${styles.card} ${ primary ? styles.primary : "" }`}> {/* Importante */}
        <p className={styles.name}>
          {name}
          <button className={styles.buttonX}><IoAddCircleOutline /></button>
        </p>
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
