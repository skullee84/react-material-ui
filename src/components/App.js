import React, { Component } from 'react';
import { Switch, Route } from 'react-router'
import {
  Grid,
  withStyles
} from '@material-ui/core';

import Header from 'components/common/Header';
import Home from 'components/home/Home';
import News from 'components/news/News';

class App extends Component {
  render() {
    const { classes } = this.props;

    return (
      <Grid className={classes.root}>
        <Header />
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/news" component={News}/>
        </Switch>
      </Grid>
    );
  }
}

const styles = theme => ({
  root: {
    flexGrow: 1,
  }
});

export default withStyles(styles)(App);
