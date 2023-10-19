import "./App.css";
import Player from "./components/Player/player";
import Sidebar from "./components/SideBar/sidebar";
import Mainblock from "./components/mainblock";
import NavBar from "./components/NavBar/NavBar";
import { useState, useEffect } from "react";

function App() {
  const [load, setLoad] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setLoad(!load);
    }, 5000);
  }, []);

  return (
    <div className="wrapper">
      <div className="container">
        <main className="main">
          <NavBar />
          <Mainblock load={load} />
          <Sidebar load={load} />
        </main>
        <Player load={load} />
        <footer className="footer" />
      </div>
    </div>
  );
}

export default App;
