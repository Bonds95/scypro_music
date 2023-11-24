import { useEffect } from "react";
import * as S from "./trackitem.styles";

export default function TrackItem({setCurrentTrack, track}) {
  // console.log(props);
  useEffect(() => {
    console.log(track);
  }, []);

  function handleCurrentTrack()  {
    setCurrentTrack(track)
  }
  return (
    <S.PlaylistItem onClick={handleCurrentTrack}>
      <S.PlaylistTrack>
        <S.PlaylistTrackTitle>
          <S.PlaylistTrackTitleImg>
            <S.PlaylistTrackTitleSvg alt="music">
              <use xlinkHref="img/icon/sprite.svg#icon-note" />
            </S.PlaylistTrackTitleSvg>
          </S.PlaylistTrackTitleImg>
          <S.PlaylistTrackTitleText>
            <S.PlaylistTrackTitleLink href="http://">
              {track.name}
              <S.PlaylistTrackTitleSpan>
                {track.extra}
              </S.PlaylistTrackTitleSpan>
            </S.PlaylistTrackTitleLink>
          </S.PlaylistTrackTitleText>
        </S.PlaylistTrackTitle>
        <S.PlaylistTrackAuthor>
          <S.PlaylistTrackAuthorLink href="http://">
            {track.author}
          </S.PlaylistTrackAuthorLink>
        </S.PlaylistTrackAuthor>
        <S.PlaylistTrackAlbum>
          <S.PlaylistTrackAlbumLink href="http://">
            {track.album}
          </S.PlaylistTrackAlbumLink>
        </S.PlaylistTrackAlbum>
        <S.PlaylistTrackTime>
          <S.PlaylistTrackTimeSvg alt="time">
            <use xlinkHref="img/icon/sprite.svg#icon-like" />
          </S.PlaylistTrackTimeSvg>
          <S.PlaylistTrackTimeText>
            {track.duration_in_seconds}
          </S.PlaylistTrackTimeText>
        </S.PlaylistTrackTime>
      </S.PlaylistTrack>
    </S.PlaylistItem>
  );
}
