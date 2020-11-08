import { makeStyles } from '@material-ui/core/styles';
import { Card, CardContent, CardHeader, Typography, Avatar } from '@material-ui/core';

const useStyles = makeStyles({
  card: {
    marginTop: '75px',
    overflow: 'visible',
  },
  avatar: {
    width: '150px',
    height: '150px',
    margin: '16px',
    marginTop: '-50px',
  },
  headerContainer: {
    display: 'flex',
  },
  cardHeader: {
    width: '70%',
  },
  CardContent: {
    display: "flex",
    justifyContent: "space-between"
  },
  right: {
    textAlign: "end"
  }
});

const ProductDescription = (props) => {
  const classes = useStyles();
  const product = props.product;
  return (
    <Card className={classes.card}>
      <div className={classes.headerContainer}>
        <CardHeader
          title={product.name}
          subheader={product.weight}
          className={classes.cardHeader}
        />
        <Avatar src={`/images/${product.img}`} className={classes.avatar} />
      </div>

      <CardContent className={classes.CardContent}>
        <Typography paragraph>{product.description}</Typography>
      </CardContent>
    </Card>
  );
};

export default ProductDescription;
