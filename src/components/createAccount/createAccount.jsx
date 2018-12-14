import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import Menu from "../menu/menu";
import Footer from "../footer/footer";
import {
  FormControlLabel,
  Checkbox,
  Button,
  withStyles,
  TextField
} from "@material-ui/core";
class CreateAccount extends Component {
  constructor(props) {
    super(props);
    this.state = { email: "", readPolicies: false };
  }
  fetchEmail(event) {
    this.setState({ email: event.target.value });
  }
  readPolicies(event) {
    this.setState({ readPolicies: event.target.checked });
    console.log("after", this.state.readPolicies);
  }
  createAccount() {}
  render() {
    const { classes } = this.props;
    return (
      <div>
        <div style={{ zIndex: -9 }}>
          <Menu
            login={false}
            contact={true}
            search={false}
            color="black"
            basket={true}
          />
        </div>
        <div className="" style={{ height: "35vh", zIndex: 22222 }} />
        <div className="row justify-content-center col-md-12 col-lg-12 col-sm-12 ">
          <div
            style={{
              fontSize: 30,
              fontWeight: "bold",
              fontFamily:
                "NeueHelvetica  Condensed Roboto Condensed Helvetica Arial Sans-Serif"
            }}
            className="text-center col-md-4 col-lg-4 row justify-content-end"
          >
            Write your personal details
          </div>
        </div>
        <div className="row justify-content-center col-md-12 col-lg-12 col-sm-12 ">
          <div className="row justify-content-center col-md-5 col-lg-5 col-sm-5 ">
            <TextField
              style={{ width: "60%" }}
              InputProps={{ disableUnderline: false }}
              id="outlined-name"
              label="E-mail "
              type="email"
              value={this.state.email}
              onChange={event => this.fetchEmail(event)}
              margin="normal"
              classes={{}}
            />
          </div>
          <div className="row justify-content-center col-md-5 col-lg-5 col-sm-5 ">
            <TextField
              style={{ width: "60%" }}
              InputProps={{ disableUnderline: false }}
              id="outlined-name"
              label="Password "
              type="password"
              value={this.state.email}
              onChange={event => this.fetchEmail(event)}
              margin="normal"
              classes={{}}
            />
          </div>
        </div>
        <div className="row justify-content-center col-md-12 col-lg-12 col-sm-12 ">
          <div className="row justify-content-center col-md-5 col-lg-5 col-sm-5 ">
            <TextField
              style={{ width: "60%" }}
              InputProps={{ disableUnderline: false }}
              id="outlined-name"
              label="Repeat Password "
              type="password"
              value={this.state.email}
              onChange={event => this.fetchEmail(event)}
              margin="normal"
              classes={{}}
            />
          </div>
          <div className="row justify-content-center col-md-5 col-lg-5 col-sm-5 ">
            <TextField
              style={{ width: "60%" }}
              InputProps={{ disableUnderline: false }}
              id="outlined-name"
              label="Name "
              type="text"
              value={this.state.email}
              onChange={event => this.fetchEmail(event)}
              margin="normal"
              classes={{}}
            />
          </div>
        </div>
        <div className="row justify-content-center col-md-12 col-lg-12 col-sm-12 ">
          <div className="row justify-content-center col-md-5 col-lg-5 col-sm-5 ">
            <TextField
              style={{ width: "60%" }}
              InputProps={{ disableUnderline: false }}
              id="outlined-name"
              label="SureName "
              type="text"
              value={this.state.email}
              onChange={event => this.fetchEmail(event)}
              margin="normal"
              classes={{}}
            />
          </div>
          <div className="row justify-content-center col-md-5 col-lg-5 col-sm-5 ">
            <TextField
              style={{ width: "60%" }}
              InputProps={{ disableUnderline: false }}
              id="outlined-name"
              label="Town "
              type="text"
              value={this.state.email}
              onChange={event => this.fetchEmail(event)}
              margin="normal"
              classes={{}}
            />
          </div>
        </div>
        <div className="row justify-content-center col-md-12 col-lg-12 col-sm-12 ">
          <div className="row justify-content-center col-md-5 col-lg-5 col-sm-5 ">
            <TextField
              style={{ width: "60%" }}
              InputProps={{ disableUnderline: false }}
              id="outlined-name"
              label="Psotal Code "
              type="text"
              value={this.state.email}
              onChange={event => this.fetchEmail(event)}
              margin="normal"
              classes={{}}
            />
          </div>
          <div className="row justify-content-center col-md-5 col-lg-5 col-sm-5 ">
            <TextField
              style={{ width: "60%" }}
              InputProps={{ disableUnderline: false }}
              id="outlined-name"
              label="Region "
              type="text"
              value={this.state.email}
              onChange={event => this.fetchEmail(event)}
              margin="normal"
              classes={{}}
            />
          </div>
        </div>
        <div className="row justify-content-center col-md-12 col-lg-12 col-sm-12 ">
          <div className="row justify-content-center col-md-5 col-lg-5 col-sm-5 ">
            <TextField
              style={{ width: "60%" }}
              InputProps={{ disableUnderline: false }}
              id="outlined-name"
              label="Phone "
              type="text"
              value={this.state.email}
              onChange={event => this.fetchEmail(event)}
              margin="normal"
              classes={{}}
            />
          </div>
          <div className="row justify-content-center col-md-12 col-lg-12 col-sm-12 ">
            <TextField
              style={{ width: "80%" }}
              InputProps={{ disableUnderline: false }}
              id="outlined-name"
              label="Address "
              type="text"
              value={this.state.email}
              onChange={event => this.fetchEmail(event)}
              margin="normal"
              classes={{}}
            />
          </div>
        </div>
        <div className="pt-5 row justify-content-center col-md-12 col-lg-12 col-sm-12 ">
          <input
            id="checkbox"
            checked={this.state.readPolicies}
            type="Checkbox"
            onChange={event => this.readPolicies(event)}
          />
          <label className="p-2 mt-1" htmlFor="checkbox">
            I have read and understand the Privacy and Cookies Policy
          </label>
        </div>
        <div className="pt-5 row justify-content-center col-md-12 col-lg-12 col-sm-12 ">
          <Button
            className="p-3"
            onClick={() => this.createAccount()}
            variant="contained"
            style={{
              color: "white",
              backgroundColor: "#000000",
              marginTop: "6%",
              width: "60%",
              border: 0,
              borderRadius: 0
            }}
          >
            CREATE ACCOUNT
          </Button>
        </div>

        <Footer />
      </div>
    );
  }
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
CreateAccount.propTypes = {
  classes: PropTypes.object.isRequired
};
export default (withRouter, withStyles)(styles)(CreateAccount);
