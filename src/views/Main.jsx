import { Grid, Typography, makeStyles, Avatar } from '@material-ui/core';
import { Link } from 'react-router-dom';
import useLocalStorage from '../hooks/useLocalStorage';
import data from '../data/data.json';
import ProductDescription from '../components/ProductDescription';
import farmer from '../assets/images/farmer.jpg';
import { ScanQrCard } from '../components/ScanQrCard';

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
    alignItems: 'flex-start',
    flexDirection: 'column',
    background: 'url(/images/jumbotron-bg.jpg)',
    backgroundSize: 'cover',
    color: '#fff',
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
    padding: '0 20px',
  },
  avatar: {
    margin: '20px',
    height: '120px',
    width: '120px',
  },
});

function Main() {
  const classes = useStyles();
  const [lastScanned] = useLocalStorage('last_scanned', [11, 12, 23]);
  return (
    <>
      <Grid item xs={12} className={classes.headerGrid}>
        <Avatar src={farmer} className={classes.avatar} />
        <Typography variant="h4" align="left" className={classes.headerTypography}>
          {`Welcome back Herbert!`}
        </Typography>
        <Typography variant="h5" align="left" className={classes.headerTypography}>
          {`Points this month: 37 points`}
        </Typography>
        <Typography variant="h6" align="left" className={classes.headerTypography}>
          {`Leaderboard position: 74th`}
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <ScanQrCard />
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h5">{'Last collected products'}</Typography>
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
