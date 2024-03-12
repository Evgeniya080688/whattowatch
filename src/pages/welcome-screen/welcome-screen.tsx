import Logo from '../../components/logo/logo';
import UserBlock from '../../components/user-block/user-block';
import Footer from '../../components/footer/footer';
import ButtonPlay from '../../components/button-play/button-play';
import ButtonMore from '../../components/button-more/button-more';
import ButtonMyList from '../../components/button-my-list/button-my-list';
import CatalogGenresList from '../../components/catalog-genres-list/catalog-genres-list';
import {useAppDispatch, useAppSelector} from '../../hooks/index';
import FilmsList from '../../components/films-list/films-list';
import withVideoPlayer from '../../hocs/with-video-player/with-video-player';
import {showMoreFilms} from '../../store/action';
import {AuthorizationStatus} from '../../const';

const FilmsListWrapped = withVideoPlayer(FilmsList);

function WelcomeScreen(): JSX.Element {
  const films = useAppSelector((state) => state.filmsList);
  const firstFilm = films[0];
  const filmsFiltered = useAppSelector((state) => state.filmsFiltered);
  const filmsVisible = useAppSelector((state) => state.filmsVisible);
  const isMore = (filmsVisible < filmsFiltered);
  const genres = ['All genres'];
  const genreCurrent = useAppSelector((state) => state.genre);
  const authStatus = useAppSelector((state) => state.authorizationStatus);
  const dispatch = useAppDispatch();
  films.forEach((film) => (!(genres.includes(film.genre))) ? genres.push(film.genre) : genres);
  if (authStatus === AuthorizationStatus.Auth) {
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
                <h2 className="film-card__title">{firstFilm.name}</h2>
                <p className="film-card__meta">
                  <span className="film-card__genre">{firstFilm.genre}</span>
                  <span className="film-card__year">{firstFilm.released}</span>
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
            <FilmsListWrapped films={filmsVisible} />
            <ButtonMore showMoreFilms={()=>{dispatch(showMoreFilms());}} isMore = {isMore}/>
          </section>
          <Footer />
        </div>
      </>
    );
  } else {
    return (
      <section className="film-card">
        <div className="film-card__bg">
          <img src="img/bg-header.jpg"/>
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header">
          <Logo />
          <UserBlock/>
        </header>
      </section>
    );
  }
}

export default WelcomeScreen;
