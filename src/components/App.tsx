import React, { useState } from 'react';
import { Switch, Route, Redirect, useHistory } from 'react-router-dom';

import './App.scss';
import SecureRoute from './SecureRoute/SecureRoute';
import Users from '../pages/Users/Users';
import Groups from '../pages/Groups/Groups';
import Login from '../pages/Login/Login';

const checkAuth = ({ username, password}: any) => {
  const validCreds = {
    username: 'user',
    password: 'password'
  };
  return (username === validCreds.username && password === validCreds.password);
};

function App() {
  const history = useHistory();
  const [ isLoggedIn, setLoggedIn ] = useState(false);
  const [ isAuthFailed, setAuthFailed ] = useState(false);

  const handleLogin = (values: any) => {
    if (checkAuth(values)) {
      setLoggedIn(true);
      setAuthFailed(false);
      history.push('/');
    } else {
      setAuthFailed(true);
    }
  };

  return (
      <Switch>
        <SecureRoute isLoggedIn={isLoggedIn} path="/users">
          <Users/>
        </SecureRoute>
        <SecureRoute isLoggedIn={isLoggedIn} path="/groups">
          <Groups />
        </SecureRoute>
        <Route path="/login">
          <Login onLoginProceed={handleLogin} isAuthFailed={isAuthFailed} />
        </Route>
        <Redirect to="/users" />
      </Switch>
  );
}

export default App;
