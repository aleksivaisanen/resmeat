import { useParams } from 'react-router-dom';
import Leaderboard from '../components/Leaderboard';
import { Card, makeStyles, Typography } from '@material-ui/core';
import ProductDescription from '../components/ProductDescription';
import data from '../data/data.json';

const useStyles = makeStyles((theme) => ({
  card: {
    width: '100%',
    marginBottom: '30px',
    padding: '10px',
    backgroundColor: theme.palette.primary.main,
    color: 'white',
  },
  recommendation: {
    marginTop: '20px',
  },
}));

function LeaderBoardView() {
  let { productid, gamescore } = useParams();
  const classes = useStyles();

  const ScoreResult = () => {
    const productData = data[1]['products'][2];
    return (
      <Card className={classes.card}>
        <Typography variant="h5">
          Congrats, you got extra {gamescore} points in the game!
        </Typography>
        <Typography variant="body1">
          You got {Number(gamescore) + 8} total points. Your products responsibility score was{' '}
          <b>B</b>.
        </Typography>
        <Typography variant="body1" className={classes.recommendation}>
          <b>Next time you could consider getting a more responsible product like:</b>
        </Typography>
        <ProductDescription product={productData} />
      </Card>
    );
  };

  return (
    <>
      {productid && gamescore && <ScoreResult />}
      <Leaderboard />
    </>
  );
}

export default LeaderBoardView;
