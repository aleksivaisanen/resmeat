import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ThemeProvider, CssBaseline, Container, makeStyles } from '@material-ui/core';
import theme from './theme';
import Main from './views/Main';
import Farm from './views/Farm';
import Product from './views/Product';

const useStyles = makeStyles({
  background: {
    background: '#EEF5FC',
    height: '100%',
    minHeight: '100vh',
    width: '100%',
  },
  container: {
    paddingTop: '20px',
  },
});

function Page({ children }) {
  const classes = useStyles();
  return (
    <div className={classes.background}>
      <Container maxWidth="sm" className={classes.container}>
        {children}
      </Container>
    </div>
  );
}

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <Router>
      <Switch>
        <Page>
          <Route exact path="/">
            <Main />
          </Route>
          <Route path="/farm/:farmid">
            <Farm />
          </Route>
          <Route path="/product/:productid">
            <Product />
          </Route>
        </Page>
      </Switch>
    </Router>
  </ThemeProvider>,
  document.getElementById('root')
);
