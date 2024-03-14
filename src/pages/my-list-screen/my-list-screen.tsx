import Logo from '../../components/logo/logo';
import Footer from '../../components/footer/footer';
import FilmsList from '../../components/films-list/films-list';
import withVideoPlayer from '../../hocs/with-video-player/with-video-player';
import {useAppSelector} from '../../hooks';
import UserBlock from '../../components/user-block/user-block';
const FilmsListWrapped = withVideoPlayer(FilmsList);

function MyListScreen(): JSX.Element {
  const films = useAppSelector((state) => state.filmsList);
  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo />

        <h1 className="page-title user-page__title">My list</h1>

        <UserBlock/>
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
