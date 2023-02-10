import Cards from "./components/Cards";
import SearchBar from "./components/SearchBar";
import Card from "./components/Card";
import styles from "./App.module.css";
import { useState } from "react";
import { apiFuntion } from './controllers/api'

function App() {
  const [cities, setCities] = useState([]);

  const handleDelete = (id) => {
    const newCities = cities.filter((c) => c.id !== id);
    setCities(newCities);
  };

  function onSearch(ciudad) {
    const cityFound = cities.some(
      (c) => c.name.toLowerCase() === ciudad.toLowerCase()
    );

    if (cityFound) return alert("la ciudad ya existe");
    
    if(cities.length >= 4){
      cities.shift()
    }
    
    return apiFuntion(ciudad, setCities)
  }

  const lastCity = cities[cities.length - 1];

  return (
    <div className={styles.app}>
      <div className={styles.background}>
        <div className={styles.box}>
          <div>
            <SearchBar onSearch={onSearch} />
          </div>
          <div className={styles.citiesContainer}>
            <div className={styles.inTheContainer}>
              {lastCity ? (
                <Card
                  primary //React le da valor: true con default cuando se manda un atributo sin valor
                  name={lastCity.name}
                  img={lastCity.img}
                  max={lastCity.max}
                  min={lastCity.min}
                  speed={lastCity.wind} // viento en km/h
                  humidity={lastCity.humidity} // humedad
                />
              ) : (
                <h1
                  style={{
                    color: "black",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "100%",
                  }}
                >
                  No se encontraron ciudades
                </h1>
              )}
              <Cards cities={cities} handleDelete={handleDelete} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
