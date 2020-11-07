import { Grid } from '@material-ui/core';
import { useParams } from 'react-router-dom';
import FarmDescription from '../components/FarmDescription';
import PieCard from '../components/PieCard';
import data from '../data/data.json';
import { FactorCards } from '../components/FactorCards';

function Farm() {
  let { farmid } = useParams();
  const jsonData = data[farmid];
  return (
    <>
      <Grid item xs={12}>
        <FarmDescription farm={jsonData} />
      </Grid>
      <Grid item xs={12}>
        <PieCard data={[{ label: "welfare", value: 5 }, { label: "water", value: 5 }, { label: "carbon", value: 1 }]} />
      </Grid>
      <Grid item xs={12}>
        <FactorCards data={{ welfare: "A+", water: "D", carbon: "A" }} />
      </Grid>
      <Grid item xs={12}></Grid>
    </>
  );
}

export default Farm;
