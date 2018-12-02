import React, { Component } from "react";
import { Link, withRouter, Route } from "react-router-dom";
import PropTypes from "prop-types";
import { Button, withStyles, TextField } from "@material-ui/core";
class New extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    // const { classes } = this.props;
    return (
      <div className=" col-md-12 col-sm-12 col-lg-12   row">
        <Link to="/new/women">
          <div className=" row col-md-12 col-sm-12 col-lg-12">Women </div>
        </Link>
        <Link to="/new/men">
          <div className=" row col-md-12 col-sm-12 col-lg-12">MAN</div>
        </Link>
        <Link to="/new/kids">
          <div className=" row col-md-12 col-sm-12 col-lg-12">KIDS</div>
        </Link>
      </div>
    );
  }
}
{
}

const styles = theme => ({
  underline: {
    backgroundColor: "yellow",
    color: "green"
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
    color: "white",
    backgroundColor: "red"
  },
  focused: {
    "&$focused": {
      color: "white",
      fontSize: 40
    }
  },
  input: {
    borderColor: "white",
    color: "white"
  },
  floatingLabel: {
    fontFamily: "Neue-Helvetica-Condensed",
    color: "white",
    pointerEvents: "white"
  },
  button: {
    margin: theme.spacing.unit
  },
  leftIcon: {
    marginRight: theme.spacing.unit
  },
  rightIcon: {
    marginLeft: theme.spacing.unit
  },
  iconSmall: {
    fontSize: 20
  }
});
// New.propTypes = {
//   classes: PropTypes.object.isRequired
// };
export default New;
