import { CssBaseline, MuiThemeProvider } from '@material-ui/core';
import React from 'react';
import Header from './components/Header/Header';
import Routes from './Routes';
import theme from './theme';

const App = () => (
  <MuiThemeProvider theme={theme}>
    <Header />
    <CssBaseline />
    <Routes />
  </MuiThemeProvider>
);

export default App;
