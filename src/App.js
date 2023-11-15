import "./App.css";
import { GlobalStyle } from "./GlobalStyle";
import { AppRoutes } from "./routes";
import { useEffect, useState } from "react";
import { getTracks } from "./api";


function App() {
  const getUser = localStorage.getItem("user");
  const [user, setUser] = useState(getUser);
  const [load, setLoad] = useState(false);
  const handleLogIn = () => {
    localStorage.setItem("user", "setLogin");
    const getUser = localStorage.getItem("user");
    setUser(getUser);
  };
  console.log(user);

  const [tracks, setTracks] = useState([]);
  
  useEffect(() => {
    getTracks().then((tracks) => {
      setTracks(tracks)
      
    })
  }, [])
  
  console.log(tracks);

 
  useEffect((load) => {
   if (tracks) {
    setLoad(!load)
   }
  }, [tracks]);
  return (
    <div>
      <GlobalStyle />

      <AppRoutes load={load} tracks={tracks} user={user} onClick={handleLogIn} />
    </div>
  );
}

export default App;
