import * as React from "react";

function SearchForm({ onSearch }) {
  const [searchText, setSearchText] = React.useState("");

  const onSearchChange = (e) => setSearchText(e.target.value);

  function handleSubmit(e) {
    e.preventDefault();
    onSearch(searchText);
    e.currentTarget.reset();
  }

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <label className="is-hidden" htmlFor="search">
        Search
      </label>
      <input
        type="search"
        value={searchText}
        onChange={onSearchChange}
        name="search"
        placeholder="Search..."
      />
      <button type="submit" id="submit" className="search-button">
        Search
      </button>
    </form>
  );
}

export default SearchForm;
