import {Link} from 'react-router-dom';

type TabProps = {
  id: number;
  title: string;
  isActive: number;
  idFilm: number;
  onClickTab: () => void;
}

function Tab({id, title, isActive, idFilm, onClickTab}: TabProps): JSX.Element {

  return (
    <li className={`film-nav__item ${(isActive === id) ? 'film-nav__item--active' : ''}`} onClick={onClickTab}>
      <Link className="film-nav__link" to={`/films/:${idFilm}`}>{title}</Link>
    </li>
  );
}

export default Tab;
