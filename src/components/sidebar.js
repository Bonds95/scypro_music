import "./sidebar.css"
import ExitPanel from "./exitpanel"
import PlaylistItem from "./playlists"
import { playlistImg } from "./arrows"

export default function Sidebar() {
    return (
        <div className="main__sidebar sidebar">
        <ExitPanel/>
        <div className="sidebar__block">
          <div className="sidebar__list">
           {playlistImg.map(img => 
            <PlaylistItem img={img} key={img.id}/>)}
          </div>
        </div>
      </div>
    )
}