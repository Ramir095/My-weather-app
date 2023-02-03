import Cards from "./components/Cards";
import SearchBar from "./components/SearchBar";
import data from "./data.js";
import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.app}>
      <div className={styles.background}>
        <div className={styles.box}>
          <div>
            <SearchBar onSearch={(ciudad) => alert(ciudad)} />
          </div>
          <div className={styles.citiesContainer}>
            <div>
              <Cards data={data} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
