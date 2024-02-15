import {Link} from 'react-router-dom';
import {useAppDispatch} from '../../hooks/index';
import {changeGenre, getFilmsByGenre} from '../../store/action';

type CatalogGenresListProps = {
  genres: string[];
  genreCurrent: string;
}

function CatalogGenresList(props:CatalogGenresListProps): JSX.Element {
  const {genres, genreCurrent} = props;
  const dispatch = useAppDispatch();
  return (
    <ul className="catalog__genres-list">
      {
        genres.map((genre, key) => {
          const keyValue = `${key}`;
          return (
            <li
              className={`catalog__genres-item ${(genreCurrent === genre) ? 'catalog__genres-item--active' : ''}`}
              key = {keyValue}
              onClick={() => {
                dispatch(changeGenre(genre));
                dispatch(getFilmsByGenre(genre));
              }}
            >
              <Link className="catalog__genres-link" to={'/'}>{genre}</Link>
            </li>
          );
        })
      }
    </ul>
  );
}

export default CatalogGenresList;
