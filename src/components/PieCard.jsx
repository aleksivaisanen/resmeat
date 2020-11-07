import { makeStyles, Card } from '@material-ui/core';
import PieChart from "./Pie"

const useStyles = makeStyles({
  container: {
    width: '100%',
    height: '100%',
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    paddingTop: '170px'
  },
  pie: {
    position: "absolute",
    top: 0
  },
  cardContainer: {
    width: '100%',
    height: '100%',
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: '80px'
  },
  contentWrapper: {
    display: "flex",
    width: "100%",
    height: "100%",
    justifyContent: "space-between",
    margin: "20px"
  }
})

export const PieCard = ({ data, content, innerText }) => {

  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.pie}><PieChart data={data} innerText={innerText} /></div>
      <Card className={classes.cardContainer}>
        <div className={classes.contentWrapper}>{content}</div>
      </Card>
    </div>
  )
}

export default PieCard;