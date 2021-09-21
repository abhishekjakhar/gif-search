import * as React from "react";

function SearchForm() {
  const onSearchChange = (e) => {};

  function handleSubmit(e) {
    e.preventDefault();
    e.currentTarget.reset();
  }

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <label className="is-hidden" htmlFor="search">
        Search
      </label>
      <input
        type="search"
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
