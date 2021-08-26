import { makeStyles, Typography } from '@material-ui/core';
import PropTypes from 'prop-types';
import React from 'react';
import useHover from '../../hooks/useHover';

const useStyles = makeStyles((theme) => ({
  activeLink: {
    color: theme.palette.primary.main,
  },
  hoverLink: {
    color: theme.palette.primary.main,
    cursor: 'pointer',
  },
}));

const HeaderItem = ({ active, children }) => {
  const classes = useStyles();

  const [hover, hoverProps] = useHover();

  const getStyles = () => {
    if (active) {
      return classes.activeLink;
    }
    if (hover) {
      return classes.hoverLink;
    }
    return null;
  };

  return (
    <Typography variant="body1" className={getStyles()} {...hoverProps}>
      {children}
    </Typography>
  );
};

HeaderItem.defaultProps = {
  active: false,
};

HeaderItem.propTypes = {
  active: PropTypes.bool,
  children: PropTypes.string.isRequired,
};

export default HeaderItem;
