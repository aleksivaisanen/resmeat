<<<<<<< Updated upstream
import { Container, Grid, makeStyles, Card } from '@material-ui/core';
import Search from '../components/Search';
import PieCard from '../components/PieCard';
import FarmDescription from '../components/FarmDescription';
=======
import { Grid, Typography, makeStyles } from '@material-ui/core';
>>>>>>> Stashed changes
import ProductCard from '../components/ProductCard';
import logo from '../assets/images/logo.png';

const useStyles = makeStyles({
<<<<<<< Updated upstream
  background: {
    background: '#DCEAF9',
    height: '100vh',
    width: '100%',
=======
  headerGrid: {
    textAlign: 'center',
    marginTop: '20px',
>>>>>>> Stashed changes
  },
  headerImg: {
    marginTop: '20px',
  },
});

function Main() {
  const classes = useStyles();
  return (
<<<<<<< Updated upstream
    <div className={classes.background}>
      <Container maxWidth="sm" className={classes.container}>
        <Grid container item xs={12}>
          <Grid item xs={12}>
            <Search />
          </Grid>
          <Grid item xs={12}>
            <FarmDescription farm={jsonData} />
          </Grid>
          <Grid item xs={12}>
            <PieCard data={[{ label: "asd", value: 10 }, { label: "qwe", value: 2 }]} content={
              <>
                <div>hello World</div>
                <div>Hello hello</div>
              </>
            } innerText="A+" />
          </Grid>
          <Grid item xs={12}>
            <ProductCard />
          </Grid>
        </Grid>
      </Container>
    </div>
=======
    <Grid container xs={12} spacing={2}>
      <Grid item xs={12} className={classes.headerGrid}>
        <Typography variant="h4" align="center">
          {'Welcome to resmeat! Scan a products QR to see its responsibility factors'}
        </Typography>
        <img
          src={logo}
          alt="resmeat-logo"
          height="100px"
          width="100px"
          className={classes.headerImg}
        />
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h6">{'Last scanned'}</Typography>
        <ProductCard />
      </Grid>
      <Grid item xs={12}>
        <ProductCard />
      </Grid>
    </Grid>
>>>>>>> Stashed changes
  );
}

export default Main;
