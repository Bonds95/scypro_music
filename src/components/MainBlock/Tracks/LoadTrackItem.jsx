import { useEffect } from "react";
import * as S from "./trackitem.styles";

export default function LoadTrackContainer() {
  useEffect(() => {
    console.log("1");
  }, []);
  return (
    <S.PlaylistItem>
      <S.PlaylistTrack>
        <img src="img/load_track.png" />
        <p>Проверка</p>
      </S.PlaylistTrack>
    </S.PlaylistItem>
  );
}
