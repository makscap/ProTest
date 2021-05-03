import { Suspense, useEffect, useRef } from 'react';
import { Switch, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { authSelectors, authOperations } from '../src/components/redux/auth';

import Container from './components/Container';
import MainPage from './components/MainPage/MainPage';
import TestPage from './components/TestPage/TestPage';
import Statefull from './components/Statefull';
import UsefulInfo from './components/UsefulInfo';
import ResultPage from './components/ResultPage/ResultPage';
import ContactsPage from './components/ContactsPage/ContactsPage';
// import Footer from './components/Footer/Footer';
import AuthPage from './components/Auth/AuthPage/AuthPage';
import Spiner from './components/Spiner/Spiner';

import {
  literature,
  resources,
} from './components/UsefulInfo/Useful-info.json';

import PrivateRoute from './components/Routes/PrivatRoute';
import PublicRoute from './components/Routes/PublicRoute'; //restricted
import Profile from './components/Statefull/Profile/Profile';

function App() {
  const dispatch = useDispatch();
  const location = useLocation();

  const currentUrl = useRef(location);
  console.log(location);

  const isFetchingCurrentUser = useSelector(authSelectors.getIsFetchingCurrent);
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    
    <Container>
      <Statefull isLoggedIn={isLoggedIn} />
      {isFetchingCurrentUser ? (
        <Spiner />
      ) : (
        <Suspense fallback={<Spiner />}>
          <Switch>
            <PublicRoute path="/auth" redirectTo={currentUrl} exact restricted>
              <AuthPage />
            </PublicRoute>

            <PrivateRoute path="/" exact>
              <MainPage />
            </PrivateRoute>

            <PrivateRoute path="/test">
              <TestPage />
            </PrivateRoute>

            <PublicRoute path="/materials">
              <UsefulInfo literature={literature} resources={resources} />
            </PublicRoute>

            <PublicRoute path="/contacts">
              <ContactsPage />
            </PublicRoute>

            <PublicRoute path="/profile">
              <Profile />
            </PublicRoute>

            <PrivateRoute path="/results">
              <ResultPage />
            </PrivateRoute>
          </Switch>
        </Suspense>

      )}
    </Container>
  );
}

export default App;
