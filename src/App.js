import { useSelector } from 'react-redux';

import Auth from './components/Auth';
import Header from './components/Header';
import UserProfile from './components/UserProfile';

const App = () => {
  const { isAuthenticated } = useSelector(state => state.auth);
  return (
    <>
      <Header />
      {isAuthenticated ? <UserProfile /> : <Auth />}
    </>
  );
};

export default App;
