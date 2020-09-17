import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom';
import { useLocalStorage } from '../../utils/hooks';
import App from '../App';
import Auth from '../Auth';

const Router = () => {
  return (
    <Switch>
      <Route path="/auth" component={Auth} />
      <PrivateRoute exact path="/" component={App} />
      <PrivateRoute path="/" component={App} />
    </Switch>
  )
}

export const PrivateRoute = ({ component: Component, ...rest }: any) => {
  const [token] = useLocalStorage('token');
  return <Route {...rest} render={(props) => (token ? <Component {...props} /> : <Redirect to="/auth" />)} />;
};

export default Router;