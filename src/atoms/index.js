import React from 'react';
import './index.css';

import Fade from '@material-ui/core/Fade';
// import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  button: {
    margin: theme.spacing(2),
  },
  placeholder: {
    height: 40,
  },
}));

const LoadingSpinner = ({ loading }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.placeholder}>
        <Fade
          in={loading}
          style={{
            transitionDelay: loading ? '800ms' : '0ms',
          }}
          unmountOnExit
        >
          <CircularProgress />
        </Fade>
        <h3 style={{ color: 'white' }}>LOOADING...</h3>
      </div>
    </div>
  );
};

export default LoadingSpinner;
