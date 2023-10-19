import { useState } from "react";
import "./navbar.css";
import NavMenu from "./navmenu";
import { styled } from "styled-components";

const StyledMainNav = styled.nav`
  width: 244px;
  background-color: #181818;
  padding: 20px 0 20px 36px;
`;
const StyledNavLogo = styled.div`
  width: 113.33px;
  height: 43px;
  padding: 13px 0 13px 0;
  background-color: transparent;
  margin-bottom: 20px;
`;
const StyledLogoImg = styled.img`
  width: 113.33px;
  height: 17px;
  color: #181818;
`;
const StyledNavBurger = styled.div`
  width: 20px;
  height: 36px;
  padding: 13px 0;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
`;
const StyledBurgerLine = styled.span`
  display: inline-block;
  width: 100%;
  height: 1px;
  background-color: #d3d3d3;
`;
// const Styled = styled.div``
export default function NavBar() {
  const [vision, setVision] = useState(false);

  function handleClick() {
    setVision(!vision);
  }
  return (
    <StyledMainNav>
      <StyledNavLogo>
        <StyledLogoImg src="img/logo.png" alt="logo" />
      </StyledNavLogo>
      <StyledNavBurger onClick={handleClick}>
        <StyledBurgerLine />
        <StyledBurgerLine />
        <StyledBurgerLine />
      </StyledNavBurger>
      {vision && <NavMenu />}
    </StyledMainNav>
  );
}
