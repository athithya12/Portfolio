import { AppBar, Grid, Hidden, makeStyles, Toolbar } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-scroll';
import headerItems from '../../constants/headerItems';
import HeaderItem from './HeaderItem';

const useStyles = makeStyles(() => ({
  root: {
    background: '#252933',
    boxShadow: 'none',
    color: '#FFFFFF',
  },
}));

const Header = () => {
  const classes = useStyles();

  return (
    <Hidden xsDown>
      <AppBar position="fixed" className={classes.root}>
        <Toolbar>
          <Grid container direction="row" sm={12} justifyContent="center">
            <Grid
              container
              direction="row"
              sm={8}
              lg={6}
              justifyContent="space-evenly"
            >
              {headerItems.map((val) => (
                <Grid item key={val}>
                  <Link to={val} spy smooth duration={500}>
                    <HeaderItem>{val}</HeaderItem>
                  </Link>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </Hidden>
  );
};

export default Header;
