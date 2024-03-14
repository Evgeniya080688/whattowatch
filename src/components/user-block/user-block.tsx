import {Link} from 'react-router-dom';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {logoutAction} from '../../store/api-actions';
import {AuthorizationStatus} from '../../const';

function UserBlock(): JSX.Element {
  const authStatus = useAppSelector((state) => state.authorizationStatus);
  const dispatch = useAppDispatch();
  if (authStatus === AuthorizationStatus.Auth) {
    return (
      <ul className="user-block">
        <li className="user-block__item">
          <div className="user-block__avatar">
            <img src="img/avatar.jpg" alt="User avatar" width="63" height="63"/>
          </div>
        </li>
        <li className="user-block__item">
          <Link
            className="user-block__link"
            to="/login"
            onClick={(evt) => {
              evt.preventDefault();
              dispatch(logoutAction());
            }}
          >
            Sign out
          </Link>
        </li>
      </ul>
    );
  } else {
    return (
      <div className="user-block">
        <Link
          className="user-block__link"
          to='/login'
        >
          Sign in
        </Link>
      </div>
    );
  }
}

export default UserBlock;
