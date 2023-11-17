import TrackFilter from "./Filter/TrackFilter";
import SearchTrack from "./searchtrack";
import TrackContainer from "./Tracks/trackcontainer";
import * as S from "./mainblock.styles";

export default function Mainblock({ load, tracks, playTrack }) {
  return (
    <S.MainCenterblock>
      <SearchTrack />
      <S.MainCenterblockTitle>Треки</S.MainCenterblockTitle>
      <TrackFilter />
      <TrackContainer playTrack={playTrack} tracks={tracks} load={load} />
    </S.MainCenterblock>
  );
}
