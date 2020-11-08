import { useState, useEffect } from 'react';
import { Card, Button, makeStyles, Typography } from "@material-ui/core";
import { useHistory, useParams } from 'react-router-dom';
import dayjs from 'dayjs';
import ChickenSwing from './ChickenSwing';

const useStyles = makeStyles(theme => ({
  background: {
    background: theme.palette.primary.main,
    color: "white"
  },
  centered: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: 'wrap'
  },
  header: {
    width: "50%",
  },
  margin: {
    margin: "16px",
    textTransform: "inherit"
  },
  color: {
    color: "white"
  },
  villenpuukotuspistejs: {
    '& > .svg': {
      width: '50px'
    }
  }

}));

export const MiniganeCard = ({ setDisplay }) => {
  const classes = useStyles();
  const history = useHistory();
  const { productid } = useParams();

  const [time, setTime] = useState(300);
  let timeout;
  const calculateTime = (end) => {
    timeout = setTimeout(() => {
      const timeDiff = end.diff(dayjs(), "second");
      setTime(timeDiff);
      if (timeDiff === 0) {
        setDisplay(false)
        return
      };
      calculateTime(end)
    }, 1000)
  }

  useEffect(() => {
    const endTime = dayjs().add(5, "minute");
    calculateTime(endTime);
    return () => {
      clearTimeout(timeout);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Card className={`${classes.centered} ${classes.background}`}>
      <div className={`${classes.header} ${classes.margin}`}>
        <Typography variant="h6">Compensate your carbon footprint in {Math.floor(time / 60)}:{time % 60 < 10 ? '0' : ""}{time % 60} minutes, and earn extra points</Typography>
      </div>
      <div className={classes.villenpuukotuspistejs}>
        <ChickenSwing rotation={0} />
      </div>
      <Button size="large" variant="contained" className={classes.margin} onClick={() => { history.push(`/game/${productid}`) }}>
        <Typography variant="h5">Spin the chicken!</Typography>
      </Button>
    </Card>
  )
}

export default MiniganeCard;