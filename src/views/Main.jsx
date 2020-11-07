import { Grid, Typography, makeStyles } from '@material-ui/core';
import ProductCard from '../components/ProductCard';
import logo from '../assets/images/logo.png';
import QRReader from '../components/QRReader';
import data from '../data/data.json';

const useStyles = makeStyles({
  headerGrid: {
    textAlign: 'center',
    marginTop: '20px',
  },
  headerImg: {
    marginTop: '20px',
  },
  gridMarginTop: {
    marginTop: '10px'
  }
});

function Main() {
  const classes = useStyles();
  return (
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
      <QRReader />
    </Grid>
  );
}

export default Main;
