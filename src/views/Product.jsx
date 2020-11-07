import { Grid } from '@material-ui/core';
import { useParams } from 'react-router-dom';
import FarmDescription from '../components/FarmDescription';
import ProductCard from '../components/ProductCard';
import data from '../data/data.json';
import PieCard from '../components/PieCard';

function Product() {
  let { farmid } = useParams();
  const jsonData = data[farmid];
  return (
    <Grid container xs={12} spacing={2}>
      <Grid item xs={12}>
        <FarmDescription farm={jsonData} />
      </Grid>
      <PieCard />
      <Grid item xs={12}>
        <ProductCard />
      </Grid>
    </Grid>
  );
}

export default Product;
