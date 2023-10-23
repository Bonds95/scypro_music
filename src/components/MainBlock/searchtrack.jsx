
import * as S from "./searchtrack.styles"

export default function SearchTrack() {
  return (
    <S.CenterblockSearch>
      <S.CenterblockSearchSvg>
        <use xlinkHref="img/icon/sprite.svg#icon-search" />
      </S.CenterblockSearchSvg>
      <S.CenterblockSearchText
        type="search"
        placeholder="Поиск"
        name="search"
      />
    </S.CenterblockSearch>
  );
}
