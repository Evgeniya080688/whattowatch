import Logo from '../../components/logo/logo';
import Footer from '../../components/footer/footer';
import ButtonPlay from '../../components/button-play/button-play';
import ButtonMyList from '../../components/button-my-list/button-my-list';
import UserBlock from '../../components/user-block/user-block';
import Tabs from '../../components/tabs/tabs';
import {Films} from '../../types/film';
import FilmsList from '../../components/films-list/films-list';
import {Link, useParams} from 'react-router-dom';

type MoviePageScreenProps = {
  films: Films;
}

function MoviePageScreen(props: MoviePageScreenProps): JSX.Element {
  const { id } = useParams();
  const {films} = props;
  const film = films[Number(String(id).slice(1))];
  const {name, posterImage, backgroundImage, genre, released} = film;
  return (
    <>
      <section className="film-card film-card--full">
        <div className="film-card__hero">
          <div className="film-card__bg">
            <img src={backgroundImage} alt={name}/>
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <header className="page-header film-card__head">
            <Logo />

            <UserBlock/>
          </header>

          <div className="film-card__wrap">
            <div className="film-card__desc">
              <h2 className="film-card__title">{name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{genre}</span>
                <span className="film-card__year">{released}</span>
              </p>

              <div className="film-card__buttons">
                <ButtonPlay />
                <ButtonMyList />
                <Link className="btn film-card__button" to={`/films/:${Number(String(id).slice(1))}/review`}>Add review</Link>
              </div>
            </div>
          </div>
        </div>

        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <div className="film-card__poster film-card__poster--big">
              <img src={posterImage} alt={name} width="218" height="327"/>
            </div>

            <Tabs film={film}/>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>

          <div className="catalog__films-list">
            <FilmsList films={films} />
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}

export default MoviePageScreen;
