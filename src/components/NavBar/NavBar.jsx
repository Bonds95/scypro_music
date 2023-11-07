import { useState } from "react";
import NavMenu from "./navmenu";
import * as S from "./NavBar.styles";

export default function NavBar() {
  const [vision, setVision] = useState(false);

  function handleClick() {
    setVision(!vision);
  }
  return (
    <S.MainNav>
      <S.NavLogo>
        <S.LogoImg src="img/logo.png" alt="logo" />
      </S.NavLogo>
      <S.NavBurger onClick={handleClick}>
        <S.BurgerLine />
        <S.BurgerLine />
        <S.BurgerLine />
      </S.NavBurger>
      {vision && <NavMenu />}
    </S.MainNav>
  );
}
