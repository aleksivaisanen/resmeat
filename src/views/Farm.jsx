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
    <Grid container xs={12} spacing={2}>
      <Grid item xs={12}>
        <FarmDescription farm={jsonData} />
      </Grid>
      <Grid item xs={12}>
        <PieCard data={[{ label: "asd", value: 10 }, { label: "qwe", value: 2 }]} />
      </Grid>
      <Grid item xs={12}>
        <FactorCards data={{ welfare: "A+", water: "D", carbon: "A" }} />
      </Grid>
    </Grid>
  );
}

export default Farm;
