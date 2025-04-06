import { CiSearch } from "react-icons/ci";

import "./Search.scss";
import { useMemo } from "react";

function Search({ searchFunc }) {
  const debounceTimer = (searchFunction, delay) => {
    let timer;

    return (...args) => {
      clearTimeout(timer);

      timer = setTimeout(() => {
        searchFunction(...args);
      }, delay);
    };
  };

  const debounceSearch = useMemo(
    () => debounceTimer(searchFunc, 2000),
    [searchFunc]
  );

  const handleChange = (e) => {
    debounceSearch(e.target.value, "search");
  };
  return (
    <div className="search-container">
      <CiSearch className="search-icon" />
      <input
        type="text"
        placeholder="Search for a country..."
        onChange={handleChange}
      ></input>
    </div>
  );
}

export default Search;
