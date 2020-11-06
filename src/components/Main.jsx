import { Container, Grid, makeStyles } from '@material-ui/core';
import Search from './Search';

const useStyles = makeStyles({
  background: {
    background: '#DCEAF9',
    height: '100vh',
    width: '100vw',
  },
  container: {
    padding: '10px',
  },
});

function Main() {
  const classes = useStyles();
  return (
    <div className={classes.background}>
      <Container maxWidth="sm" className={classes.container}>
        <Grid>
          <Search />
        </Grid>
      </Container>
    </div>
  );
}

export default Main;
