import { Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import Container from "./components/Container";
import MainPage from './components/MainPage/MainPage';
import TestPage from './components/TestPage/TestPage';

function App() {
  return (
    <Container>
      <Suspense fallback={<h2>Loading...</h2>}>
        <Switch>

          <Route path="/" exact>
          <MainPage />
          </Route>

          <Route path="/test">
          <TestPage />
          </Route>

        </Switch>
      </Suspense>
    </Container>
  );
}

export default App;
