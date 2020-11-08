import { useState, useEffect } from 'react';
import { Button, Card, makeStyles } from '@material-ui/core';
import { Link, useParams } from 'react-router-dom';
import ChickenSwing from '../components/ChickenSwing';
import dayjs from 'dayjs';

const useStyles = makeStyles((theme) => ({
  background: {
    background: theme.palette.primary.main,
    height: '100vh',
    width: '100vw',
  },
  grid: {
    height: '100%',
    display: 'grid',
    placeItems: 'center',
    overflow: 'visible',
  },
  swing: {
    maxHeight: '200px',
    maxWidth: '150px',
  },
  timer: {
    userSelect: 'none',
    position: 'fixed',
    textAlign: 'center',
    width: '150px',
    top: '100px',
    fontSize: '20px',
    color: '#FFF',
  },
  results: {
    backgroundColor: '#EEF5FC',
    display: 'grid',
    placeItems: 'center',
    marginTop: '50px',
    fontSize: '22px',
  },
  textDecoration: {
    textDecoration: 'none',
  },
}));

function Minigame() {
  const [rotation, setRotation] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [time, setTime] = useState(10000);
  const classes = useStyles();
  const { productid } = useParams();
  console.log(rotation);

  let timeout;
  const calculateTime = (end) => {
    timeout = setTimeout(() => {
      const timeDiff = end.diff(dayjs(), 'millisecond');
      setTime(timeDiff);
      if (timeDiff <= 0) {
        setPlaying(false);
      } else {
        calculateTime(end);
      }
    }, 100);
  };

  useEffect(() => {
    return () => {
      clearTimeout(timeout);
    };
  }, [timeout]);

  const startGame = () => {
    const endTime = dayjs().add(10, 'second');
    calculateTime(endTime);
    setPlaying(true);
  };

  return (
    <div
      className={classes.background}
      onClick={() =>
        playing
          ? setRotation(rotation + 1 * -Math.min(Math.max(-rotation / 10, 15), 150))
          : rotation === 0 && startGame()
      }>
      <div className={classes.grid}>
        <div className={classes.swing}>
          <p className={classes.timer}>
            {time > 0
              ? Math.floor((time / 1000) % 60) +
                ':' +
                (time % 100 < 10 ? '0' + (time % 100) : time % 100)
              : '00:00'}
          </p>
          <ChickenSwing rotation={rotation} />
          {!playing && time <= 0 && (
            <Card className={classes.results}>
              {'Score ' + Math.floor(rotation / -360)}
              <Link
                to={`/leaderboard/${productid}/${Math.floor(rotation / -360)}`}
                className={classes.textDecoration}>
                <Button variant="contained" color="primary">
                  Next
                </Button>
              </Link>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
}

export default Minigame;
