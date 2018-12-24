import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import Alert from "react-s-alert";
import Menu from "../menu/menu";
import Footer from "../footer/footer";
import { Button, withStyles, TextField } from "@material-ui/core";
class ResetPassword extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  fetchEmail(event) {
    this.setState({ email: event.target.value });
  }
  resetPassword() {
    fetch(`http://192.168.1.183:3003/resetpassword`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email: this.state.email
      })
    })
      .then(response => response.json())
      .then(responseJson => {
        if (responseJson)
          this.props.history.push({ pathname: "/passwordSentsuccessfully" });
        else {
          Alert.error("ایمیل اشتباه است", {
            position: "bottom-right",
            effect: "slide",
            timeout: 2000
          });
        }
      })
      .catch(error => {
        Alert.error("خطا در ارسال اطلاعات", {
          position: "bottom-right",
          effect: "slide",
          timeout: 2000
        });
      });
  }
  render() {
    const { classes } = this.props;
    return (
      <div>
        <Alert stack={{ limit: 3 }} />
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
        <div className="col-md-12 col-lg-12 col-sm-12 row justify-content-center">
          <div
            style={{
              fontSize: 30,
              fontWeight: "bold",
              fontFamily:
                "NeueHelvetica  Condensed Roboto Condensed Helvetica Arial Sans-Serif"
            }}
            className="text-center col-md-5 col-lg-5 row justify-content-end"
          >
            Have you forgotten your password?
          </div>
        </div>
        <div className="col-md-12 pt-3 col-lg-12 col-sm-12 row justify-content-center">
          <TextField
            style={{ width: "40%" }}
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
        <div className="col-md-12 col-lg-12 col-sm-12 row justify-content-center">
          <Button
            onClick={() => this.resetPassword()}
            className="p-3 w-25"
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
            RESET PASSWORD
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
ResetPassword.propTypes = {
  classes: PropTypes.object.isRequired
};
export default withRouter(withStyles(styles)(ResetPassword));
