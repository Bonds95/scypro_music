import FilterWindowAuthor from "./FilterWindowAuthor";
import FilterWindowGenre from "./FilterWindowGenre";
import { useState } from "react";
import FilterWindowYear from "./FilterWindowYear";
import * as S from "./TrackFilter.styles";

export default function TrackFilter() {
  let [filterAuthor, setFilterAuthor] = useState(false);

  function handleClickAuthor() {
    setFilterAuthor(!filterAuthor);
    setFilterYear(false);
    setFilterGenre(false);
  }
  let [filterYear, setFilterYear] = useState(false);

  function handleClickYear() {
    setFilterYear(!filterYear);
    setFilterAuthor(false);
    setFilterGenre(false);
  }

  let [filterGenre, setFilterGenre] = useState(false);

  function handleClickGenre() {
    setFilterGenre(!filterGenre);
    setFilterAuthor(false);
    setFilterYear(false);
  }
  return (
    <S.CenterblockFilter>
      {filterAuthor && <FilterWindowAuthor />}
      {filterYear && <FilterWindowYear />}
      {filterGenre && <FilterWindowGenre />}

      <S.FilterTitle>Искать по:</S.FilterTitle>
      <S.FilterButton onClick={handleClickAuthor} className="_btn-text">
        исполнителю
      </S.FilterButton>
      <S.FilterButton onClick={handleClickYear} className="_btn-text">
        году выпуска
      </S.FilterButton>
      <S.FilterButton onClick={handleClickGenre} className="_btn-text">
        жанру
      </S.FilterButton>
    </S.CenterblockFilter>
  );
}
