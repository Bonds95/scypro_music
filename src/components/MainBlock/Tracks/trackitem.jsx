import { useEffect } from "react";
import * as S from "./trackitem.styles";

export default function TrackItem(props) {
  // console.log(props);
  useEffect(() => {
    console.log(props);
  }, []);
  return (
    <S.PlaylistItem>
      <S.PlaylistTrack>
        <S.PlaylistTrackTitle>
          <S.PlaylistTrackTitleImg>
            <S.PlaylistTrackTitleSvg alt="music">
              <use xlinkHref="img/icon/sprite.svg#icon-note" />
            </S.PlaylistTrackTitleSvg>
          </S.PlaylistTrackTitleImg>
          <S.PlaylistTrackTitleText>
            <S.PlaylistTrackTitleLink href="http://">
              {props.track.name}
              <S.PlaylistTrackTitleSpan>
                {props.track.extra}
              </S.PlaylistTrackTitleSpan>
            </S.PlaylistTrackTitleLink>
          </S.PlaylistTrackTitleText>
        </S.PlaylistTrackTitle>
        <S.PlaylistTrackAuthor>
          <S.PlaylistTrackAuthorLink href="http://">
            {props.track.author}
          </S.PlaylistTrackAuthorLink>
        </S.PlaylistTrackAuthor>
        <S.PlaylistTrackAlbum>
          <S.PlaylistTrackAlbumLink href="http://">
            {props.track.album}
          </S.PlaylistTrackAlbumLink>
        </S.PlaylistTrackAlbum>
        <S.PlaylistTrackTime>
          <S.PlaylistTrackTimeSvg alt="time">
            <use xlinkHref="img/icon/sprite.svg#icon-like" />
          </S.PlaylistTrackTimeSvg>
          <S.PlaylistTrackTimeText>
            {props.track.duration_in_seconds}
          </S.PlaylistTrackTimeText>
        </S.PlaylistTrackTime>
      </S.PlaylistTrack>
    </S.PlaylistItem>
  );
}
