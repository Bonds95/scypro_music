import "./FilterWindowGenre.css"

export default function FilterWindowGenre() {

    return(
        <div className="filter__wrapper-genre">
            <ul className="filter__window-genre">
            <li className="filter__item-genre">Рок</li>
            <li className="filter__item-genre">Хип-хоп</li>
            <li className="filter__item-genre">Классика</li>
            <li className="filter__item-genre">Техно</li>
            <li className="filter__item-genre">Джаз</li>
        </ul>
        </div>
    )
}