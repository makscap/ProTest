import { Suspense, useEffect } from 'react';
import { Switch } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { authSelectors, authOperations } from '../src/components/redux/auth';

import Container from './components/Container';
import MainPage from './components/MainPage/MainPage';
import TestPage from './components/TestPage/TestPage';
import Statefull from './components/Statefull';
import UsefulInfo from './components/UsefulInfo';
import ResultPage from './components/ResultPage/ResultPage';
import ContactsPage from './components/ContactsPage/ContactsPage';
import Footer from './components/Footer/Footer';
import AuthPage from './components/AuthPage';
import Spiner from './components/Spiner/Spiner';

import {
  literature,
  resources,
} from './components/UsefulInfo/Useful-info.json';

import PrivateRoute from './components/Routes/PrivatRoute';
import PublicRoute from './components/Routes/PublicRoute'; //restricted

function App() {
  const dispatch = useDispatch();

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
        <Suspense>
          <Switch>
            <PublicRoute path="/auth" exact restricted>
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

          <PrivateRoute path="/results">
            <ResultPage />
          </PrivateRoute>
        
          </Switch>
        </Suspense>
      )}
      <Footer />
    </Container>
  );
}

export default App;
