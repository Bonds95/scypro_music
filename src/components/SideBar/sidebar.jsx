
import ExitPanel from "./exitpanel";
import PlaylistItem from "./playlistitem";
import { playlistImg, loadplaylistImg } from "../arrows";
import LoadPlaylistItem from "./LoadPlaylistItem";
import * as S from "./sidebar.styles"



export default function Sidebar({ load }) {
  return (
    <S.MainSidebar>
      <ExitPanel />
      <S.SidebarBlock className="sidebar__block">
        <S.SidebarList className="sidebar__list">
          {load
            ? playlistImg.map((img) => <PlaylistItem img={img} key={img.id} />)
            : loadplaylistImg.map((img) => (
                <LoadPlaylistItem img={img} key={img.id} />
              ))}
        </S.SidebarList>
      </S.SidebarBlock>
    </S.MainSidebar>
  );
}
