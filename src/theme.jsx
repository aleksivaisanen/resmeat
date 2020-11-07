import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#134074',
    },
    secondary: {
      main: '#13315C',
    },
  },
  overrides: {
    MuiCard: {
      root: {
        backgroundColor: '#FDF1EC',
        minHeight: '120px',
        marginTop: "10px",
      },
    },
  },
});

export default theme;

/* body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell',
    'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
*/
