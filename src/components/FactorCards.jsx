import { Grid, Card, makeStyles, Typography } from '@material-ui/core';
import { ReactComponent as Leaf } from '../assets/images/leaf.svg';
import { ReactComponent as Water } from '../assets/images/water-drop-teardrop.svg';
import MoodIcon from '@material-ui/icons/Mood';


const useStyles = makeStyles({
  centered: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    '& > *:first-child': {
      marginRight: '8px'
    }
  },
  icon: {
    width: "2.5em",
    height: "2.5em"
  },
  muiIcon: {
    width: '1.5em',
    height: "1.5em",
    fill: "#ffcc30"
  }
});

export const FactorCards = ({ data }) => {
  const classes = useStyles();

  return (
    <Grid container justify="center" spacing={2}>
      <Grid item xs={4}>
        <Card className={classes.centered}>
          <Leaf className={classes.icon} fill="green" />
          <Typography variant="h4">{data.carbon}</Typography>
        </Card>
      </Grid>
      <Grid item xs={4}>
        <Card className={classes.centered}>
          <Water className={classes.icon} fill="blue" />
          <Typography variant="h4">{data.water}</Typography>
        </Card>
      </Grid>
      <Grid item xs={4}>
        <Card className={classes.centered}>
          <MoodIcon className={classes.muiIcon} color="yellow" />
          <Typography variant="h4">{data.welfare}</Typography>
        </Card>
      </Grid>
    </Grid>
  )
}