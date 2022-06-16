import { useSelector, useDispatch } from 'react-redux';

import { authActions } from '../store/auth-slice';

import classes from './Header.module.css';

const Header = () => {
  const { isAuthenticated } = useSelector(state => state.auth);
  const dispatch = useDispatch();

  const logout = () => {
    dispatch(authActions.logout());
  };

  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      {isAuthenticated && (
        <nav>
          <ul>
            <li>
              <a
                href='/'
                onClick={e => {
                  e.preventDefault();
                }}
              >
                My Products
              </a>
            </li>
            <li>
              <a
                href='/'
                onClick={e => {
                  e.preventDefault();
                }}
              >
                My Sales
              </a>
            </li>
            <li>
              <button onClick={logout}>Logout</button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
