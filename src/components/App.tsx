import React, { useEffect, useState } from 'react';
import { Switch, Route, Redirect, useHistory } from 'react-router-dom';

import './App.scss';
import SecureRoute from './SecureRoute/SecureRoute';
import Users from '../pages/Users/Users';
import Groups from '../pages/Groups/Groups';
import Login from '../pages/Login/Login';

const saveAuthToLocalStorage = (isLoggedIn: boolean) => {
    localStorage.setItem('auth', JSON.stringify({ isLoggedIn }));
};

const getAuthFromLocalStorage = () => {
    const storageValue = JSON.parse(localStorage.getItem('auth') || '{}')
    return storageValue && storageValue.isLoggedIn;
};

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
  useEffect(() => setLoggedIn(getAuthFromLocalStorage), []);

  const handleLogin = (values: any) => {
    const isLoggedIn = checkAuth(values);

    if (isLoggedIn) {
        setLoggedIn(true);
        history.push('/');
    }
    setAuthFailed(!isLoggedIn);
    saveAuthToLocalStorage(isLoggedIn);
  };

  const handleLogout = () => {
      setLoggedIn(false);
      saveAuthToLocalStorage(false);
      history.push('/login');
  };

  return (
      <Switch>
        <SecureRoute isLoggedIn={isLoggedIn} path="/users">
          <Users onLogout={handleLogout}/>
        </SecureRoute>
        <SecureRoute isLoggedIn={isLoggedIn} path="/groups">
          <Groups onLogout={handleLogout} />
        </SecureRoute>
        <Route path="/login">
          <Login onLoginProceed={handleLogin} isLoggedIn={isLoggedIn} isAuthFailed={isAuthFailed} />
        </Route>
        <Redirect to="/users" />
      </Switch>
  );
}

export default App;
