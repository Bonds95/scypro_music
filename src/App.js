import "./App.css";
import { GlobalStyle } from "./GlobalStyle";
import { AppRoutes } from "./routes";
import { useState } from "react";

function App() {
  const [user, setUser] = useState(null);
  const handleLogIn = () => {
    localStorage.setItem("user", "setLogin");
    const getUser = localStorage.getItem("user");
    setUser(getUser);
  };
  console.log(user)
  return (
    <div>
      <GlobalStyle />
      <AppRoutes user={user} onClick={handleLogIn} />
    </div>
  );
}

export default App;
