import { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography, Modal, Backdrop, Fade, ListItem, ListItemText, Fab, ListItemIcon } from '@material-ui/core';
import CameraAltIcon from '@material-ui/icons/CameraAlt';
import CloseIcon from '@material-ui/icons/Close';
import QrReader from 'react-qr-reader';
import { Redirect } from 'react-router-dom';
import useLocalStorage from '../hooks/useLocalStorage';

const useStyle = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',

  },
  grid: {
    position: 'absolute',
    padding: '16px',
    background: theme.palette.primary.background,
    zIndex: 20000
  },
  instruction: {
    margin: '20px 0',
  },
  exitButton: {
    backgroundColor: '#ff0000',
    color: '#fff'
  },
  fab: {
    position: 'absolute',
    bottom: '40px',
    right: '40px',
    zIndex: 20001
  }
}));

const QRReader = (props) => {
  const initialState = {
    id: null,
    readQR: false,
    error: false,
    url: null,
  };
  const [state, setState] = useState(initialState);
  const [lastScanned, setLocalStorage] = useLocalStorage('last_scanned', []);
  const classes = useStyle();

  const handleScan = (data) => {
    if (
      data &&
      data.match(
        /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_.~#?&//=]*)/g
      ) !== null &&
      data.includes('https://resmeat.com')
    ) {
      const productId = Number(data.split('/').pop());
      setState({
        ...state,
        readQR: false,
        url: productId,
      });
      if (!lastScanned.includes(productId)) {
        const updatedLastScanned = [...lastScanned];
        updatedLastScanned.unshift(productId);
        updatedLastScanned.pop();
        setLocalStorage(updatedLastScanned);
      }
    } else if (data !== null) {
      alert('Invalid QR code!');
    }
  };

  const handleError = (err) => {
    setState({ ...state, error: true });
    console.log('error', err);
  };

  const render = () => {
    if (state.readQR === true) {
      return (
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          className={classes.modal}
          open={state.readQR}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}>
          <Fade in={state.readQR}>
            <Grid item xs={12} className={`qr-reader ${classes.grid}`}>
              <Typography variant="h4" align="center" className={classes.instruction}>
                {'Scan the QR code from the package'}
              </Typography>
              <QrReader
                delay={300}
                onError={handleError}
                onScan={handleScan}
                style={{ width: '100%' }}
              />
            </Grid>
          </Fade>
        </Modal>
      );
    }
  };

  return (
    <>
      {state.url !== null && <Redirect to={`/product/${state.url}`} />}
      {render()}
      <ListItem button key={'scan'} onClick={() => { setState({ ...state, readQR: true, url: null }) }}>
        <ListItemIcon>
          <CameraAltIcon />
        </ListItemIcon>
        <ListItemText primary={'Scan QR code'} />
      </ListItem>
    </>
  );
};

export default QRReader;
