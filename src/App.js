import Cards from "./components/Cards";
import SearchBar from "./components/SearchBar";
import Card from "./components/Card";
import styles from "./App.module.css";
import { useState } from "react";

const apiKey = "4ae2636d8dfbdc3044bede63951a019b";

function App() {
  const [cities, setCities] = useState([]);

  const handleDelete = (id) => {
    const newCities = cities.filter(c => c.id !== id);
    setCities(newCities);
  };

  function onSearch(ciudad) {
    try {
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}&units=metric`
      )
        .then((r) => r.json())
        .then((recurso) => {
          if (recurso.main !== undefined) {
            const ciudad = {
              min: Math.round(recurso.main.temp_min),
              max: Math.round(recurso.main.temp_max),
              img: recurso.weather[0].icon,
              id: recurso.id,
              wind: recurso.wind.speed,
              temp: recurso.main.temp,
              name: recurso.name,
              weather: recurso.weather[0].main,
              clouds: recurso.clouds.all,
              latitud: recurso.coord.lat,
              longitud: recurso.coord.lon,
            };
            setCities((oldCities) => [...oldCities, ciudad]);
          }
          else {
            alert("No encontramos datos de la ciudad")
          }
        });
    } catch (error) {
      console.log("error", error);
    }
  }

  const lastCity = cities[cities.length -1];

  return (
    <div className={styles.app}>
      <div className={styles.background}>
        <div className={styles.box}>
          <div>
            <SearchBar onSearch={onSearch} />
          </div>
          <div className={styles.citiesContainer}>
            {
              lastCity ? 
              <Card 
                primary //React le da valor: true con default cuando se manda un atributo sin valor
                name={lastCity.name}
                img={lastCity.img}
                max={lastCity.max}
                min={lastCity.min}
              />
              : <h1 style={{ color:"black", display:"flex", justifyContent: "center", alignItems:"center", width:"100%" }}>No se encontraron ciudades</h1>
            }
            <Cards cities={cities} handleDelete={handleDelete} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
