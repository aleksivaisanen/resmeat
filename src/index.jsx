import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ThemeProvider, CssBaseline, Container, makeStyles, Grid } from '@material-ui/core';
import theme from './theme';
import Header from './components/Header';
import Main from './views/Main';
import Farm from './views/Farm';
import Menu from './components/Menu';
import Product from './views/Product';
import Leaderboard from './components/Leaderboard';
import Minigame from './views/Minigame';
import * as serviceWorker from './serviceWorker';

const useStyles = makeStyles({
  gridContainer: {
    position: 'relative',
  },
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
      <Header className={classes.header} />
      <Container maxWidth="sm" className={classes.container}>
        <Grid container className={classes.gridContainer}>
          {children}
          <Menu />
        </Grid>
      </Container>
    </div>
  );
}

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <Router>
      <Switch>
        <Route exact path="/">
          <Page>
            <Main />
          </Page>
        </Route>
        <Route path="/game/:productid">
          <Minigame />
        </Route>
        <Route path="/farm/:farmid">
          <Page>
            <Farm />
          </Page>
        </Route>
        <Route path="/product/:productid">
          <Page>
            <Product />
          </Page>
        </Route>
        <Route path="/leaderboard/:productid/:gamescore">
          <Page>
            <Leaderboard />
          </Page>
        </Route>
      </Switch>
    </Router>
  </ThemeProvider>,
  document.getElementById('root')
);

serviceWorker.register();
