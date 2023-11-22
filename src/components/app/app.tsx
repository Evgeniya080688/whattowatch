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

type AppScreenProps = {
  name: string;
  genre: string;
  releaseDate: string;
}

function App({name, genre, releaseDate}:AppScreenProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={<WelcomeScreen name={name} genre={genre} releaseDate={releaseDate} />}
        />
        <Route
          path={AppRoute.LogIn}
          element={<SignInScreen test='test' />}
        />
        <Route
          path={AppRoute.Player}
          element={<PlayerScreen test='test'/>}
        />
        <Route
          path={AppRoute.AddReview}
          element={<AddReviewScreen test='test'/>}
        />
        <Route
          path={AppRoute.Film}
          element={<MoviePageScreen test='test'/>}
        />
        <Route
          path={AppRoute.MyList}
          element={
            <PrivateRoute
              authorizationStatus={AuthorizationStatus.NoAuth}
            >
              <MyListScreen test='test'/>
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
