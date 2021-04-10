import { Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
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

import {
  literature,
  resources,
} from './components/UsefulInfo/Useful-info.json';

// import PrivatRoute from './components/Routes/PrivatRoute';
// import PublicRoute from './components/Routes/PublicRoute'; //restricted

function App() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  const handleSignOutBtnClick = () => {
    dispatch(authOperations.logOut());
  };

  return (
    <Container>
      <Statefull
        isLoggedIn={isLoggedIn}
        userEmail=""
        handleSignOutBtnClick={handleSignOutBtnClick}
      />
      <Suspense fallback={<h2>Loading...</h2>}>
        <Switch>
          <Route path="/auth" exact restricted>
            <AuthPage />
          </Route>

          <Route path="/" exact>
            <MainPage />
          </Route>

          <Route path="/test">
            <TestPage />
          </Route>

          <Route path="/materials">
            <UsefulInfo literature={literature} resources={resources} />
          </Route>

          <Route path="/contacts">
            <ContactsPage />
          </Route>

          <Route path="/results">
            <ResultPage />
          </Route>
        </Switch>
      </Suspense>
      <Footer />
    </Container>
  );
}

export default App;
