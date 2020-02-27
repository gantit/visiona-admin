import React, { useState } from 'react';
import ThemeContext from "../../context/themeContext";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import './App.scss';

import Login from '../Login';
import Dashboard from "../Dashboard";

const App = () => {
  const [bearer, setBearer] = useState('');
  const [user, setUser] = useState('');

  const PrivateRoute = ({ children, ...rest }) => {
    return (
      <Route {...rest} render = {
        ({ location }) => console.log('redirecionado dentro') ||
          true ?  (children) :  <Redirect to={{ pathname: "/", state: { from: location } }} />
        }
      />
    );
  }

  return (
    <ThemeContext.Provider value="green">
      <Router>
        <Switch>
          <PrivateRoute path="/user"> <Dashboard user={user}/> </PrivateRoute>
          <Route path="/">  <Login setBearer={setBearer} bearer={bearer} setUser={setUser} /> </Route>
        </Switch>
      </Router>
    </ThemeContext.Provider>
  );
}


export default App;
