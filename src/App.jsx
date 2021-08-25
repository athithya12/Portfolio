import { CssBaseline, MuiThemeProvider } from '@material-ui/core';
import React from 'react';
import Routes from './Routes';
import theme from './theme';

const App = () => (
  <MuiThemeProvider theme={theme}>
    <CssBaseline />
    <Routes />
  </MuiThemeProvider>
);

export default App;
