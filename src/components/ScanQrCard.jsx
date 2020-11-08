import { useState, useEffect } from 'react';
import { Card, Button, makeStyles, Typography } from '@material-ui/core';
import { useHistory, useParams } from 'react-router-dom';
import dayjs from 'dayjs';
import ChickenSwing from './ChickenSwing';

const useStyles = makeStyles((theme) => ({
  background: {
    background: theme.palette.primary.main,
    color: 'white',
  },
  centered: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  header: {
    width: '50%',
  },
  margin: {
    margin: '16px',
    textTransform: 'inherit',
  },
  color: {
    color: 'white',
  },
}));

export const ScanQrCard = () => {
  const classes = useStyles();

  return (
    <Card className={`${classes.centered} ${classes.background}`}>
      <div className={`${classes.header} ${classes.margin}`}>
        <Typography variant="h6">
          Scan a new product to collect more points and minimize your carbon footprint
        </Typography>
      </div>
      <Button size="large" variant="contained" className={classes.margin}>
        <Typography variant="h5">Scan QR</Typography>
      </Button>
    </Card>
  );
};

export default ScanQrCard;
