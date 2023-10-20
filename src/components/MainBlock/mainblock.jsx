import TrackFilter from "./Filter/TrackFilter";
import SearchTrack from "./searchtrack";
import TrackContainer from "./trackcontainer";
import * as S from "./mainblock.styles";

export default function Mainblock({ load }) {
  return (
    <S.MainCenterblock>
      <SearchTrack />
      <S.MainCenterblockTitle>Треки</S.MainCenterblockTitle>
      <TrackFilter />
      <TrackContainer load={load} />
    </S.MainCenterblock>
  );
}
