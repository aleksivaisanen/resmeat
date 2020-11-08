import { useState } from 'react';
import { Grid, makeStyles } from '@material-ui/core';
import { useParams, Link } from 'react-router-dom';
import ProductDescription from '../components/ProductDescription';
import FarmDescription from '../components/FarmDescription';
import data from '../data/data.json';
import { FactorCards } from '../components/FactorCards';
import PieCard from '../components/PieCard';
import MiniganeCard from '../components/MinigameCard';

const useStyles = makeStyles({
  link: {
    textDecoration: 'none',
  },
});

function Product() {
  const [countDownEnded, setCountDownEnded] = useState(true);
  const classes = useStyles();
  let { productid } = useParams();
  const farmId = productid.charAt(0) - 1;
  const productData = data[farmId]['products'][productid.charAt(1) - 1];
  const farmData = data[farmId];

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
      <Grid item xs={12}>
        <Link to={`/farm/${farmId}`} className={classes.link}>
          <FarmDescription farm={farmData} />
        </Link>
      </Grid>
    </Grid>
  );
}

export default Product;
