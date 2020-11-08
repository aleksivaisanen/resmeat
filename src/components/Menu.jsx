import { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Fab, Drawer, List, ListItem, ListItemText, Divider, ListItemIcon } from '@material-ui/core';
import AssessmentIcon from '@material-ui/icons/Assessment';
import HomeIcon from '@material-ui/icons/Home';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import CameraAltIcon from '@material-ui/icons/CameraAlt';
import QRReader from './QRReader';

const useStyle = makeStyles((theme) => ({
  fab: {
    position: 'fixed',
    bottom: '20px',
    right: '20px',
    zIndex: 10000
  },
  list: {
    width: '300px'
  }
}));

const Menu = () => {
  const classes = useStyle();
  const [open, setOpen] = useState(false);
  const [QROpen, setQROpen] = useState(false);

  useEffect(() => {

  },[])

  const MenuFab = () => {
    if (open === true) {
      return (
        <Fab color='primary' onClick={() => setOpen(false)} className={classes.fab}>
          <CloseIcon />
        </Fab>
      )
    } else {
      return (
        <Fab color='primary' onClick={() => setOpen(true)} className={classes.fab}>
          <MenuIcon />
        </Fab>
      )
    }
  }

  return (
    <>
      <QRReader open={QROpen} setQROpen={setQROpen} />
      <MenuFab />
      <Drawer anchor={'right'} open={open} onClose={() => setOpen(false)}>
        <List className={classes.list}>
          <ListItem button component="a" href="/" key={'home'}>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary={'Home'} />
          </ListItem>
          <Divider variant="fullWidth" component="li" />
          <ListItem button key={'scan'} onClick={() => { setQROpen(true); setOpen(false) }}>
            <ListItemIcon>
              <CameraAltIcon />
            </ListItemIcon>
            <ListItemText primary={'Scan QR code'} />
          </ListItem>
          <Divider variant="fullWidth" component="li" />
          <ListItem button component="a" href="/leaderboard" key={'leaderboard'}>
            <ListItemIcon>
              <AssessmentIcon />
            </ListItemIcon>
            <ListItemText primary={'Leaderboard'} />
          </ListItem>
          <Divider variant="fullWidth" component="li" />
        </List>
      </Drawer>
    </>
  )
}

export default Menu;