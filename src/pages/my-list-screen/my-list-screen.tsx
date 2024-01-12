import Logo from '../../components/logo/logo';
import Footer from '../../components/footer/footer';
import {Films} from '../../types/film';
import FilmsList from '../../components/films-list/films-list';

type MyListScreenProps = {
  films: Films;
}

function MyListScreen(props: MyListScreenProps): JSX.Element {
  const {films} = props;
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
          <FilmsList films={films} />
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default MyListScreen;
