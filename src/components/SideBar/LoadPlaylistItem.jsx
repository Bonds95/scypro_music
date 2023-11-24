import * as S from "./playlistitem.styles";

export default function PlaylistItem(props) {
  // console.log(props);
  return (
    <S.SidebarItem>
      <S.SidebarLink>
        <S.SidebarImg src={props.img.src} alt="load playlist" />
      </S.SidebarLink>
    </S.SidebarItem>
  );
}
