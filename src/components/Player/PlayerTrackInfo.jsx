import * as S from "./PlayerTrackInfo.styles";

export default function PlayerTrackInfo() {
  return (
    <S.TrackPlayContain>
      <S.TrackPlayImage>
        <S.TrackPlaySvg alt="music">
          <use xlinkHref="img/icon/sprite.svg#icon-note" />
        </S.TrackPlaySvg>
      </S.TrackPlayImage>
      <S.TrackPlayAuthor>
        <S.TrackPlayAuthorLink href="http://">Ты та...</S.TrackPlayAuthorLink>
      </S.TrackPlayAuthor>
      <S.TrackPlayAlbum className="track-play__album">
        <S.TrackPlayAlbumLink className="track-play__album-link" href="http://">
          Баста
        </S.TrackPlayAlbumLink>
      </S.TrackPlayAlbum>
    </S.TrackPlayContain>
  );
}