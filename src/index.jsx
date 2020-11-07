import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ThemeProvider, CssBaseline } from '@material-ui/core';
import theme from './theme';
import Main from './views/Main';

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <Router>
      <Switch>
        <Route path="/">
          <Main />
        </Route>
      </Switch>
    </Router>
  </ThemeProvider>,
  document.getElementById('root')
);
