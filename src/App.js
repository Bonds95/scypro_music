import "./App.css";
import { GlobalStyle } from "./GlobalStyle";
import { AppRoutes } from "./routes";
import { useEffect, useState } from "react";
import { getTracks } from "./api";

function App() {
  const getUser = localStorage.getItem("user");
  const [user, setUser] = useState(getUser);
  const [load, setLoad] = useState(false);
  const [tracks, setTracks] = useState([]);
  const [getError, setGetError] = useState(null);

  useEffect(
    (load) => {
      if (tracks) {
        setLoad(!load);
      }
    },
    [tracks]
  );
  try {
    useEffect(() => {
      getTracks().then((tracks) => {
        setTracks(tracks);
        setLoad(true);
      });
    }, []);
  } catch (error) {
    setGetError(error.message);
    console.log(error.message);
  }

  const handleLogIn = () => {
    localStorage.setItem("user", "setLogin");
    const getUser = localStorage.getItem("user");
    setUser(getUser);
  };
  

  return (
    <div>
      <GlobalStyle />
      <p>{getError}</p>
      <AppRoutes
        load={load}
        tracks={tracks}
        user={user}
        onClick={handleLogIn}
        
      />
    </div>
  );
}

export default App;
