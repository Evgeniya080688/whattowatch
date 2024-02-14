import {Link} from 'react-router-dom';
import {changeGenre, getFilmsByGenre} from '../../store/action';
import {useAppDispatch, useAppSelector} from '../../hooks/index';
import FilmsList from '../../components/films-list/films-list';
import withVideoPlayer from '../../hocs/with-video-player/with-video-player';
const FilmsListWrapped = withVideoPlayer(FilmsList);

function CatalogGenresList(): JSX.Element {
  const films = useAppSelector((state) => state.filmsList);
  const filmsFiltered = useAppSelector((state) => state.filmsFiltered);
  const dispatch = useAppDispatch();
  const genres = ['All genres'];
  const genreCurrent = useAppSelector((state) => state.genre);
  films.forEach((film) => (!(genres.includes(film.genre))) ? genres.push(film.genre) : genres);
  return (
    <section className="catalog">
      <h2 className="catalog__title visually-hidden">Catalog</h2>

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

      <div className="catalog__films-list">
        <FilmsListWrapped films={filmsFiltered} />
      </div>

      <div className="catalog__more">
        <button className="catalog__button" type="button">Show more</button>
      </div>
    </section>
  );
}

export default CatalogGenresList;
