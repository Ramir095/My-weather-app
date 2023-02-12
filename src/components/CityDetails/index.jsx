import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { fetchById } from "../../controllers/fetchById";
import styles from "./CityDetails.module.css";

const CityDetails = () => {
  const { id } = useParams();
  const [city, setCity] = useState("");

  console.log(city);
  useEffect(() => {
    fetchById(id, setCity);
  }, [id, setCity]);

  return (
    <div className={styles.cityContainer}>
      <div className={styles.buttonContainer}>
        <Link to='/home'><button className={styles.button}>Back</button></Link>
      </div>
      <div className={styles.cityData}>
        <div className={styles.data}>
          <h1 className={styles.title}>{city.name}</h1>
          <p className={styles.p}>
            Country <span>{city.country}</span>
          </p>
          <p className={styles.p}>
            Wind <span>{city.wind}km/h</span>
          </p>
          <p className={styles.p}>
            Humidity <span>{city.humidity}%</span>
          </p>
          <p className={styles.p}>
            Visibility <span>{city.visibility} km</span>
          </p>
          <p className={styles.p}>
            Latitud <span>{city.latitud}</span>
          </p>
          <p className={styles.p}>
            Longitud <span>{city.longitud}</span>
          </p>
          <p className={styles.p}>
            Description <span>{city.description}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CityDetails;
