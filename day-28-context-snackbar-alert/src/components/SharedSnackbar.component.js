import { IconButton, Snackbar } from '@material-ui/core';
import { Close } from '@material-ui/icons';
import React from 'react';
import { SharedSnackbarConsumer } from '../providers/SharedSnackbar.context';

const SharedSnackbar = () => (
  <SharedSnackbarConsumer>
    {({ snackbarIsOpen, message, closeSnackbar }) => (
      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        open={snackbarIsOpen}
        autoHideDuration={6000}
        onClose={closeSnackbar}
        message={message}
        action={[
          <IconButton key='close' color='inherit' onClick={closeSnackbar}>
            <Close />
          </IconButton>,
        ]}
      ></Snackbar>
    )}
  </SharedSnackbarConsumer>
);

export default SharedSnackbar;
