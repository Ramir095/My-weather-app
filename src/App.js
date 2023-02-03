import Cards from "./components/Cards";
import SearchBar from "./components/SearchBar";
import data from "./data.js";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div>
        <SearchBar onSearch={(ciudad) => alert(ciudad)} />
      </div>
      <div>
        <Cards data={data} />
      </div>
    </div>
  );
}

export default App;
