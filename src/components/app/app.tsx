import WelcomeScreen from '../../pages/welcome-screen/welcome-screen';
type AppScreenProps = {
  name: string;
  genre: string;
  releaseDate: string;
}

function App({name, genre, releaseDate}:AppScreenProps): JSX.Element {
  return (
    <WelcomeScreen name={name} genre= {genre} releaseDate={releaseDate} />
  );
}

export default App;
