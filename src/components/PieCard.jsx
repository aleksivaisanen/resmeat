import { useState } from 'react';
import { makeStyles, Card, Typography, TableContainer, TableHead, Table, TableRow, TableCell } from '@material-ui/core';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import PieChart from "./Pie"
import { useParams, useLocation } from 'react-router-dom';

const useStyles = makeStyles({
  container: {
    width: '100%',
    height: '100%',
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    paddingTop: '100px'
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
  icon: {
    fontSize: '3rem',
    color: "green"
  },
  centered: {
    display: "flex",
    alignItems: "center",
  },
  eu: {
    color: 'rgb(69, 123, 157)'
  },
  upper: {
    marginTop: "-50px"
  }
})

const scale = {
  1: "D",
  2: "C",
  3: "B",
  4: "A",
  5: 'A+'
}

export const PieCard = ({ data, content, extraContent }) => {
  const { pathname } = useLocation();
  const { farmid, productid } = useParams();

  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(null);
  const classes = useStyles({ open });
  const total = data.reduce((a, b) => a + b.value, 0);
  const avg = Math.ceil(total / 3);

  return (
    <div className={classes.container}>
      <div className={classes.pie}><PieChart data={data} active={active} setActive={setActive} innerText={scale[avg]} /></div>
      <Card className={classes.cardContainer} onClick={() => setOpen(!open)} role="button">
        <div className={classes.contentWrapper}>
          <div>
            <Typography className={classes.upper}>Better than <span className={classes.eu}>EU</span></Typography>
            <Typography className={classes.centered} variant="h3">35% <ArrowDropUpIcon className={classes.icon} /></Typography>
          </div>
          <div>
            <Typography className={classes.upper}>Better than <span className={classes.eu}>FIN</span></Typography>
            <Typography className={classes.centered} variant="h3">1% <ArrowDropUpIcon className={classes.icon} /></Typography>
          </div>
          {content}
        </div>
        {open && (
          <div className={classes.contentWrapper}>
            {extraContent}
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Total on farm</TableCell>
                    <TableCell align="right">Total of product</TableCell>
                    <TableCell align="right">Wheat production</TableCell>
                    <TableCell align="right">Industrial feed</TableCell>
                    <TableCell align="right">Manure system</TableCell>
                    <TableCell align="right">Energy</TableCell>
                  </TableRow>
                </TableHead>
              </Table>
            </TableContainer>
          </div>
        )}
      </Card>
    </div>
  )
}

export default PieCard;