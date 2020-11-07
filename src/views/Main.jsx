import { Grid, Typography, makeStyles } from '@material-ui/core';
import logo from '../assets/images/logo.png';

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
<<<<<<< Updated upstream
    </>
=======
      <Grid item xs={12}></Grid>
      <QRReader />
    </Grid>
>>>>>>> Stashed changes
  );
}

export default Main;
