import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Box, Typography } from '@material-ui/core';

const styles =() => ({
  container: {
    height: '100%'
  }
});

const NotFound = () => (
  <Box>
    <Typography paragraph align="center" variant="h4" gutterBottom color="secondary">
      404 - Not Found
    </Typography>
  </Box>
);

export default withStyles(styles)(NotFound);