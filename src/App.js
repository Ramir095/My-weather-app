import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import styles from "./App.module.css";
import About from "./components/About";
import CityDetails from "./components/CityDetails";
import LandingPage from "./components/LandingPage";

import { apiFuntion } from './controllers/api'
import { fetchCoords } from "./controllers/fetchCoords";
import Home from "./views/Home";

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

     apiFuntion(ciudad, setCities)
  }

  const lastCity = cities[cities.length - 1];
  const cityId = lastCity ? lastCity.id : ""
  // console.log("idApp", console.log(cityId));

  // useEffect(() => {
  //   if(navigator.geolocation) // si el navegador tiene geolocalizacion
  //     navigator.geolocation.getCurrentPosition((pos) => { // si la tiene pide la posicion actual
  //       fetchCoords(pos.coords.latitude, pos.coords.longitude, setCities); // llama a las coordenadas pasandole estos atributos
  //     })
  // }, []);

  return (
    <div className={styles.app}>
      <div className={styles.background}>
        <div className={styles.box}>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/home" element={<Home handleDelete={handleDelete} onSearch={onSearch} lastCity={lastCity} cities={cities} id={cityId}/>}/>
            <Route path="/about" element={<About />} />
            <Route path="/city/:id" element={<CityDetails />}/>
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
