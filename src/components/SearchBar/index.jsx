import styles from './SearchBar.module.css'
import { IoAdd } from "react-icons/io5";

const SearchBar = () => {
  return (
    <div className={styles.searchBar}>
      <input className={styles.input} type="text" placeholder='Agregar ciudad...' />
      <button className={styles.button}><IoAdd /></button>
    </div>
  )
}

export default SearchBar