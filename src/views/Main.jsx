import { Container, Grid, makeStyles } from '@material-ui/core';
import Search from '../components/Search';
import ProductCard from '../components/ProductCard';

const useStyles = makeStyles({
  background: {
    background: '#DCEAF9',
    height: '100vh',
    width: '100vw',
  },
  container: {
    paddingTop: '20px',
  },
});

function Main() {
  const classes = useStyles();
  return (
    <div className={classes.background}>
      <Container maxWidth="sm" className={classes.container}>
        <Grid container item xs={12} spacing={2}>
          <Grid item xs={12}>
            <Search />
          </Grid>
          <Grid item xs={12}>
            <ProductCard />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Main;
