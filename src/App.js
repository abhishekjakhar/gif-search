import * as React from "react";
import "./App.css";

import GifList from "./components/GifList";
import SearchForm from "./components/SearchForm";

function App() {
  const [data, setData] = React.useState([]);
  const [query, setQuery] = React.useState("cats");
  const [isLoading, setIsLoading] = React.useState(true);

  const performSearch = (value) => setQuery(value);

  React.useEffect(() => {
    fetch(
      `https://api.giphy.com/v1/gifs/search?q=${query}&limit=24&api_key=6SpLj4gWB8rbBUggLFbHGJhsca7LpvB1`
    )
      .then((r) => r.json())
      .then((r) => setData(r.data))
      .catch(() => console.log("Error fetching and parsing data"))
      .finally(() => setIsLoading(false));
  }, [query]);

  return (
    <div>
      <header className="main-header">
        <div className="inner">
          <h1 className="main-title">GifSearch</h1>
          <SearchForm onSearch={performSearch} />
        </div>
      </header>
      <div className="main-content">
        {isLoading ? <p>Loading...</p> : <GifList data={data} />}
      </div>
    </div>
  );
}

export default App;
