import { makeStyles } from '@material-ui/core/styles';
import { Card, CardContent, CardHeader, Typography, Avatar } from '@material-ui/core';

const useStyles = makeStyles({
  card: {
    marginTop: '100px',
    overflow: 'visible',
  },
  avatar: {
    width: '200px',
    height: '200px',
    margin: '16px',
    marginTop: '-100px',
  },
  headerContainer: {
    display: 'flex',
  },
  cardHeader: {
    width: '70%',
  },
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

      <CardContent>
        <Typography paragraph>{product.description}</Typography>
      </CardContent>
    </Card>
  );
};

export default ProductDescription;
