
import PlayerTrackInfo from "./PlayerTrackInfo";
import LoadPlayerTrackInfo from "./LoadPlayerTrackInfo";
import * as S from "./player.styles"

export default function Player({ load }) {
  return (
    <S.Bar>
      <S.BarContent>
        <S.BarPlayerProgress />
        <S.BarPlayerBlock>
          <S.BarPlayer>
            <S.PlayerControls>
              <S.PlayerBtnPrev>
                <S.PlayerBtnPrevSvg alt="prev">
                  <use xlinkHref="img/icon/sprite.svg#icon-prev" />
                </S.PlayerBtnPrevSvg>
              </S.PlayerBtnPrev>
              <S.PlayerBtnPlay>
                <S.PlayerBtnPlaySvg alt="play">
                  <use xlinkHref="img/icon/sprite.svg#icon-play" />
                </S.PlayerBtnPlaySvg>
              </S.PlayerBtnPlay>
              <S.PlayBtnNext>
                <S.PlayerBtnNextSvg alt="next">
                  <use xlinkHref="img/icon/sprite.svg#icon-next" />
                </S.PlayerBtnNextSvg>
              </S.PlayBtnNext>
              <S.PlayerBtnRepeat className="_btn-icon">
                <S.PlayerBtnRepeatSvg alt="repeat">
                  <use xlinkHref="img/icon/sprite.svg#icon-repeat" />
                </S.PlayerBtnRepeatSvg>
              </S.PlayerBtnRepeat>
              <S.PlayerBtnShuffle className="_btn-icon">
                <S.PlayerBtnShuffleSvg alt="shuffle">
                  <use xlinkHref="img/icon/sprite.svg#icon-shuffle" />
                </S.PlayerBtnShuffleSvg>
              </S.PlayerBtnShuffle>
            </S.PlayerControls>
            <S.PlayerTrackPlay>
              {load ? <PlayerTrackInfo /> : <LoadPlayerTrackInfo />}
              <S.PlayerTrackPlayLikeDis>
                <S.PlayerTrackPlayLike className="_btn-icon">
                  <S.PlayerTrackPlayLikeSvg alt="like">
                    <use xlinkHref="img/icon/sprite.svg#icon-like" />
                  </S.PlayerTrackPlayLikeSvg>
                </S.PlayerTrackPlayLike>
                <S.PlayerTrackPlayDislike className="_btn-icon">
                  <S.PlayerTrackPlayDislikeSvg
                    className="track-play__dislike-svg"
                    alt="dislike"
                  >
                    <use xlinkHref="img/icon/sprite.svg#icon-dislike" />
                  </S.PlayerTrackPlayDislikeSvg>
                </S.PlayerTrackPlayDislike>
              </S.PlayerTrackPlayLikeDis>
            </S.PlayerTrackPlay>
          </S.BarPlayer>
          <S.BarVolumeBlock>
            <S.BarVolumeContent>
              <S.BarVolumeImage>
                <S.BarVolumeImageSvg alt="volume">
                  <use xlinkHref="img/icon/sprite.svg#icon-volume" />
                </S.BarVolumeImageSvg>
              </S.BarVolumeImage>
              <S.BarVolumeProgress className="_btn">
                <S.BarVolumeProgressLine
                  className="_btn"
                  type="range"
                  name="range"
                />
              </S.BarVolumeProgress>
            </S.BarVolumeContent>
          </S.BarVolumeBlock>
        </S.BarPlayerBlock>
      </S.BarContent>
    </S.Bar>
  );
}
