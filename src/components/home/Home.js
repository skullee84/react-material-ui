import React, { Component } from 'react';
import {
  Grid,
  Paper,
  withStyles
} from '@material-ui/core';

class Home extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Grid className={classes.root}>
        <Paper className={classes.paper} elevation={0}>
          <Grid container>
            <Grid item>
              A
            </Grid>
            <Grid item>
              B
            </Grid>
            <Grid item>
              C
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    );
  }
}

const styles = theme => ({
  root: {
  },
  paper: {
    // width: '100%',
    height: 300
  }
});

export default withStyles(styles)(Home);
