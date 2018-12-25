import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import Alert from "react-s-alert";
import Menu from "../menu/menu";
import Footer from "../footer/footer";
import { Button, withStyles, TextField } from "@material-ui/core";
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { email: "", password: "" };
  }

  fetchEmail(event) {
    this.setState({ email: event.target.value });
  }
  fetchPassword(event) {
    this.setState({ password: event.target.value });
  }
  login(userName) {
    fetch(`http://192.168.43.102:3003/user/login`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password
      })
    })
      .then(response => response.json())
      .then(responseJson => {
        if (responseJson) this.props.history.push({ pathname: "/profile" });
        else {
          Alert.error("ایمیل یا رمز عبور اشتباه است", {
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
            basket={false}
          />
        </div>
        <div className="" style={{ height: "50vh", zIndex: 22222 }} />
        <div className="row justify-content-end col-md-12 col-lg-12 col-sm-12 ">
          <div
            style={{
              fontSize: 30,
              fontWeight: "bold",
              fontFamily:
                "NeueHelvetica  Condensed Roboto Condensed Helvetica Arial Sans-Serif"
            }}
            className="text-center col-md-4 col-lg-4 row justify-content-end"
          >
            I am already a registered Zara user
          </div>
          <div
            style={{
              fontSize: 30,
              fontWeight: "bold",
              fontFamily:
                "NeueHelvetica  Condensed Roboto Condensed Helvetica Arial Sans-Serif"
            }}
            className="text-center col-md-5 col-lg-5 row justify-content-end"
          >
            I want a Zara user account
          </div>
        </div>

        <div className="row justify-content-end col-md-12 col-lg-12 col-sm-12 ">
          <div
            style={{
              fontFamily:
                "NeueHelvetica  Condensed Roboto Condensed Helvetica Arial Sans-Serif"
            }}
            className=" col-md-5 col-lg-5 row justify-content-start"
          >
            Please enter your e-mail address and password to identify yourself.
          </div>
          <div
            style={{
              fontFamily:
                "NeueHelvetica  Condensed Roboto Condensed Helvetica Arial Sans-Serif"
            }}
            className="text-right col-md-4  col-lg-4 row justify-content-end"
          >
            If you still don't have a Zara.com account, use this option to
            access the registration form.
          </div>
          <div
            style={{
              fontFamily:
                "NeueHelvetica  Condensed Roboto Condensed Helvetica Arial Sans-Serif"
            }}
            className="pt-3 text-right col-md-4  col-lg-4 row justify-content-end"
          >
            By giving us your details, purchasing in Zara.com will be faster and
            an enjoyable experience.
          </div>
        </div>

        <div className="pt-5 row justify-content-end col-md-12 col-lg-12 col-sm-12 ">
          <div className="row justify-content-end col-md-5 col-lg-5">
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
          <div className="row justify-content-end col-md-5 col-lg-5">
            <Link
              style={{ textDecoration: "none" }}
              className="row justify-content-end  col-md-12"
              to="/createAccount"
            >
              <Button
                className="p-3"
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
            </Link>
          </div>
        </div>

        <div className="pt-5 row justify-content-center col-md-12 col-lg-12 col-sm-12 ">
          <div className="row pl-5 justify-content-start col-md-4 col-lg-4">
            <TextField
              style={{ width: "82%" }}
              InputProps={{ disableUnderline: false }}
              id="outlined-name"
              label="Password"
              type="password"
              value={this.state.password}
              onChange={event => this.fetchPassword(event)}
              margin="normal"
              classes={{}}
            />
          </div>
        </div>
        <div className="pt-5 row justify-content-center col-md-12 col-lg-12 col-sm-12 ">
          <Link
            className="row pl-5 justify-content-start col-md-4 col-lg-4"
            style={{ cursor: "pointer" }}
            to="/resetPassword"
          >
            <div style={{ color: "#808080", textDecoration: "underline" }}>
              HAVE YOU FORGGOTEN YOUR PASSWORD?
            </div>
          </Link>
        </div>
        <div className="pt-5 row justify-content-center col-md-12 col-lg-12 col-sm-12 ">
          <div className="row pl-5 justify-content-start col-md-4 col-lg-4">
            <Button
              onClick={() => this.login()}
              variant="contained"
              className={[classes.button, "p-3"]}
              style={{
                color: "white",
                backgroundColor: "#000000",
                marginTop: "6%",
                width: "60%",
                border: 0,
                borderRadius: 0
              }}
            >
              LOGIN
            </Button>
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
Login.propTypes = {
  classes: PropTypes.object.isRequired
};
export default withRouter(withStyles(styles)(Login));
