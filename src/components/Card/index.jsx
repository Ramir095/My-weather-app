import styles from "./Card.module.css";
import { IoAddCircleOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const Card = ({
  name,
  max,
  min,
  img,
  primary,
  handleDelete,
  speed,
  humidity,
  id
}) => {
  return (
    <div className={`${styles.card} ${primary ? styles.primary : ""}`}> {/* Importante */}
    <div className={styles.name}>
      <Link to={`/city/${id}`}>
        {name}
      </Link>
        {
          primary 
            ? "" 
            : <button onClick={handleDelete} className={styles.buttonX}>
                <IoAddCircleOutline />
              </button>
        }
      
    </div>
      <img src={`http://openweathermap.org/img/wn/${img}@2x.png`} alt="" />
      <div className={styles.tempContainer}>
        { primary 
          ? "" 
          : <div className={styles.tempLeft}>
              <p>Min:</p>
              <p>{min}°</p>
            </div>
        }
        <div className={styles.tempRigth}>
        { primary ? " " : <p>Max:</p>}
          <p>{max}°</p>
        </div>
      </div>
      {
          speed && humidity ?
          <div style={{order: 2, textAlign: "center"}}>
            <p>{speed} kmh / {humidity}%</p>
          </div>
          : ""
      }
    </div>
  );
};

export default Card;
