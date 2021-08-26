import { Box, Button, Grid, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import { Element } from 'react-scroll';
import Typer from './Typer';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: '#252933',
    height: '100vh',
    color: '#FFFFFF',
  },
  name: {
    fontWeight: 500,
  },
  text: {
    [theme.breakpoints.up('xs')]: {
      fontSize: 24,
    },
    [theme.breakpoints.up('sm')]: {
      fontSize: 32,
    },
    [theme.breakpoints.up('md')]: {
      fontSize: 40,
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: 48,
    },
  },
  profession: {
    color: theme.palette.primary.main,
  },
  anchor: {
    '&:hover': {
      backgroundColor: theme.palette.primary.main,
      color: '#FFFFFF',
    },
    [theme.breakpoints.up('sm')]: {
      padding: '10px 25px 10px 25px',
      fontSize: 16,
    },
  },
}));

const Home = () => {
  const classes = useStyles();
  return (
    <Element name="HOME">
      <Grid
        container
        direction="row"
        alignItems="center"
        className={classes.root}
      >
        <Grid container item xs={12} alignItems="center">
          <Grid container direction="column" justifyContent="center">
            <Grid container item xs={12} justifyContent="center">
              <Typography variant="h1" className={classes.text}>
                Hello, I am{' '}
                <span className={classes.name}>Athithya Vidyarth</span>
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Box heighanchort={8} />
            </Grid>
            <Grid item xs={12}>
              <Grid container direction="row" justifyContent="center">
                <Grid item>
                  <Typography variant="h1" className={classes.text}>
                    I am a&nbsp;
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant="h1" className={classes.text}>
                    <span className={classes.profession}>
                      <Typer />
                    </span>
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Box height={16} />
          </Grid>
          <Grid container item xs={12} justifyContent="center">
            <Button
              type="button"
              variant="outlined"
              color="primary"
              size="large"
              className={classes.anchor}
            >
              MORE ABOUT ME
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Element>
  );
};

export default Home;
