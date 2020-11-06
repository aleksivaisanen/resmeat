import { Container, Grid } from '@material-ui/core';
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
