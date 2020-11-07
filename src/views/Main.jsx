import { Container, Grid, makeStyles, Card } from '@material-ui/core';
import Search from '../components/Search';
import PieCard from '../components/PieCard';

const useStyles = makeStyles({
  background: {
    background: '#DCEAF9',
    height: '100vh',
    width: '100%',
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
        <Grid container item xs={12}>
          <Grid item xs={12}>
            <Search />
          </Grid>
          <Grid item xs={12}>
            <PieCard data={[{ label: "asd", value: 10 }, { label: "qwe", value: 2 }]} content={
              <>
                <div>hello World</div>
                <div>Hello hello</div>
              </>
            } innerText="A+" />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Main;
