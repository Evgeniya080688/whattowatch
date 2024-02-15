import Logo from '../../components/logo/logo';
import UserBlock from '../../components/user-block/user-block';
import Footer from '../../components/footer/footer';
import ButtonPlay from '../../components/button-play/button-play';
import ButtonMyList from '../../components/button-my-list/button-my-list';
import CatalogGenresList from '../../components/catalog-genres-list/catalog-genres-list';
import {useAppSelector} from '../../hooks/index';
import FilmsList from '../../components/films-list/films-list';
import withVideoPlayer from '../../hocs/with-video-player/with-video-player';

const FilmsListWrapped = withVideoPlayer(FilmsList);

type WelcomeScreenProps = {
  name: string;
  genre: string;
  releaseDate: string;
}

function WelcomeScreen({name, genre, releaseDate}: WelcomeScreenProps): JSX.Element {
  const films = useAppSelector((state) => state.filmsList);
  const filmsFiltered = useAppSelector((state) => state.filmsFiltered);
  const genres = ['All genres'];
  const genreCurrent = useAppSelector((state) => state.genre);
  films.forEach((film) => (!(genres.includes(film.genre))) ? genres.push(film.genre) : genres);

  return (
    <>
      <section className="film-card">
        <div className="film-card__bg">
          <img src="img/bg-the-grand-budapest-hotel.jpg" alt="The Grand Budapest Hotel"/>
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header film-card__head">
          <Logo />

          <UserBlock/>
        </header>

        <div className="film-card__wrap">
          <div className="film-card__info">
            <div className="film-card__poster">
              <img src="img/the-grand-budapest-hotel-poster.jpg" alt="The Grand Budapest Hotel poster" width="218" height="327"/>
            </div>

            <div className="film-card__desc">
              <h2 className="film-card__title">{name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{genre}</span>
                <span className="film-card__year">{releaseDate}</span>
              </p>

              <div className="film-card__buttons">
                <ButtonPlay />
                <ButtonMyList />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <CatalogGenresList genres={genres} genreCurrent={genreCurrent} />

          <div className="catalog__films-list">
            <FilmsListWrapped films={filmsFiltered} />
          </div>

          <div className="catalog__more">
            <button className="catalog__button" type="button">Show more</button>
          </div>
        </section>
        <Footer />
      </div>
    </>
  );
}

export default WelcomeScreen;
