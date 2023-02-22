import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import styles from "./App.module.css";
import About from "./components/About";
import CityDetails from "./components/CityDetails";
import LandingPage from "./components/LandingPage";

import { apiFuntion } from "./controllers/api";
import { fetchCoords } from "./controllers/fetchCoords";
import Home from "./views/Home";

function App() {
  const [cities, setCities] = useState(
    JSON.parse(localStorage.getItem("cities") ?? "[]") 
  );

  const handleDelete = (id) => {
    const localStoragePosition =  JSON.parse(localStorage.getItem("cord") ?? "[]")
    // console.log({localStoragePosition});
    // console.log({cities});
    const isMyUbication = cities.find(c => c.latitud === localStoragePosition?.lat)
    isMyUbication && localStorage.setItem("cord", null)
    // console.log({isMyUbication});
    const newCities = cities.filter((c) => c.id !== id);
    // console.log({newCities});
    localStorage.setItem("cities", JSON.stringify(newCities));
    setCities(newCities);
  };

  function onSearch(ciudad) {
    console.log("estado", cities);
    const cityFound = cities.some(
      // (c) => c.name.toLowerCase().includes(ciudad.toLowerCase())
      (c) => c.name.toLowerCase() === ciudad.toLowerCase()
    );
    if (cityFound) return alert("la ciudad ya existe");

    if (cities.length >= 4) {
      cities.shift();
    }

    apiFuntion(ciudad, setCities);
  }

  const lastCity = cities[cities.length - 1];
  const cityId = lastCity ? lastCity.id : "";
  

  useEffect(() => {
    if (window.navigator.geolocation) {
      window.navigator.geolocation.getCurrentPosition((position) => {
        const pos = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };
        const localStoragePosition =  JSON.parse(localStorage.getItem("cord") ?? "[]")
        if(localStoragePosition?.lat === pos.lat && localStoragePosition?.lng === pos.lng){
          return
        }
        else {
          fetchCoords(pos.lat, pos.lng, setCities); // llama a las coordenadas pasandole estos atributos
          localStorage.setItem("cord", JSON.stringify({lat: pos.lat, lng: pos.lng})) // guardo las coordenadas que me devuelve el navegador
        }
      });
    }
  }, []);

  return (
    <div className={styles.app}>
      <div className={styles.background}>
        <div className={styles.box}>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route
              path="/home"
              element={
                <Home
                  handleDelete={handleDelete}
                  onSearch={onSearch}
                  lastCity={lastCity}
                  cities={cities}
                  id={cityId}
                />
              }
            />
            <Route path="/about" element={<About />} />
            <Route path="/city/:id" element={<CityDetails />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;