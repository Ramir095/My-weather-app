const apiKey = process.env.REACT_APP_APIKEY;

export const fetchById = (id, setCity) => {
    try {
        fetch(
          `https://api.openweathermap.org/data/2.5/weather?id=${id}&appid=${apiKey}&units=metric`
        )
          .then((r) => r.json())
          .then((recurso) => {
            if (recurso.main !== undefined) {
              const ciudad = {
                min: Math.round(recurso.main.temp_min),
                max: Math.round(recurso.main.temp_max),
                humidity: recurso.main.humidity,
                img: recurso.weather[0].icon,
                id: recurso.id,
                wind: Math.round(recurso.wind.speed),
                temp: recurso.main.temp,
                name: recurso.name,
                weather: recurso.weather[0].main,
                description: recurso.weather[0].description,
                clouds: recurso.clouds.all,
                latitud: recurso.coord.lat,
                longitud: recurso.coord.lon,
                country: recurso.sys.country,
                visibility: recurso.visibility / 1000
              };
              setCity(ciudad);
            } else {
              alert("No encontramos datos de esa ciudad");
            }
          });
      } catch (error) {
        console.log("error", error);
      }
};