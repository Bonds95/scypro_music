


export default function PlaylistItem(props) {

console.log(props)
    return(
        <div className="sidebar__item">
              <a className="sidebar__link" href="#">
                <img
                  className="sidebar__img"
                  src={props.img.src}
                  alt="day's playlist"
                />
              </a>
            </div>
    )
    
}