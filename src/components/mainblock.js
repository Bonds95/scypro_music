import "./mainblock.css";
import SearchTrack from "./searchtrack";
import TrackContainer from "./trackcontainer";


export default function Mainblock({load}) {
  
    return (
      <div className="main__centerblock centerblock">
        <SearchTrack />
        <h2 className="centerblock__h2">Треки</h2>
        <div className="centerblock__filter filter">
          <div className="filter__title">Искать по:</div>
          <div className="filter__button button-author _btn-text">
            исполнителю
          </div>
          <div className="filter__button button-year _btn-text">
            году выпуска
          </div>
          <div className="filter__button button-genre _btn-text">жанру</div>
        </div>
        <TrackContainer load={load}/>
      </div>
    );
  }

