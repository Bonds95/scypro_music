import TrackItem from "./trackitem";
import { trackInfo } from "../../arrows";
import LoadTrackItem from "./LoadTrackItem";
import * as S from "./trackcontainer.styles";
import React from "react";
import { useEffect } from "react";

export default function TrackContainer({
  getError,
  setCurrentTrack,
  load,
  tracks,
}) {
  useEffect(() => {
    console.log(tracks);
  }, [tracks]);

  return (
    <S.CenterblockContent>
      <S.CenterblockContentTitle>
        <S.CenterblockContentTitleCol01>Трек</S.CenterblockContentTitleCol01>
        <S.CenterblockContentTitleCol02>
          ИСПОЛНИТЕЛЬ
        </S.CenterblockContentTitleCol02>
        <S.CenterblockContentTitleCol03>АЛЬБОМ</S.CenterblockContentTitleCol03>
        <S.CenterblockContentTitleCol04>
          <S.CenterblockContentTitleSvg alt="time">
            <use xlinkHref="img/icon/sprite.svg#icon-watch" />
          </S.CenterblockContentTitleSvg>
        </S.CenterblockContentTitleCol04>
      </S.CenterblockContentTitle>
      <S.CenterblockContentPlaylist className="content__playlist playlist">
        {load
          ? tracks?.map((track) => (
              <TrackItem
                setCurrentTrack={setCurrentTrack}
                track={track}
                key={track.id}
              />
            ))
          : trackInfo.map((track) => (
              <LoadTrackItem track={track} key={track.id} />
            ))}
        {getError ? <p>Не удалось загрузить список треков</p> : null}
      </S.CenterblockContentPlaylist>
    </S.CenterblockContent>
  );
}
