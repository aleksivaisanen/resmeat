import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#134074',
      background: '#EEF5FC'
    },
    secondary: {
      main: '#13315C',
    },
  },
  overrides: {
    MuiGrid: {
      root: {
        '&:not(:first-child)': {
          '&:not(.MuiGrid-grid-xs-4)': {
            '&:not(.qr-reader)': {
              marginTop: "20px",
            }
          }
        }
      }
    },
    MuiCard: {
      root: {
        backgroundColor: '#fff',
        minHeight: '120px',
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
