import Cards from "./components/Cards";
import SearchBar from "./components/SearchBar";
import Card from "./components/Card";
import styles from "./App.module.css";
import data, { Cairns } from "./data.js";

function App() {
  return (
    <div className={styles.app}>
      <div className={styles.background}>
        <div className={styles.box}>
          <div>
            <SearchBar onSearch={(ciudad) => alert(ciudad)} />
          </div>
          <div className={styles.citiesContainer}>
            <Card
              primary //React le da valor: true con default cuando se manda un atributo sin valor
              name={Cairns.name}
              img={Cairns.weather[0].icon}
              max={Cairns.main.temp_max}
              min={Cairns.main.temp_min}
            />
            <Cards data={data} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
