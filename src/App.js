import "./App.css";

import SearchForm from "./components/SearchForm";

function App() {
  return (
    <div>
      <header className="main-header">
        <div className="inner">
          <h1 className="main-title">GifSearch</h1>
          <SearchForm />
        </div>
      </header>
      <div className="main-content"></div>
    </div>
  );
}

export default App;
