
import "./App.css";
import Player from "./components/player";
import Sidebar from "./components/sidebar";
import Tracklist from "./components/tracklist";
import NavBar from "./components/navbar";

function App() {
  return (
    <div className="wrapper">
  <div className="container">
    <main className="main">
      <NavBar/>
      <Tracklist/>
      <Sidebar/>
    </main>
    <Player/>
    <footer className="footer" />
  </div>
</div>
  )
}

export default App;
