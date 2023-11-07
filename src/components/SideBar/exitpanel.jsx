import * as S from "./exitpanel.styles"

export default function ExitPanel() {
  return (
    <S.SidebarPersonal >
      <S.SidebarPersonalName >
        Sergey.Ivanov
      </S.SidebarPersonalName>
      <S.SidebarIcon >
        <svg alt="logout">
          <use xlinkHref="img/icon/sprite.svg#logout" />
        </svg>
      </S.SidebarIcon>
    </S.SidebarPersonal>
  );
}
