import { useState, useEffect } from 'react';
import { Card, Button, makeStyles, Typography } from "@material-ui/core";
import dayjs from 'dayjs';

const useStyles = makeStyles({
  centered: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: 'wrap'
  },
  header: {
    width: "100%",
  },
  margin: {
    margin: "16px"
  }
});

export const MiniganeCard = ({ setDisplay }) => {
  const classes = useStyles();

  const [time, setTime] = useState(60);
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
    const endTime = dayjs().add(1, "minute");
    calculateTime(endTime);
    return () => {
      clearTimeout(timeout);
    }
  }, [])

  return (
    <Card className={classes.centered}>
      <div className={`${classes.header} ${classes.margin}`}>
        <Typography variant="h4">Earn extra points</Typography>
      </div>
      <Button size="large" variant="outlined" className={classes.margin}>
        <Typography variant="h4">{Math.floor(time / 60)}:{time % 60 < 10 ? '0' : ""}{time % 60} Min</Typography>
      </Button>
    </Card>
  )
}

export default MiniganeCard;