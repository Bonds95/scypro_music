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
  const [getError, setGetError] = useState(false);

  useEffect(
    (load) => {
      if (tracks) {
        setLoad(!load);
      }
    },
    [tracks]
  );
  useEffect(() => {
    getTracks()
      .then((tracks) => {
        setTracks(tracks);
        setLoad(true);
      })
      .catch(() => {
        setGetError(true)
      });
  }, []);

  const handleLogIn = () => {
    localStorage.setItem("user", "setLogin");
    const getUser = localStorage.getItem("user");
    setUser(getUser);
  };

  return (
    <div>
      <GlobalStyle />
      <AppRoutes
        load={load}
        tracks={tracks}
        user={user}
        onClick={handleLogIn}
        getError={getError}
      />
    </div>
  );
}

export default App;
