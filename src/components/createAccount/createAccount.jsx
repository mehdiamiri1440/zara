import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import Menu from "../menu/menu";
import Alert from "react-s-alert";
import Footer from "../footer/footer";
import { serverAddress } from "./../../utility/consts";
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
    this.state = {
      email: "",
      userName: "",
      firstName: "",
      lastName: "",
      city: "",
      region: "",
      password: "",
      retypedPassword: "",
      address: [],
      postalCode: "",
      phone: "",
      policies: false
    };
  }
  componentDidMount = () => {};

  fetchUserData(data, event) {
    switch (data) {
      case "userName":
        this.setState({ userName: event.target.value });
        break;
      case "email":
        this.setState({ email: event.target.value });
        break;
      case "firstName":
        this.setState({ firstName: event.target.value });
        break;
      case "lastName":
        this.setState({ lastName: event.target.value });
        break;
      case "address":
        let address = this.state.address;
        address[0] = event.target.value;
        this.setState({ address });
        break;
      case "city":
        this.setState({ city: event.target.value });
        break;
      case "password":
        this.setState({ password: event.target.value });
        break;
      case "retypedPassword":
        this.setState({ retypedPassword: event.target.value });
        break;
      case "region":
        this.setState({ region: localStorage.country });
        break;
      case "postalCode":
        this.setState({ postalCode: event.target.value });
        break;
      case "phone":
        this.setState({ phone: event.target.value });
        break;
      case "policies":
        this.setState({ policies: !this.state.policies });
        break;
    }
  }

  createAccount() {
    let user = this.state;
    if (user.retypedPassword != user.password) {
      Alert.error("دو رمز عبور وارد شده متفاوت می باشند", {
        position: "bottom-right",
        effect: "slide",
        timeout: 2000
      });
    } else {
      if (this.state.policies) {
        fetch(`${serverAddress}/user/signup`, {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            firstName: user.firstName,
            username: user.userName,
            lastName: user.lastName,
            postalCode: user.postalCode,
            phone: user.phone,
            city: user.city,
            region: user.region,
            address: user.address,
            password: user.password,
            email: user.email
          })
        })
          .then(response => response.json())
          .then(responseJson => {
            this.props.history.push({
              pathname: "/login",
              state: responseJson
            });
          })
          .catch(error => {
            Alert.error("خطا در ارسال اطلاعات", {
              position: "bottom-right",
              effect: "slide",
              timeout: 2000
            });
          });
      } else {
        Alert.error("لطفا قوانین سایت را مطالعه فرمایید ", {
          position: "bottom-right",
          effect: "slide",
          timeout: 3000
        });
      }
    }
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
        <div className="row justify-content-center col-md-12 col-lg-12 col-sm-12 ">
          <div
            style={{ fontSize: 30, fontWeight: "bold" }}
            className="text-center col-md-4 col-lg-4 row justify-content-center"
          >
            اطلاعات شخصی خود را وارد کنید
          </div>
        </div>
        <div className="row justify-content-center col-md-12 col-lg-12 col-sm-12 ">
          <div className="row justify-content-center col-md-5 col-lg-5 col-sm-5 ">
            <TextField
              style={{ width: "60%" }}
              InputProps={{ disableUnderline: false }}
              id="outlined-name"
              label="نام کاربری"
              type="userName"
              value={this.state.userName}
              onChange={event => this.fetchUserData("userName", event)}
              margin="normal"
            />
          </div>
          <div className="row justify-content-center col-md-5 col-lg-5 col-sm-5 ">
            <TextField
              style={{ width: "60%" }}
              InputProps={{ disableUnderline: false }}
              id="outlined-name"
              label="پست الکترونیک "
              type="email"
              value={this.state.email}
              onChange={event => this.fetchUserData("email", event)}
              margin="normal"
            />
          </div>
          <div className="row justify-content-center col-md-5 col-lg-5 col-sm-5 ">
            <TextField
              style={{ width: "60%" }}
              InputProps={{ disableUnderline: false }}
              id="outlined-name"
              label="رمز ورود "
              type="password"
              value={this.state.password}
              onChange={event => this.fetchUserData("password", event)}
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
              label="تکرار رمز ورود"
              type="password"
              value={this.state.retypedPassword}
              onChange={event => this.fetchUserData("retypedPassword", event)}
              margin="normal"
              classes={{}}
            />
          </div>
          <div className="row justify-content-center col-md-5 col-lg-5 col-sm-5 ">
            <TextField
              style={{ width: "60%" }}
              InputProps={{ disableUnderline: false }}
              id="outlined-name"
              label="نام"
              type="text"
              value={this.state.firstName}
              onChange={event => this.fetchUserData("firstName", event)}
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
              label="نام خانوادگی "
              type="text"
              value={this.state.lastName}
              onChange={event => this.fetchUserData("lastName", event)}
              margin="normal"
              classes={{}}
            />
          </div>
          <div className="row justify-content-center col-md-5 col-lg-5 col-sm-5 ">
            <TextField
              style={{ width: "60%" }}
              InputProps={{ disableUnderline: false }}
              id="outlined-name"
              label="شهر "
              type="text"
              value={this.state.city}
              onChange={event => this.fetchUserData("city", event)}
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
              label="کد پستی"
              type="text"
              value={this.state.postalCode}
              onChange={event => this.fetchUserData("postalCode", event)}
              margin="normal"
              classes={{}}
            />
          </div>
          <div className="row justify-content-center col-md-5 col-lg-5 col-sm-5 ">
            <TextField
              style={{ width: "60%" }}
              InputProps={{ disableUnderline: false }}
              id="outlined-name"
              label="منطقه "
              type="text"
              value={localStorage.language}
              onChange={event => this.fetchUserData("region", event)}
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
              label="تلفن "
              type="text"
              value={this.state.phone}
              onChange={event => this.fetchUserData("phone", event)}
              margin="normal"
              classes={{}}
            />
          </div>
          <div className="row justify-content-center col-md-12 col-lg-12 col-sm-12 ">
            <TextField
              style={{ width: "80%" }}
              InputProps={{ disableUnderline: false }}
              id="outlined-name"
              label="آدرس "
              type="text"
              value={this.state.address[0]}
              onChange={event => this.fetchUserData("address", event)}
              margin="normal"
              classes={{}}
            />
          </div>
        </div>
        <div className="pt-5 row justify-content-center col-md-12 col-lg-12 col-sm-12 ">
          <input
            id="checkbox"
            type="Checkbox"
            value={this.state.policies}
            onChange={event => this.fetchUserData("policies", event)}
          />
          <label className="p-2 mt-1" htmlFor="checkbox">
            من اطلاعات و شرایط حریم خصوصی را خوانده ام و فهمیدم
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
            ساخت پروفایل
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
export default withRouter(withStyles(styles)(CreateAccount));
