import FilmCard from '../../components/film-card/film-card';
import Logo from '../../components/logo/logo';

type WelcomeScreenProps = {
  name: string;
  genre: string;
  releaseDate: string;
}

function WelcomeScreen({name, genre, releaseDate}: WelcomeScreenProps): JSX.Element {
  return (
    <>
      <section className="film-card">
        <div className="film-card__bg">
          <img src="img/bg-the-grand-budapest-hotel.jpg" alt="The Grand Budapest Hotel"/>
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header film-card__head">
          <Logo />

          <ul className="user-block">
            <li className="user-block__item">
              <div className="user-block__avatar">
                <img src="img/avatar.jpg" alt="User avatar" width="63" height="63"/>
              </div>
            </li>
            <li className="user-block__item">
              <a className="user-block__link">Sign out</a>
            </li>
          </ul>
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
                <button className="btn btn--play film-card__button" type="button">
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </button>
                <button className="btn btn--list film-card__button" type="button">
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add"></use>
                  </svg>
                  <span>My list</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <ul className="catalog__genres-list">
            <li className="catalog__genres-item catalog__genres-item--active">
              <a href="#" className="catalog__genres-link">All genres</a>
            </li>
            <li className="catalog__genres-item">
              <a href="#" className="catalog__genres-link">Comedies</a>
            </li>
            <li className="catalog__genres-item">
              <a href="#" className="catalog__genres-link">Crime</a>
            </li>
            <li className="catalog__genres-item">
              <a href="#" className="catalog__genres-link">Documentary</a>
            </li>
            <li className="catalog__genres-item">
              <a href="#" className="catalog__genres-link">Dramas</a>
            </li>
            <li className="catalog__genres-item">
              <a href="#" className="catalog__genres-link">Horror</a>
            </li>
            <li className="catalog__genres-item">
              <a href="#" className="catalog__genres-link">Kids & Family</a>
            </li>
            <li className="catalog__genres-item">
              <a href="#" className="catalog__genres-link">Romance</a>
            </li>
            <li className="catalog__genres-item">
              <a href="#" className="catalog__genres-link">Sci-Fi</a>
            </li>
            <li className="catalog__genres-item">
              <a href="#" className="catalog__genres-link">Thrillers</a>
            </li>
          </ul>

          <div className="catalog__films-list">
            <FilmCard src="img/fantastic-beasts-the-crimes-of-grindelwald.jpg" title="Fantastic Beasts: The Crimes of Grindelwald" href="film-page.html"/>
            <FilmCard src="img/bohemian-rhapsody.jpg" title="Bohemian Rhapsody" href="film-page.html"/>
            <FilmCard src="img/macbeth.jpg" title="Macbeth" href="film-page.html"/>
            <FilmCard src="img/aviator.jpg" title="Aviator" href="film-page.html"/>
            <FilmCard src="img/we-need-to-talk-about-kevin.jpg" title="We need to talk about Kevin" href="film-page.html"/>
            <FilmCard src="img/what-we-do-in-the-shadows.jpg" title="What We Do in the Shadows" href="film-page.html"/>
            <FilmCard src="img/revenant.jpg" title="Revenant" href="film-page.html"/>
            <FilmCard src="img/johnny-english.jpg" title="Johnny English" href="film-page.html"/>
            <FilmCard src="img/shutter-island.jpg" title="Shutter Island" href="film-page.html"/>
            <FilmCard src="img/pulp-fiction.jpg" title="Pulp Fiction" href="film-page.html"/>
            <FilmCard src="img/no-country-for-old-men.jpg" title="No Country for Old Men" href="film-page.html"/>
            <FilmCard src="img/snatch.jpg" title="Snatch" href="film-page.html"/>
            <FilmCard src="img/moonrise-kingdom.jpg" title="Moonrise Kingdom" href="film-page.html"/>
            <FilmCard src="img/seven-years-in-tibet.jpg" title="Seven Years in Tibet" href="film-page.html"/>
            <FilmCard src="img/midnight-special.jpg" title="Midnight Special" href="film-page.html"/>
            <FilmCard src="img/war-of-the-worlds.jpg" title="War of the Worlds" href="film-page.html"/>
            <FilmCard src="img/dardjeeling-limited.jpg" title="Dardjeeling Limited" href="film-page.html"/>
            <FilmCard src="img/orlando.jpg" title="Orlando" href="film-page.html"/>
            <FilmCard src="img/mindhunter.jpg" title="Mindhunter" href="film-page.html"/>
            <FilmCard src="img/midnight-special.jpg" title="Midnight Special" href="film-page.html"/>
          </div>

          <div className="catalog__more">
            <button className="catalog__button" type="button">Show more</button>
          </div>
        </section>

        <footer className="page-footer">
          <div className="logo">
            <a className="logo__link logo__link--light">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </a>
          </div>

          <div className="copyright">
            <p>© 2019 What to watch Ltd.</p>
          </div>
        </footer>
      </div>
    </>

  );
}

export default WelcomeScreen;
