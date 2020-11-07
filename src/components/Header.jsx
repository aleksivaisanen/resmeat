import { AppBar, Container, Grid, makeStyles, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.png';

const useStyles = makeStyles({
  verticalAlign: {
    margin: 'auto 0',
  },
  headerLink: {
    display: 'flex',
    textDecoration: 'none',
    color: 'inherit',
  },
});

function Header() {
  const classes = useStyles();
  return (
    <AppBar position="static">
      <Container maxWidth="sm">
        <Grid container>
          <Link to="/" className={classes.headerLink}>
            <img src={logo} alt="resmeat-logo" height="40px" width="40px" />
            <Typography variant="h5" className={classes.verticalAlign}>
              {'resmeat™'}
            </Typography>
          </Link>
        </Grid>
      </Container>
    </AppBar>
  );
}

export default Header;
