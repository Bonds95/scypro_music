import Player from "../../components/Player/player";
import Sidebar from "../../components/SideBar/sidebar";
import Mainblock from "../../components/MainBlock/mainblock";
import NavBar from "../../components/NavBar/NavBar";
import { useState } from "react";
import * as S from "./MainPage.styles";

export function MainPage({ tracks, load }) {
  const [vision, setVision] = useState(false);

  function playTrack() {
    setVision(!vision);
    console.log("click");
  }

  
  return (
    <div>
      <S.Wrapper>
        <S.Container>
          <S.Main>
            <NavBar />
            <Mainblock playTrack={playTrack} tracks={tracks} load={load} />
            <Sidebar load={load} />
          </S.Main>
          {vision && <Player load={load} />}
          <S.Footer />
        </S.Container>
      </S.Wrapper>
    </div>
  );
}
