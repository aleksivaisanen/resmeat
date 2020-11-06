import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './index.css';
import Main from './components/Main';

ReactDOM.render(
  <Router>
    <Switch>
      <Route path="/">
        <Main />
      </Route>
    </Switch>
  </Router>,
  document.getElementById('root')
);
