import styles from "./SearchBar.module.css";
import { Link } from "react-router-dom";
import { IoAdd } from "react-icons/io5";
import { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [city, setCity] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(city);
    e.target.reset();
  };

  return (
    <form className={styles.searchBar} onSubmit={handleSearch}>
      <div className={styles.inputAndButton }>
        <input
          className={styles.input}
          type="text"
          placeholder="Agregar ciudad..."
          onChange={(e) => setCity(e.target.value)}
        />
        <button type="submit" className={styles.button}>
          <IoAdd />
        </button>
      </div>

      <div className={styles.buttonContainer}>
        <Link to="./about">
          <button className={styles.buttonsRight}>About</button>
        </Link>
      </div>
    </form>
  );
};

export default SearchBar;
