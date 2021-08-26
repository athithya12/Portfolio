import { makeStyles, Typography } from '@material-ui/core';
import PropTypes from 'prop-types';
import React from 'react';
import useHover from '../../hooks/useHover';

const useStyles = makeStyles((theme) => ({
  link: {},
  hoverLink: {
    color: theme.palette.primary.main,
    cursor: 'pointer',
  },
}));

const HeaderItem = ({ children }) => {
  const classes = useStyles();

  const [hover, hoverProps] = useHover();

  return (
    <Typography
      variant="body1"
      className={hover ? classes.hoverLink : null}
      {...hoverProps}
    >
      {children}
    </Typography>
  );
};

HeaderItem.propTypes = {
  children: PropTypes.string.isRequired,
};

export default HeaderItem;
