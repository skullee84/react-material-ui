import React, { Component } from 'react';
import {
  Grid,
  withStyles
} from '@material-ui/core';

class News extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Grid className={classes.root}>
        news
      </Grid>
    );
  }
}

const styles = theme => ({
  root: {
  }
});

export default withStyles(styles)(News);
