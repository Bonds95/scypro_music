
import "./App.css";
import Player from "./components/player";
import Sidebar from "./components/sidebar";
import Mainblock from "./components/mainblock";
import NavBar from "./components/navbar";

function App() {
  return (
    <div className="wrapper">
  <div className="container">
    <main className="main">
      <NavBar/>
      <Mainblock/>
      <Sidebar/>
    </main>
    <Player/>
    <footer className="footer" />
  </div>
</div>
  )
}

export default App;
