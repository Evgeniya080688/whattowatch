import {Route, BrowserRouter, Routes} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../const';
import WelcomeScreen from '../../pages/welcome-screen/welcome-screen';
import SignInScreen from '../../pages/sign-in-screen/sign-in-screen';
import PlayerScreen from '../../pages/player-screen/player-screen';
import AddReviewScreen from '../../pages/add-review-screen/add-review-screen';
import MoviePageScreen from '../../pages/movie-page-screen/movie-page-screen';
import MyListScreen from '../../pages/my-list-screen/my-list-screen';
import NotFoundScreen from '../../pages/notfound-screen/notfound-screen';
import PrivateRoute from '../private-route/private-route';
import {Films} from '../../types/film';

type AppScreenProps = {
  name: string;
  genre: string;
  releaseDate: string;
  films: Films;
}

function App({name, genre, releaseDate, films}:AppScreenProps): JSX.Element {
  const [firstFilm] = films;

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={<WelcomeScreen name={name} genre={genre} releaseDate={releaseDate} films={films}/>}
        />
        <Route
          path={AppRoute.LogIn}
          element={<SignInScreen test='test' />}
        />
        <Route
          path={AppRoute.Player}
          element={<PlayerScreen film={firstFilm}/>}
        />
        <Route
          path={AppRoute.AddReview}
          element={<AddReviewScreen film={firstFilm}/>}
        />
        <Route
          path={AppRoute.Film}
          element={<MoviePageScreen films={films} film={films[0]}/>}
        />
        <Route
          path={AppRoute.MyList}
          element={
            <PrivateRoute
              authorizationStatus={AuthorizationStatus.Auth}
            >
              <MyListScreen films={films}/>
            </PrivateRoute>
          }
        />
        <Route
          path="*"
          element={<NotFoundScreen />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
