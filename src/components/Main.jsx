import { Container, Grid } from '@material-ui/core';
import PieChart from './Pie';
import Search from './Search';

function Main() {
  return (
    <Container maxWidth="sm">
      <Grid>
        <Search />
      </Grid>
    </Container>
  );
}

export default Main;
