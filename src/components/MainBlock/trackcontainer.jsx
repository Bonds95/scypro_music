import "./trackcontainer.css";
import TrackItem from "./trackitem";
import { trackInfo } from "../arrows";
import LoadTrackItem from "./LoadTrackItem";
import { styled } from "styled-components";

const StyledCenterblockContent = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
`;
const StyledCenterblockContentTitle = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  margin-bottom: 24px;
`;
const StyledCenterblockContentTitleCol01 = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: 2px;
  color: #696969;
  text-transform: uppercase;
  width: 447px;
`;
const StyledCenterblockContentTitleCol02 = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: 2px;
  color: #696969;
  text-transform: uppercase;
  width: 321px;
`;
const StyledCenterblockContentTitleCol03 = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: 2px;
  color: #696969;
  text-transform: uppercase;
  width: 245px;
`;

const StyledCenterblockContentTitleCol04 = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: 2px;
  color: #696969;
  text-transform: uppercase;
  width: 60px;
  text-align: end;
`;
const StyledCenterblockContentTitleSvg = styled.svg`
  width: 12px;
  height: 12px;
  fill: transparent;
  stroke: #696969;
`;

const StyledCenterblockContentPlaylist = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  overflow-y: auto;
`;
export default function TrackContainer({ load }) {
  return (
    <StyledCenterblockContent>
      <StyledCenterblockContentTitle>
        <StyledCenterblockContentTitleCol01>
          Трек
        </StyledCenterblockContentTitleCol01>
        <StyledCenterblockContentTitleCol02>
          ИСПОЛНИТЕЛЬ
        </StyledCenterblockContentTitleCol02>
        <StyledCenterblockContentTitleCol03>
          АЛЬБОМ
        </StyledCenterblockContentTitleCol03>
        <StyledCenterblockContentTitleCol04>
          <StyledCenterblockContentTitleSvg alt="time">
            <use xlinkHref="img/icon/sprite.svg#icon-watch" />
          </StyledCenterblockContentTitleSvg>
        </StyledCenterblockContentTitleCol04>
      </StyledCenterblockContentTitle>
      <StyledCenterblockContentPlaylist className="content__playlist playlist">
        {load
          ? trackInfo.map((track) => <TrackItem track={track} key={track.id} />)
          : trackInfo.map((track) => (
              <LoadTrackItem track={track} key={track.id} />
            ))}
      </StyledCenterblockContentPlaylist>
    </StyledCenterblockContent>
  );
}
