import { Grid } from '@material-ui/core';
import { useParams } from 'react-router-dom';
import FarmDescription from '../components/FarmDescription';
import data from '../data/data.json';

function Product() {
  let { farmid } = useParams();
  const jsonData = data[farmid];
  return (
    <Grid container xs={12} spacing={2}>
      <Grid item xs={12}>
        <FarmDescription farm={jsonData} />
      </Grid>
      <Grid item xs={12}></Grid>
    </Grid>
  );
}

export default Product;
