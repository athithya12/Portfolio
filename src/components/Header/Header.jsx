import { AppBar, Grid, Hidden, makeStyles, Toolbar } from '@material-ui/core';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import headerItems from '../../constants/headerItems';
import HeaderItem from './HeaderItem';

const useStyles = makeStyles(() => ({
  home: {
    background: '#252933',
    boxShadow: 'none',
    color: '#FFFFFF',
  },
  about: {
    background: '#FFFFFF',
    boxShadow: 'none',
    color: '#252933',
  },
  projects: {},
  contact: {},
}));

const Header = ({ heights, scrollPos }) => {
  const classes = useStyles();

  const [section, setSection] = useState(0);

  useEffect(() => {
    if (scrollPos >= 0 && scrollPos < heights.home) {
      setSection(0);
    } else if (
      scrollPos >= heights.home &&
      scrollPos < heights.home + heights.about
    ) {
      setSection(1);
    } else if (
      scrollPos >= heights.home + heights.about &&
      scrollPos < heights.home + heights.about + heights.projects
    ) {
      setSection(2);
    } else if (
      scrollPos >= heights.home + heights.about + heights.projects &&
      scrollPos <
        heights.home + heights.about + heights.projects + heights.contact
    ) {
      setSection(3);
    }
  }, [scrollPos]);

  return (
    <Hidden xsDown>
      <AppBar position="fixed" className={classes.home}>
        <Toolbar>
          <Grid container direction="row" justifyContent="center">
            <Grid
              container
              item
              direction="row"
              sm={8}
              lg={6}
              justifyContent="space-evenly"
            >
              {headerItems.map((val, key) => (
                <Grid item key={val}>
                  <Link to={val} spy smooth duration={500}>
                    <HeaderItem active={key === section}>{val}</HeaderItem>
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

Header.propTypes = {
  scrollPos: PropTypes.number.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  heights: PropTypes.object.isRequired,
};

export default Header;
