import "./App.css";
import Player from "./components/Player/player";
import Sidebar from "./components/SideBar/sidebar";
import Mainblock from "./components/MainBlock/mainblock";
import NavBar from "./components/NavBar/NavBar";
import { useState, useEffect } from "react";
import { GlobalStyle } from "./GlobalStyle";
import * as S from "./App.styles";

function App() {
  const [load, setLoad] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setLoad(!load)
    }, 5000)
  }, []);
  
  return (
    <div>
      <GlobalStyle />
      <S.Wrapper>
        <S.Container>
          <S.Main>
            <NavBar />
            <Mainblock load={load} />
            <Sidebar load={load} />
          </S.Main>
          <Player load={load} />
          <S.Footer />
        </S.Container>
      </S.Wrapper>
    </div>
  );
}

export default App;
