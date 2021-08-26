import { CssBaseline, MuiThemeProvider } from '@material-ui/core';
import React from 'react';
import Header from './components/Header/Header';
import useComponentHeight from './hooks/useComponentHeight';
import useScroll from './hooks/useScroll';
import Routes from './Routes';
import theme from './theme';

const App = () => {
  const scrollPos = useScroll();
  const heights = {
    home: useComponentHeight('HOME'),
    about: useComponentHeight('ABOUT'),
    projects: useComponentHeight('PROJECTS'),
    contact: useComponentHeight('CONTACT'),
  };

  return (
    <MuiThemeProvider theme={theme}>
      <Header scrollPos={scrollPos} heights={heights} />
      <CssBaseline />
      <Routes />
    </MuiThemeProvider>
  );
};

export default App;
