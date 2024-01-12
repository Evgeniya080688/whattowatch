import {useNavigate} from 'react-router-dom';
import {AppRoute} from '../../const';

function ButtonPlay(): JSX.Element {
  const navigate = useNavigate();
  return (
    <button onClick={() => navigate(AppRoute.Player)} className="btn btn--play film-card__button" type="button">
      <svg viewBox="0 0 19 19" width="19" height="19">
        <use xlinkHref="#play-s"></use>
      </svg>
      <span>Play</span>
    </button>
  );
}

export default ButtonPlay;

