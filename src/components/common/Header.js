import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import {
  Grid,
  AppBar,
  Toolbar,
  Typography,
  Button,
  withStyles
} from '@material-ui/core';

class Header extends Component {
  render() {
    const { classes, location } = this.props;

    return (
      <AppBar position='static' color='default'>
        <Toolbar className={classes.toolbar}>
          <Grid container spacing={8} alignItems='center'>
            <Grid item>
              <Typography variant='title' color='inherit'>
                Dominic
              </Typography>
            </Grid>

            <Grid item>
              <Grid container spacing={8} alignItems='center'>
                <Grid item>
                  <Button
                    size='small'
                    variant={location.pathname === '/' ? 'outlined' : 'flat'}
                    component={Link}
                    to='/'>
                    Home
                  </Button>
                </Grid>
                <Grid item>
                  <Button size='small'
                    variant={location.pathname === '/news' ? 'outlined' : 'flat'}
                    component={Link}
                    to='/news'>
                    News
                  </Button>
                </Grid>
                <Grid item>
                  <Button size='small'
                    variant={location.pathname === '/group' ? 'outlined' : 'flat'}
                    component={Link}
                    to='/group'>
                    Group
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    );
  }
}

const styles = theme => ({
  toolbar: {
    // minHeight: 'auto'
  }
});

export default withStyles(styles)(withRouter(Header));