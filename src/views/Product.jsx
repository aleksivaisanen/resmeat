import { useState } from 'react';
import { Grid } from '@material-ui/core';
import { useParams } from 'react-router-dom';
import ProductDescription from '../components/ProductDescription';
import data from '../data/data.json';
import { FactorCards } from '../components/FactorCards';
import PieCard from '../components/PieCard';
import MiniganeCard from '../components/MinigameCard';

function Product() {
  const [countDownEnded, setCountDownEnded] = useState(true);
  let { productid } = useParams();
  const farmId = productid.charAt(0) - 1;
  const productData = data[farmId]['products'][productid.charAt(1) - 1];

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <ProductDescription product={productData} />
      </Grid>
      {countDownEnded && <Grid item xs={12}>
        <MiniganeCard setDisplay={setCountDownEnded} />
      </Grid>}
      <Grid item xs={12}>
        <PieCard data={[{ label: "welfare", value: 5 }, { label: "carbon", value: 1 }, { label: "water", value: 5 }]} />
      </Grid>
      <Grid item xs={12}>
        <FactorCards data={{ welfare: 'A+', water: 'D', carbon: 'A+' }} />
      </Grid>
    </Grid>
  );
}

export default Product;
