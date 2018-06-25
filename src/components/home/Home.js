import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import _ from "lodash";
import { Grid, Paper, Button, withStyles } from "@material-ui/core";

import * as commonAction from "actions/commonAction";

class Home extends Component {
  componentDidMount() {
    this.props.commonAction.fetchCommon();
  }

  render() {
    const { classes } = this.props;

    return (
      <Grid className={classes.root}>
        <Paper className={classes.paper} elevation={0}>
          <Grid container>
            <Grid item>
              <Button onClick={this.handle}>Add</Button>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    );
  }
}

const styles = theme => ({
  root: {},
  paper: {
    height: 300
  }
});

const mapStateToProps = state => {
  return {
    commonStore: state.commonStore
  };
};

const mapDispatchToProps = dispatch => {
  return {
    commonAction: bindActionCreators(_.assign({}, commonAction), dispatch)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(Home));
