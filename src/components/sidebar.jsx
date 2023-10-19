import "./sidebar.css"
import ExitPanel from "./exitpanel"
import PlaylistItem from "./playlistitem"
import { playlistImg, loadplaylistImg } from "./arrows"
import LoadPlaylistItem from "./LoadPlaylistItem"

export default function Sidebar({load}) {



  return (
    <div className="main__sidebar sidebar">
    <ExitPanel/>
    <div className="sidebar__block">
      <div className="sidebar__list">
       { load ? playlistImg.map(img => 
        <PlaylistItem img={img} key={img.id}/>) : loadplaylistImg.map(img => 
          <LoadPlaylistItem img={img} key={img.id}/>) }
      </div>
    </div>
  </div>
)

    
}