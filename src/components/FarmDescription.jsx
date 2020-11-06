import { makeStyles } from '@material-ui/core/styles';
import { Card, CardContent, CardHeader, Typography } from '@material-ui/core';

const useStyles = makeStyles({

})

const FarmDescription = (props) => {
  const farm = props.farm;
  return (
    <Card>
      <CardHeader title={farm.farmName} subheader={farm.farmLocation} />
      <CardContent>
        <Typography paragraph>
          {farm.farmDescription}
        </Typography>
      </CardContent>
    </Card>
  )
}

export default FarmDescription;