import * as S from "./FilterWindow.styles";

export default function FilterWindowAuthor() {
  return (
    <S.FilterWrapper>
      <S.FilterWindowAuthor>
        <S.FilterWindowItem className="filter__item">
          Michael Jackson
        </S.FilterWindowItem>
        <S.FilterWindowItem className="filter__item">
          Frank Sinatra
        </S.FilterWindowItem>
        <S.FilterWindowItem className="filter__item">
          Calvin Harris
        </S.FilterWindowItem>
        <S.FilterWindowItem className="filter__item">Zhu</S.FilterWindowItem>
        <S.FilterWindowItem className="filter__item">
          Arctic Monkeys
        </S.FilterWindowItem>
      </S.FilterWindowAuthor>
    </S.FilterWrapper>
  );
}
