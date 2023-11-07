import * as S from "./FilterWindow.styles";

export default function FilterWindowYear() {
  return (
    <S.FilterWrapper>
      <S.FilterWindowYear>
        <S.FilterWindowItem className="filter__item">1990</S.FilterWindowItem>
        <S.FilterWindowItem className="filter__item">1991</S.FilterWindowItem>
        <S.FilterWindowItem className="filter__item">1992</S.FilterWindowItem>
        <S.FilterWindowItem className="filter__item">1993</S.FilterWindowItem>
        <S.FilterWindowItem className="filter__item">1994</S.FilterWindowItem>
      </S.FilterWindowYear>
    </S.FilterWrapper>
  );
}
