import FilterWindowAuthor from "./FilterWindowAuthor";
import FilterWindowGenre from "./FilterWindowGenre";
import { useState } from "react";
import FilterWindowYear from "./FilterWindowYear";

export default function TrackFilter() {
  let [filter, setFilter] = useState(false);

  function handleClick() {
    setFilter(!filter);
    setFilter2((filter2 = false));
    setFilter3((filter3 = false));
  }
  let [filter2, setFilter2] = useState(false);

  function handleClick2() {
    setFilter2(!filter2);
    setFilter((filter = false));
    setFilter3((filter3 = false));
  }

  let [filter3, setFilter3] = useState(false);

  function handleClick3() {
    setFilter3(!filter3);
    setFilter((filter = false));
    setFilter2((filter2 = false));
  }
  return (
    <div className="centerblock__filter filter">
      {filter && <FilterWindowAuthor />}
      {filter2 && <FilterWindowYear />}
      {filter3 && <FilterWindowGenre />}

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
      <div
        onClick={handleClick3}
        className="filter__button button-genre _btn-text"
      >
        жанру
      </div>
    </div>
  );
}
