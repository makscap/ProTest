import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import { authSelectors } from '../redux/auth';

export default function PrivatRoute({ children, ...routeProps }) {
  const isLogedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <Route {...routeProps}>
      {isLogedIn ? children : <Redirect to="/auth" />}
    </Route>
  );
}
