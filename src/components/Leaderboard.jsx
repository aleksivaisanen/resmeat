import { makeStyles } from '@material-ui/core/styles';
import { Typography, List, ListItem, ListItemText, ListItemAvatar, Avatar, Divider, Card } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  gold: {
    color: "#fff",
    backgroundColor: "#f5d742",
    width: '60px',
    height: '60px'
  },
  silver: {
    color: "#000",
    backgroundColor: "#d1d1d1",
    width: '55px',
    height: '55px'
  },
  bronze: {
    color: "#fff",
    backgroundColor: "#d17000",
    width: '50px',
    height: '50px'
  },
  heading: {
    margin: '16px',
  },
  text: {
    marginLeft: '10px'
  },
  listItemAvatar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    width: '100%'
  }
}));

const Leaderboard = () => {
  const classes = useStyles();
  const scores = [
    {
      place: '1st',
      name: 'Aleksi Väisänen',
      points: '230',
      class: 'gold'
    },
    {
      place: '2nd',
      name: 'Matias Lappalainen',
      points: '212',
      class: 'silver'
    },
    {
      place: '3rd',
      name: 'Petro Silenius',
      points: '71',
      class: 'bronze'
    },
  ]

  return (
    <Card className={classes.card}>
      <List className={classes.list}>
        <Typography variant="h6" className={classes.heading}>Monthly leaderboard</Typography>
        {scores.map(item => {
          return (
            <>
              <Divider variant="fullWidth" component="li" />
              <ListItem>
                <ListItemAvatar className={classes.listItemAvatar}>
                  <Avatar className={classes[item.class]}>
                    {item.place}
                  </Avatar>
                </ListItemAvatar>
                <ListItemText className={classes.text} primary={item.name} secondary={`${item.points} points`} />
              </ListItem>
            </>
          )
        })}
      </List>
    </Card>
  )
}

export default Leaderboard;