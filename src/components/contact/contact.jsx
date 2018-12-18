import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import Menu from "../menu/menu";
import Chat from "@material-ui/icons/ChatBubbleOutline";
import Media from "@material-ui/icons/AlternateEmail";
import Camera from "@material-ui/icons/Camera";
import Phone from "@material-ui/icons/Phone";
import Footer from "../footer/footer";
import { Button, withStyles, TextField } from "@material-ui/core";
class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  fetchEmail(event) {
    this.setState({ email: event.target.value });
  }
  render() {
    console.log("it is the props:", this.props);

    const { classes } = this.props;
    return (
      <div>
        <div style={{ zIndex: -9 }}>
          <Menu
            menuItems={true}
            login={false}
            contact={true}
            search={false}
            color="black"
            basket={true}
          />
        </div>
        <div className="" style={{ height: "35vh", zIndex: 22222 }} />
        <div className="col-md-12 col-lg-12 col-sm-12">
          <div
            style={{
              fontSize: 30,
              fontWeight: "bold",
              fontFamily:
                "NeueHelvetica  Condensed Roboto Condensed Helvetica Arial Sans-Serif"
            }}
            className="col-md-12 col-lg-12 col-sm-12 row justify-content-center"
          >
            <div className="col-md-6 col-lg-6 col-sm-6 p-3 border-bottom">
              Customer service
            </div>
          </div>
          <div className="col-md-12 pt-4 col-lg-12 col-sm-12 row justify-content-center">
            <div className="row col-md-6 col-sm-6 col-lg-6">
              <Chat fontSize="large" style={{ color: "gray" }} />
              <div style={{ fontWeight: "bold" }} className="pl-3 pt-1">
                Chat
              </div>
            </div>
          </div>
          <div className="col-md-12 col-lg-12 col-sm-12 row justify-content-center">
            <div
              style={{ fontWeight: "bold" }}
              className="text-secondary row justify-content-start col-md-6 p-5"
            >
              Schedule: 24x7
            </div>
          </div>
          <div className="col-md-12 col-lg-12 col-sm-12 row justify-content-center">
            <div className="col-md-6 col-lg-6 col-sm-6 row justify-content-end border-bottom p-5">
              <Button
                className="p-3"
                variant="contained"
                style={{
                  color: "white",
                  backgroundColor: "#000000",
                  width: "20%",
                  border: 0,
                  borderRadius: 0
                }}
              >
                ACCESS
              </Button>
            </div>
          </div>

          <div className="col-md-12 pt-4 col-lg-12 col-sm-12 row justify-content-center">
            <div className="row col-md-6 col-sm-6 col-lg-6">
              <Phone fontSize="large" style={{ color: "gray" }} />
              <div style={{ fontWeight: "bold" }} className="pl-3 pt-1">
                Telephone
              </div>
            </div>
          </div>
          <div className="col-md-12 col-lg-12 col-sm-12 row justify-content-center">
            <div
              style={{ fontWeight: "bold" }}
              className="text-secondary row justify-content-start col-md-6 p-5"
            >
              +98 936 775 1890
            </div>
          </div>
          <div
            style={{ fontWeight: "bold" }}
            className="text-secondary text-left row justify-content-center col-md-12 p-5"
          >
            Monday to Friday from 8:30 am to 7:30 pmSaturday from 10:00 am to
            4:00 pm
          </div>
          <div className="col-md-12 col-lg-12 col-sm-12 row justify-content-center">
            <div className="col-md-6 col-lg-6 col-sm-6 row justify-content-end border-bottom p-5" />
          </div>

          <div className="col-md-12 pt-4 col-lg-12 col-sm-12 row justify-content-center">
            <div className="row col-md-6 col-sm-6 col-lg-6">
              <Media fontSize="large" style={{ color: "gray" }} />
              <div style={{ fontWeight: "bold" }} className="pl-3 pt-1">
                Social media
              </div>
            </div>
          </div>
          <div className="col-md-12 col-lg-12 col-sm-12">
            <div
              style={{ fontWeight: "bold" }}
              className="text-secondary row justify-content-center col-md-8 pb-2 pt-4 "
            >
              <i className="fab fa-facebook pr-2" style={{ fontSize: 20 }} />
              <a className="text-dark" href="">
                Facebook
              </a>
            </div>
            <div
              style={{ fontWeight: "bold" }}
              className="text-secondary row justify-content-center col-md-8 "
            >
              <i className="fab fa-instagram pr-2" style={{ fontSize: 20 }} />
              <a className="text-dark" href="">
                Instagram
              </a>
            </div>
          </div>

          <div className="col-md-12 col-lg-12 col-sm-12 row justify-content-center">
            <div className="col-md-6 col-lg-6 col-sm-6 row justify-content-end border-bottom p-5" />
          </div>
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
Contact.propTypes = {
  classes: PropTypes.object.isRequired
};
export default (withRouter, withStyles)(styles)(Contact);
