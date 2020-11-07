import { Container, Grid, makeStyles, Card } from '@material-ui/core';
import Search from '../components/Search';
import PieCard from '../components/PieCard';
import FarmDescription from '../components/FarmDescription';
import ProductCard from '../components/ProductCard';
import data from '../data/data.json'

const useStyles = makeStyles({
  background: {
    background: '#DCEAF9',
    height: '100%',
    width: '100%',
  },
  container: {
    paddingTop: '20px',
  },
  gridMarginTop: {
    marginTop: '10px'
  }
});

function Main() {
  const classes = useStyles();
  const jsonData = data[0];
  return (
    <div className={classes.background}>
      <Container maxWidth="sm" className={classes.container}>
        <Grid container item xs={12}>
          <Grid item xs={12} className={classes.gridMarginTop}>
            <FarmDescription farm={jsonData} />
          </Grid>
          <Grid item xs={12} className={classes.gridMarginTop}>
            <PieCard data={[{ label: "asd", value: 10 }, { label: "qwe", value: 2 }]} content={
              <>
                <div>hello World</div>
                <div>Hello hello</div>
              </>
            }

              extraContent={
                <div>
                  Hello World
                </div>
              }
              innerText="A+" />
          </Grid>
          <Grid item xs={12} className={classes.gridMarginTop}>
            <ProductCard />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Main;
