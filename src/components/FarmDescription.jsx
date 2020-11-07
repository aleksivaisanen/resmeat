import { makeStyles } from '@material-ui/core/styles';
import farmerImg from '../assets/images/farmer.jpg'
import { Card, CardContent, CardHeader, Typography, Avatar } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  card: {
    marginTop: '100px',
    overflow: 'visible'
  },
  avatar: {
    width: '200px',
    height: '200px',
    margin: '16px',
    marginTop: '-100px',
  },
  headerContainer: {
    display: 'flex',
  },
  cardHeader: {
    width: '70%'
  }
}));

const FarmDescription = (props) => {
  const classes = useStyles();
  const farm = props.farm;
  return (
    <Card className={classes.card}>
      <div className={classes.headerContainer}>
        <CardHeader title={farm.farmName} subheader={farm.farmLocation} className={classes.cardHeader} />
        <Avatar src={farmerImg} className={classes.avatar} />
      </div>

      <CardContent>
        <Typography paragraph>
          {farm.farmDescription}
        </Typography>
      </CardContent>
    </Card>
  )
}

export default FarmDescription;
