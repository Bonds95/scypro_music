import "./player.css";
import PlayerTrackInfo from "./PlayerTrackInfo";
import LoadPlayerTrackInfo from "./LoadPlayerTrackInfo";
import { styled } from "styled-components";

const StyledBar = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  background: rgba(28, 28, 28, 0.5);
`;

const StyledBarContent = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
`;

const StyledBarPlayerProgress = styled.div`
  width: 100%;
  height: 5px;
  background: #2e2e2e;
`;

const StyledBarPlayerBlock = styled.div`
  height: 73px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
`;

const StyledBarPlayer = styled.div`
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
  -webkit-box-pack: start;
  -ms-flex-pack: start;
  justify-content: flex-start;
`;

const StyledPlayerControls = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  padding: 0 27px 0 31px;
`;

const StyledPlayerBtnPrev = styled.div`
  padding: 5px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  margin-right: 23px;
`;

const StyledPlayerBtnPrevSvg = styled.svg`
  width: 15px;
  height: 14px;
`;

const StyledPlayerBtnPlay = styled.div`
  padding: 5px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  margin-right: 23px;
`;

const StyledPlayerBtnPlaySvg = styled.svg`
  width: 22px;
  height: 20px;
  fill: #d9d9d9;
`;

const StyledPlayBtnNext = styled.div`
  padding: 5px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  margin-right: 28px;
  fill: #a53939;
`;

const StyledPlayerBtnNextSvg = styled.svg`
  width: 15px;
  height: 14px;
  fill: inherit;
  stroke: #d9d9d9;
`;

const StyledPlayerBtnRepeat = styled.div`
  padding: 5px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  margin-right: 24px;
`;

const StyledPlayerBtnRepeatSvg = styled.svg`
  width: 18px;
  height: 12px;
  fill: transparent;
  stroke: #696969;
`;

const StyledPlayerBtnShuffle = styled.div`
  padding: 5px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
`;

const StyledPlayerBtnShuffleSvg = styled.div`
  width: 19px;
  height: 12px;
  fill: transparent;
  stroke: #696969;
`;

const StyledPlayerTrackPlay = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
`;

const StyledPlayerTrackPlayLikeDis = styled.div`
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
  margin-left: 26%;
`;
const StyledPlayerTrackPlayLike = styled.div`
  padding: 5px;
`;
const StyledPlayerTrackPlayLikeSvg = styled.svg`
  width: 14px;
  height: 12px;
  fill: transparent;
  stroke: #696969;
`;
const StyledPlayerTrackPlayDislike = styled.div`
  padding: 5px;
  margin-left: 28.5px;
`;

const StyledPlayerTrackPlayDislikeSvg = styled.svg`
  width: 14.34px;
  height: 13px;
  fill: transparent;
  stroke: #696969;
`;

const StyledBarVolumeBlock = styled.div`
  width: auto;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  padding: 0 92px 0 0;
`;

const StyledBarVolumeContent = styled.div`
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
  -webkit-box-pack: flex-end;
  -ms-flex-pack: flex-end;
  justify-content: flex-end;
`;

const StyledBarVolumeImage = styled.div`
  width: 13px;
  height: 18px;
  margin-right: 17px;
`;

const StyledBarVolumeImageSvg = styled.svg`
  width: 13px;
  height: 18px;
  fill: transparent;
`;

const StyledBarVolumeProgress = styled.div`
  width: 109px;
`;

const StyledBarVolumeProgressLine = styled.input`
  width: 109px;
`;
// const Styled = styled.div``

export default function Player({ load }) {
  return (
    <StyledBar>
      <StyledBarContent>
        <StyledBarPlayerProgress />
        <StyledBarPlayerBlock>
          <StyledBarPlayer>
            <StyledPlayerControls>
              <StyledPlayerBtnPrev>
                <StyledPlayerBtnPrevSvg alt="prev">
                  <use xlinkHref="img/icon/sprite.svg#icon-prev" />
                </StyledPlayerBtnPrevSvg>
              </StyledPlayerBtnPrev>
              <StyledPlayerBtnPlay>
                <StyledPlayerBtnPlaySvg alt="play">
                  <use xlinkHref="img/icon/sprite.svg#icon-play" />
                </StyledPlayerBtnPlaySvg>
              </StyledPlayerBtnPlay>
              <StyledPlayBtnNext>
                <StyledPlayerBtnNextSvg alt="next">
                  <use xlinkHref="img/icon/sprite.svg#icon-next" />
                </StyledPlayerBtnNextSvg>
              </StyledPlayBtnNext>
              <StyledPlayerBtnRepeat className="_btn-icon">
                <StyledPlayerBtnRepeatSvg alt="repeat">
                  <use xlinkHref="img/icon/sprite.svg#icon-repeat" />
                </StyledPlayerBtnRepeatSvg>
              </StyledPlayerBtnRepeat>
              <StyledPlayerBtnShuffle className="_btn-icon">
                <StyledPlayerBtnShuffleSvg alt="shuffle">
                  <use xlinkHref="img/icon/sprite.svg#icon-shuffle" />
                </StyledPlayerBtnShuffleSvg>
              </StyledPlayerBtnShuffle>
            </StyledPlayerControls>
            <StyledPlayerTrackPlay>
              {load ? <PlayerTrackInfo /> : <LoadPlayerTrackInfo />}
              <StyledPlayerTrackPlayLikeDis>
                <StyledPlayerTrackPlayLike className="_btn-icon">
                  <StyledPlayerTrackPlayLikeSvg alt="like">
                    <use xlinkHref="img/icon/sprite.svg#icon-like" />
                  </StyledPlayerTrackPlayLikeSvg>
                </StyledPlayerTrackPlayLike>
                <StyledPlayerTrackPlayDislike className="_btn-icon">
                  <StyledPlayerTrackPlayDislikeSvg
                    className="track-play__dislike-svg"
                    alt="dislike"
                  >
                    <use xlinkHref="img/icon/sprite.svg#icon-dislike" />
                  </StyledPlayerTrackPlayDislikeSvg>
                </StyledPlayerTrackPlayDislike>
              </StyledPlayerTrackPlayLikeDis>
            </StyledPlayerTrackPlay>
          </StyledBarPlayer>
          <StyledBarVolumeBlock>
            <StyledBarVolumeContent>
              <StyledBarVolumeImage>
                <StyledBarVolumeImageSvg alt="volume">
                  <use xlinkHref="img/icon/sprite.svg#icon-volume" />
                </StyledBarVolumeImageSvg>
              </StyledBarVolumeImage>
              <StyledBarVolumeProgress className="_btn">
                <StyledBarVolumeProgressLine
                  className="_btn"
                  type="range"
                  name="range"
                />
              </StyledBarVolumeProgress>
            </StyledBarVolumeContent>
          </StyledBarVolumeBlock>
        </StyledBarPlayerBlock>
      </StyledBarContent>
    </StyledBar>
  );
}
