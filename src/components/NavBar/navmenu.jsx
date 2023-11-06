import * as S from "./navmenu.styles";
import { Link } from "react-router-dom";

export default function NavMenu() {
  return (
    <S.NavMenu>
      <S.MenuList>
        <S.MenuItem>
          <Link to="/">
            <S.MenuLink href="#">Главное</S.MenuLink>
          </Link>
        </S.MenuItem>
        <S.MenuItem>
          <Link to="/favorites">
            <S.MenuLink href="#">Мой плейлист</S.MenuLink>
          </Link>
        </S.MenuItem>
        <S.MenuItem>
          <Link to="/login">
            <S.MenuLink href="#">Войти</S.MenuLink>
          </Link>
        </S.MenuItem>
      </S.MenuList>
    </S.NavMenu>
  );
}
