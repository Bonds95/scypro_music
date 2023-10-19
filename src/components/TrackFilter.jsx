import FilterWindowAuthor from "./FilterWindowAuthor";
import FilterWindowGenre from "./FilterWindowGenre";
import { useState } from "react";
import FilterWindowYear from "./FilterWindowYear";

export default function TrackFilter() {
  let [filterAuthor, setFilterAuthor] = useState(false);

  function handleClickAuthor() {
    setFilterAuthor(!filterAuthor);
    setFilterYear((false));
    setFilterGenre((false));
  }
  let [filterYear, setFilterYear] = useState(false);

  function handleClickYear() {
    setFilterYear(!filterYear);
    setFilterAuthor((false));
    setFilterGenre((false));
  }

  let [filterGenre, setFilterGenre] = useState(false);

  function handleClickGenre() {
    setFilterGenre(!filterGenre);
    setFilterAuthor((false));
    setFilterYear((false));
  }
  return (
    <div className="centerblock__filter filter">
      {filterAuthor && <FilterWindowAuthor />}
      {filterYear && <FilterWindowYear />}
      {filterGenre && <FilterWindowGenre />}

      <div className="filter__title">Искать по:</div>
      <div
        onClick={handleClickAuthor}
        className="filter__button button-author _btn-text"
      >
        исполнителю
      </div>
      <div
        onClick={handleClickYear}
        className="filter__button button-year _btn-text"
      >
        году выпуска
      </div>
      <div
        onClick={handleClickGenre}
        className="filter__button button-genre _btn-text"
      >
        жанру
      </div>
    </div>
  );
}
