import { AppBar, Container, Grid, makeStyles, Typography, Avatar } from '@material-ui/core';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.png';
import farmer from '../assets/images/farmer.jpg';

const useStyles = makeStyles({
  verticalAlign: {
    margin: 'auto 0',
  },
  headerLink: {
    display: 'flex',
    textDecoration: 'none',
    color: 'inherit',
  },
  appBar: {
    height: '60px',
    padding: '10px 0',
  },
  avatar: {
    marginLeft: 'auto',
    cursor: 'pointer'
  },
  typographyContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    margin: '0 10px',
    cursor: 'pointer'
  }
});

function Header() {
  const classes = useStyles();
  return (
    <AppBar position="static" className={classes.appBar}>
      <Container maxWidth="sm">
        <Grid container>
          <Link to="/" className={classes.headerLink}>
            <img src={logo} alt="resmeat-logo" height="40px" width="40px" />
            <Typography variant="h5" className={classes.verticalAlign}>
              {'resmeat™'}
            </Typography>
          </Link>
          <Avatar src={farmer} className={classes.avatar} />
          <div className={classes.typographyContainer}>
            <Typography variant="body1">
              {'Herbert'}
            </Typography>
            <Typography variant="caption">
              {'37 points'}
            </Typography>
          </div>
        </Grid>
      </Container>
    </AppBar>
  );
}

export default Header;
