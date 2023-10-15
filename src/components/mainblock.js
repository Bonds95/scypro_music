import TrackFilter from "./TrackFilter";
import "./mainblock.css";
import SearchTrack from "./searchtrack";
import TrackContainer from "./trackcontainer";


export default function Mainblock({load}) {
  
    return (
      <div className="main__centerblock centerblock">
        <SearchTrack />
        <h2 className="centerblock__h2">Треки</h2>
        <TrackFilter/>
        <TrackContainer load={load}/>
      </div>
    );
  }

