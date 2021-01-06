import React from 'react';
import { Button } from '@material-ui/core';
import { SharedSnackbarConsumer } from '../providers/SharedSnackbar.context';

const styles = {
  button: {
    margin: 8,
  },
};

const ButtonA = () => (
  <SharedSnackbarConsumer>
    {({ openSnackbar }) => (
      <Button
        style={styles.button}
        variant='contained'
        color='primary'
        onClick={() => openSnackbar('You clicked Button A!')}
      >
        Button A
      </Button>
    )}
  </SharedSnackbarConsumer>
);

export default ButtonA;
