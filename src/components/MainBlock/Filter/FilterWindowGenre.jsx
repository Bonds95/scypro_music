import * as S from "./FilterWindow.styles";

export default function FilterWindowGenre() {
  return (
    <S.FilterWrapper>
      <S.FilterWindowGenre>
        <S.FilterWindowItem className="filter__item">Рок</S.FilterWindowItem>
        <S.FilterWindowItem className="filter__item">
          Хип-хоп
        </S.FilterWindowItem>
        <S.FilterWindowItem className="filter__item">
          Классика
        </S.FilterWindowItem>
        <S.FilterWindowItem className="filter__item">Техно</S.FilterWindowItem>
        <S.FilterWindowItem className="filter__item">Джаз</S.FilterWindowItem>
      </S.FilterWindowGenre>
    </S.FilterWrapper>
  );
}
