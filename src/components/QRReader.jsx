import { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';
import QrReader from 'react-qr-reader';
import { Fab } from '@material-ui/core';
import CameraAltIcon from '@material-ui/icons/CameraAlt';
import CloseIcon from '@material-ui/icons/Close';
import { Redirect } from 'react-router-dom';

const useStyle = makeStyles(theme => ({
  fab: {
    position: "fixed",
    bottom: "20px",
    right: "40px",
  },
  grid: {
    position: 'absolute',
    top: '0',
    width: '100vw',
    height: 'calc(100vh - 32px)',
    background: theme.palette.primary.background
  },
  instruction: {
    margin: '20px 0',
  }
}));

const QRReader = (props) => {
  const initialState = {
    id: null,
    readQR: false,
    error: false,
    url: null
  }
  const [state, setState] = useState(initialState);
  const classes = useStyle();

  const handleScan = data => {
    if (data &&
      data.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_.~#?&//=]*)/g) !== null &&
      data.includes("https://resmeat.com")
    ) {
      setState({
        ...state,
        readQR: false,
        url: data.split('/').pop(),
      })
    } else if (data !== null) {
      alert('Invalid QR code!')
    }
  }

  const handleError = err => {
    setState({ ...state, error: true })
    console.log("error", err)
  }

  const render = () => {
    if (state.readQR === false) {
      return (
        <Fab className={classes.fab} color="primary" onClick={() => setState({ ...state, readQR: true })}>
          <CameraAltIcon />
        </Fab>
      )
    } else {
      return (
        <Grid item xs={12} className={classes.grid}>
          <Typography variant="h4" align="center" className={classes.instruction}>
            {'Scan the QR code from the package'}
          </Typography>
          <QrReader
            delay={300}
            onError={handleError}
            onScan={handleScan}
            style={{ width: '100%' }}
          />
          <Fab className={classes.fab} color="primary" onClick={() => setState({ ...state, readQR: false })}>
            <CloseIcon />
          </Fab>
        </Grid>
      )
    }
  }

  return (
    <>
      {state.url !== null && <Redirect to={`/farm/${state.url}`} />}
      {render()}
    </>
  )
}

export default QRReader;