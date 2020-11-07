import { useState } from 'react';
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
    paddingTop: '150px'
  },
  pie: {
    position: "absolute",
    top: 0
  },
  cardContainer: ({ open }) => ({
    width: '100%',
    minHeight: open ? "200px" : "unset",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: '80px',
    flexWrap: "wrap"
  }),
  contentWrapper: {
    display: "flex",
    width: "100%",
    height: "100%",
    justifyContent: "space-between",
    margin: "20px"
  },
})

export const PieCard = ({ data, content, extraContent, innerText }) => {
  const [open, setOpen] = useState(false);
  const classes = useStyles({ open });

  return (
    <div className={classes.container} onClick={() => setOpen(!open)} role="button">
      <div className={classes.pie}><PieChart data={data} innerText={innerText} /></div>
      <Card className={classes.cardContainer}>
        <div className={classes.contentWrapper}>
          {content}
        </div>
        {open && (
          <div className={classes.contentWrapper}>
            {extraContent}
          </div>
        )}
      </Card>
    </div>
  )
}

export default PieCard;