import Player from "../../components/Player/player";
import Sidebar from "../../components/SideBar/sidebar";
import Mainblock from "../../components/MainBlock/mainblock";
import NavBar from "../../components/NavBar/NavBar";
import { useState, useEffect } from "react";
import * as S from "./MainPage.styles";

export function MainPage({ tracks, load }) {
  

  return (
    <div>
      <S.Wrapper>
        <S.Container>
          <S.Main>
            <NavBar />
            <Mainblock tracks={tracks} load={load} />
            <Sidebar load={load} />
          </S.Main>
          <Player load={load} />
          <S.Footer />
        </S.Container>
      </S.Wrapper>
    </div>
  );
}
