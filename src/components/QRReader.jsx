import { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import QrReader from 'react-qr-reader';
import { Fab } from '@material-ui/core';
import CameraAltIcon from '@material-ui/icons/CameraAlt';

const useStyle = makeStyles(theme => ({
  fab: {
    position: "fixed",
    bottom: "20px",
    right: "40px",
  }
}));

const QRReader = (props) => {
  const initialState = {
    id: null,
    readQR: false,
    result: null,
    error: false
  }
  const [state, setState] = useState(initialState);
  const classes = useStyle();

  const handleScan = data => {
    if (data) {
      setState({
        ...state,
        result: data
      })
    }
  }

  const handleError = err => {
    setState({ ...state, error: true })
    console.log("error", err)
  }

  const render = () => {
    if (state.readQR === false) {
      return (
        <Fab className={classes.fab} color="primary" onClick={setState({ ...state, readQR: true })}>
          <CameraAltIcon />
        </Fab>
      )
    } else {
      return (
        <QrReader
          delay={300}
          onError={handleError}
          onScan={handleScan}
          style={{ width: '100%' }}
        />
      )
    }
  }

  return (
    <>
      {render()}
    </>
  )
}

export default QRReader;