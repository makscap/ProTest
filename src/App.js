import { Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import Container from './components/Container';
import MainPage from './components/MainPage/MainPage';
import TestPage from './components/TestPage/TestPage';
import Statefull from './components/Statefull';
import UsefulInfo from './components/UsefulInfo';

import ContactsPage from './components/ContactsPage/ContactsPage';

import Footer from './components/Footer/Footer';
import AuthPage from './components/AuthPage';

import PrivatRoute from './components/Routes/PrivatRoute';
import PublicRoute from './components/Routes/PublicRoute'; //restricted

function App() {
  return (
    <Container>
      <Statefull />
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
            <UsefulInfo />
          </Route>

          <Route path="/contacts">
            <ContactsPage />
          </Route>
        </Switch>
      </Suspense>
      <Footer />
    </Container>
  );
}

export default App;
