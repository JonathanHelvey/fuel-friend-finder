import React from 'react';

import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  placeholder: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
}));

const LoadingSpinner = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <h3 style={{ color: 'white' }}>LOOADING...</h3>
      <div className={classes.placeholder}>
        <CircularProgress color="secondary" />
      </div>
    </div>
  );
};

export default LoadingSpinner;
