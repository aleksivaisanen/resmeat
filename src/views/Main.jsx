import { Grid, Typography, makeStyles } from '@material-ui/core';
import logo from '../assets/images/logo.png';
import useLocalStorage from '../hooks/useLocalStorage';
import data from '../data/data.json';
import ProductDescription from '../components/ProductDescription';

const useStyles = makeStyles({
  container: {
    position: 'relative',
  },
  headerGrid: {
    textAlign: 'center',
    marginTop: '20px',
  },
  headerImg: {
    marginTop: '20px',
  },
  gridMarginTop: {
    marginTop: '10px',
  },
});

function Main() {
  const classes = useStyles();
  const [lastScanned, setLocalStorage] = useLocalStorage('last_scanned', []);
  console.log(lastScanned);
  lastScanned.length === 0 && setLocalStorage([11, 12, 23]);
  return (
    <>
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
      </Grid>
      <div>
        {lastScanned.map((productId) => {
          const farmId = productId.toString().charAt(0) - 1;
          const productData = data[farmId]['products'][productId.toString().charAt(1) - 1];
          return <ProductDescription key={productId} product={productData} />;
        })}
      </div>
    </>
  );
}

export default Main;
