import {Link} from 'react-router-dom';
import {useAppSelector} from '../../hooks';
import {AuthorizationStatus} from '../../const';

function UserBlock(): JSX.Element {
  const authStatus = useAppSelector((state) => state.authorizationStatus);
  if (authStatus === AuthorizationStatus.Auth) {
    return (
      <ul className="user-block">
        <li className="user-block__item">
          <div className="user-block__avatar">
            <img src="img/avatar.jpg" alt="User avatar" width="63" height="63"/>
          </div>
        </li>
        <li className="user-block__item">
          <Link className="user-block__link" to="/login">Sign out</Link>
        </li>
      </ul>
    );
  } else {
    return (
      <div className="user-block">
        <Link className="user-block__link" to="/login">Sign in</Link>
      </div>
    );
  }
}

export default UserBlock;
