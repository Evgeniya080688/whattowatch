import {useNavigate} from 'react-router-dom';
import {AppRoute} from '../../const';

function ButtonMyList(): JSX.Element {
  const navigate = useNavigate();
  return (
    <button onClick={() => navigate(AppRoute.MyList)} className="btn btn--list film-card__button" type="button">
      <svg viewBox="0 0 19 20" width="19" height="20">
        <use xlinkHref="#add"></use>
      </svg>
      <span>My list</span>
    </button>
  );
}

export default ButtonMyList;
