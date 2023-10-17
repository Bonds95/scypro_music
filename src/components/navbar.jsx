import { useState } from "react";

import "./navbar.css"
import NavMenu from "./navmenu"

export default function NavBar() {

  const [vision, setVision] = useState(false);

  function handleClick() {
    setVision(!vision)
  }
    return (
        <nav className="main__nav nav">
        <div className="nav__logo logo">
          <img className="logo__image" src="img/logo.png" alt="logo" />
        </div>
        <div onClick={handleClick} className="nav__burger burger">
          <span className="burger__line" />
          <span className="burger__line" />
          <span className="burger__line" />
        </div>
        {vision && <NavMenu/>}
      </nav>
    )
}