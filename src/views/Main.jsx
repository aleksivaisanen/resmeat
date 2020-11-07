import { Grid, Typography, makeStyles } from '@material-ui/core';
import { Link } from 'react-router-dom';
import useLocalStorage from '../hooks/useLocalStorage';
import data from '../data/data.json';
import ProductDescription from '../components/ProductDescription';

const useStyles = makeStyles({
  container: {
    position: 'relative',
  },
  headerGrid: {
    textAlign: 'center',
    borderRadius: '4px',
    height: '400px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: 'url(/images/jumbotron-bg.jpg)',
    backgroundSize: 'cover',
    color: '#fff'
  },
  headerImg: {
    marginTop: '20px',
  },
  gridMarginTop: {
    marginTop: '10px',
  },
  link: {
    textDecoration: 'none',
  },
  width100: {
    width: '100%',
    marginBottom: '20px',
  },
  headerTypography: {
    padding: '0 20px'
  }
});

function Main() {
  const classes = useStyles();
  const [lastScanned, setLocalStorage] = useLocalStorage('last_scanned', []);
  lastScanned.length === 0 && setLocalStorage([11, 12, 23]);
  return (
    <>
      <Grid item xs={12} className={classes.headerGrid}>
        <Typography variant="h4" align="center" className={classes.headerTypography}>
          {`Welcome to resmeat™! Scan the QR of the product to see its responsibility factors`}
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h5">{'Last scanned'}</Typography>
      </Grid>
      <div className={classes.width100}>
        {lastScanned.map((productId) => {
          const farmId = productId.toString().charAt(0) - 1;
          const productData = data[farmId]['products'][productId.toString().charAt(1) - 1];
          return (
            <Link to={`/product/${productId}`} className={classes.link} key={productId}>
              <ProductDescription key={productId} product={productData} />
            </Link>
          );
        })}
      </div>
    </>
  );
}

export default Main;
