import Logo from '../../components/logo/logo';
import Footer from '../../components/footer/footer';
import FilmsList from '../../components/films-list/films-list';
import withVideoPlayer from '../../hocs/with-video-player/with-video-player';
import {useAppSelector} from '../../hooks';
const FilmsListWrapped = withVideoPlayer(FilmsList);

function MyListScreen(): JSX.Element {
  const films = useAppSelector((state) => state.filmsList);
  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo />

        <h1 className="page-title user-page__title">My list</h1>

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

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <div className="catalog__films-list">
          <FilmsListWrapped films={films} />
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default MyListScreen;
