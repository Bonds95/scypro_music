import "./navbar.css"
import NavMenu from "./navmenu"

export default function NavBar() {
    return (
        <nav className="main__nav nav">
        <div className="nav__logo logo">
          <img className="logo__image" src="img/logo.png" alt="logo" />
        </div>
        <div className="nav__burger burger">
          <span className="burger__line" />
          <span className="burger__line" />
          <span className="burger__line" />
        </div>
        <NavMenu/>
      </nav>
    )
}