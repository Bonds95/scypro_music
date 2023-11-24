import TrackFilter from "./Filter/TrackFilter";
import SearchTrack from "./searchtrack";
import TrackContainer from "./Tracks/trackcontainer";
import * as S from "./mainblock.styles";

export default function Mainblock({ getError, setCurrentTrack, load, tracks }) {
  return (
    <S.MainCenterblock>
      <SearchTrack />
      <S.MainCenterblockTitle>Треки</S.MainCenterblockTitle>
      <TrackFilter />
      <TrackContainer
        setCurrentTrack={setCurrentTrack}
        tracks={tracks}
        load={load}
        getError={getError}
      />
    </S.MainCenterblock>
  );
}
