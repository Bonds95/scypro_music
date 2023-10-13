import "./trackcontainer.css";
import TrackItem from "./trackitem";
import { trackInfo } from "./arrows";
import LoadTrackItem from "./LoadTrackItem";

export default function TrackContainer({ load }) {
  return (
    <div className="centerblock__content">
      <div className="content__title playlist-title">
        <div className="playlist-title__col col01">Трек</div>
        <div className="playlist-title__col col02">ИСПОЛНИТЕЛЬ</div>
        <div className="playlist-title__col col03">АЛЬБОМ</div>
        <div className="playlist-title__col col04">
          <svg className="playlist-title__svg" alt="time">
            <use xlinkHref="img/icon/sprite.svg#icon-watch" />
          </svg>
        </div>
      </div>
      <div className="content__playlist playlist">
        {load
          ? trackInfo.map((track) => <TrackItem track={track} key={track.id} />)
          : trackInfo.map((track) => (
              <LoadTrackItem track={track} key={track.id} />
            ))}
      </div>
    </div>
  );
}
