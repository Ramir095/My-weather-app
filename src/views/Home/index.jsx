
import Card from "../../components/Card";
import Cards from "../../components/Cards";
import SearchBar from "../../components/SearchBar";
import styles from './Home.module.css'

const Home = ({ onSearch, cities, handleDelete, lastCity }) => {
  return (
    <>
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
    </>
  );
};

export default Home;
