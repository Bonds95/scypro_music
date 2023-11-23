import Player from "../../components/Player/player";
import Sidebar from "../../components/SideBar/sidebar";
import Mainblock from "../../components/MainBlock/mainblock";
import NavBar from "../../components/NavBar/NavBar";
import { useState } from "react";
import * as S from "./MainPage.styles";

export function MainPage({ getError, tracks, load }) {
  
  const [currentTrack, setCurrentTrack] = useState(null);

  

  
  return (
    <div>
      <S.Wrapper>
        <S.Container>
          <S.Main>
            <NavBar />
            <Mainblock getError={getError} setCurrentTrack={setCurrentTrack} tracks={tracks} load={load} />
            <Sidebar load={load} />
          </S.Main>
          <audio controls src="/media/cc0-audio/t-rex-roar.mp3"></audio>
          {currentTrack && <Player currentTrack={currentTrack} load={load} />}
          <S.Footer />
        </S.Container>
      </S.Wrapper>
    </div>
  );
}
