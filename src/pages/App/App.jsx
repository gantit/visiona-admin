import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { UserContexProvider } from '../../context/UserContex';

import './App.scss';

import Login from '../Login';
import Dashboard from '../Dashboard';

const App = () => {
  const [user, setUser] = useState('');

  const PrivateRoute = ({ children, ...rest }) => (
    <Route
      {...rest}
      render={
        ({ location }) => (
          user
            ? (children)
            : <Redirect to={{ pathname: '/', state: { from: location } }} />)
        }
    />
  );

  return (
    <UserContexProvider>
      <Router>
        <Switch>
          <PrivateRoute path="/dashboard"><Dashboard user={user} /></PrivateRoute>
          <Route exact path="/"><Login setUser={setUser} /></Route>
        </Switch>
      </Router>
    </UserContexProvider>
  );
};


export default App;
