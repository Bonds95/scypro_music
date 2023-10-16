import FilterWindowAuthor from "./FilterWindowAuthor";
import FilterWindowGenre from "./FilterWindowGenre";
import { useState } from "react";

export default function TrackFilter() {
  const [filter, setFilter] = useState(false);

  function handleClick() {
    setFilter(!filter);
  }
  const [filter2, setFilter2] = useState(false);

  function handleClick2() {
    setFilter2(!filter2);
  }
  return (
    <div className="centerblock__filter filter">
      {filter && <FilterWindowAuthor />}
      {filter2 && <FilterWindowGenre />}

      <div className="filter__title">Искать по:</div>
      <div
        onClick={handleClick}
        className="filter__button button-author _btn-text"
      >
        исполнителю
      </div>
      <div
        onClick={handleClick2}
        className="filter__button button-year _btn-text"
      >
        году выпуска
      </div>
      <div className="filter__button button-genre _btn-text">жанру</div>
    </div>
  );
}
