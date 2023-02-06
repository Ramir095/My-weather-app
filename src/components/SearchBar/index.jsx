import styles from './SearchBar.module.css'
import { IoAdd } from "react-icons/io5";
import { useState } from 'react';

const SearchBar = ({onSearch}) => {

  const [city, setCity] = useState('')

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(city);
    e.target.reset();
  };

  return (
    <form className={styles.searchBar} onSubmit={handleSearch}>
      <input 
        className={styles.input} 
        type="text" placeholder='Agregar ciudad...'
        onChange={e => setCity(e.target.value)}
      />
      <button type='submit' className={styles.button} ><IoAdd/></button>
    </form>
  )
}

export default SearchBar