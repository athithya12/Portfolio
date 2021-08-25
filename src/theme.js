import { createTheme, responsiveFontSizes } from '@material-ui/core';

const theme = createTheme({
  palette: {
    primary: {
      main: '#45C2C8',
    },
  },
  typography: {
    fontFamily: ['Raleway', 'sans-serif'].join(','),
    h1: {
      fontSize: 48,
    },
  },
});

export default responsiveFontSizes(theme);
