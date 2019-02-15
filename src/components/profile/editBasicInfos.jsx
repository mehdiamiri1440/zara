import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import Menu from "../menu/menu";
import Alert from "react-s-alert";
import Footer from "../footer/footer";
import { Button, TextField } from "@material-ui/core";
import { serverAddress } from "./../../utility/consts";
import AccessDenied from "./../accessDenied/accessDenied";
import { connect } from "react-redux";
class EditBasicInfos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
      email: "",
      firstName: "",
      lastName: "",
      city: "",
      region: "",
      country: "",
      password: "",
      retypedPassword: "",
      userLogin: false,
      address: "",
      postalCode: "",
      phone: "",
      policies: false
    };
  }
  checkUserLoggedIn() {
    fetch(`${serverAddress}/user/isuserlogin`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    })
      .then(responseJson => {
        this.setState({ userLogin: responseJson }, () => {
          console.log("check for loggin user", this.state.userLogin);
        });
      })
      .catch(error => console.error("Error:", error));
  }
  componentDidMount = () => {
    this.checkUserLoggedIn();
    this.setState({ country: localStorage.country });
    this.getUserInfo();
  };
  getUserInfo() {
    this.setState({ user: this.props.user });
    // fetch(`${serverAddress}/user`, {
    //   method: "GET"
    // })
    //   .then(response => response.json())
    //   .then(responseJson => {
    //     console.log("it is the response", responseJson);
    //     this.setState({ user: responseJson });
    //   })
    //   .catch(error => console.error("Error:", error));
  }

  fetchUserData(data, event) {
    let user = this.state.user;
    switch (data) {
      case "email":
        user.email = event.target.value;
        this.setState({ user });
        break;
      case "firstName":
        user.firstName = event.target.value;
        this.setState({ user });
        break;
      case "lastName":
        user.lastName = event.target.value;
        this.setState({ user });
        break;
      case "address":
        user.address = event.target.value;
        this.setState({ user });
        break;
      case "city":
        user.city = event.target.value;
        this.setState({ user });
        break;
      case "password":
        user.password = event.target.value;
        this.setState({ user });
        break;
      case "retypedPassword":
        user.retypedPassword = event.target.value;
        this.setState({ user });
        break;
      case "region":
        localStorage.country = event.target.value;
        this.setState({ country: localStorage.country });
        break;
      case "postalCode":
        user.postalCode = event.target.value;
        this.setState({ user });
        break;
      case "phone":
        user.phone = event.target.value;
        this.setState({ user });
        break;
      case "policies":
        this.setState({ policies: !this.state.policies });
        break;
      default:
        break;
    }
  }

  updateUserInfos() {
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
            if (responseJson.status !== 200) {
              alert.error("نام کاربری یا ایمیل تکراری", {
                position: "bottom-right",
                effect: "slide",
                timeout: 2000
              });
            } else {
              this.props.history.push({
                pathname: "/login",
                state: responseJson
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
    if (this.state.userLogin)
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
              ویرایش اطلاعات شخصی
            </div>
          </div>
          <div className="row justify-content-center col-md-12 col-lg-12 col-sm-12 ">
            <div className="row justify-content-center col-md-5 col-lg-5 col-sm-5 ">
              <TextField
                style={{ width: "60%" }}
                InputProps={{ disableUnderline: false }}
                id="outlined-name"
                label="پست الکترونیک"
                type="email"
                value={this.state.user && this.state.user.email}
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
                value={this.state.user && this.state.user.password}
                onChange={event => this.fetchUserData("password", event)}
                margin="normal"
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
                value={this.state.user && this.state.user.retypedPassword}
                onChange={event => this.fetchUserData("retypedPassword", event)}
                margin="normal"
              />
            </div>
            <div className="row justify-content-center col-md-5 col-lg-5 col-sm-5 ">
              <TextField
                style={{ width: "60%" }}
                InputProps={{ disableUnderline: false }}
                id="outlined-name"
                label="نام"
                type="text"
                value={this.state.user && this.state.user.firstName}
                onChange={event => this.fetchUserData("firstName", event)}
                margin="normal"
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
                value={this.state.user && this.state.user.lastName}
                onChange={event => this.fetchUserData("lastName", event)}
                margin="normal"
              />
            </div>
            <div className="row justify-content-center col-md-5 col-lg-5 col-sm-5 ">
              <TextField
                style={{ width: "60%" }}
                InputProps={{ disableUnderline: false }}
                id="outlined-name"
                label="شهر "
                type="text"
                value={this.state.user && this.state.user.city}
                onChange={event => this.fetchUserData("city", event)}
                margin="normal"
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
                value={this.state.user && this.state.user.postalCode}
                onChange={event => this.fetchUserData("postalCode", event)}
                margin="normal"
              />
            </div>
            <div className="row justify-content-center col-md-5 col-lg-5 col-sm-5 ">
              <TextField
                style={{ width: "60%" }}
                InputProps={{ disableUnderline: false }}
                id="outlined-name"
                label="منطقه "
                type="text"
                value={this.state.country}
                onChange={event => this.fetchUserData("region", event)}
                margin="normal"
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
                value={this.state.user && this.state.user.phone}
                onChange={event => this.fetchUserData("phone", event)}
                margin="normal"
              />
            </div>
            <div className="row justify-content-center col-md-12 col-lg-12 col-sm-12 ">
              <TextField
                style={{ width: "80%" }}
                InputProps={{ disableUnderline: false }}
                id="outlined-name"
                label="آدرس "
                type="text"
                value={this.state.user && this.state.user.address}
                onChange={event => this.fetchUserData("address", event)}
                margin="normal"
              />
            </div>
          </div>
          <div className="pt-5 row justify-content-center col-md-12 col-lg-12 col-sm-12 ">
            <Button
              className="p-3"
              onClick={() => this.updateUserInfos()}
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
              به روز رسانی اطلاعات
            </Button>
          </div>
          <Footer />
        </div>
      );
    return <AccessDenied />;
  }
}
function mapDispatchToProps(dispatch) {
  return {
    deleteItemFromBasket: () => {
      const action = { type: "ADD_BASKET_COUNT" };
      dispatch(action);
    }
  };
}
function mapStateToProps(state) {
  return {
    basketCount: state.basketCount,
    basket: state.basket,
    user: state.user
  };
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(EditBasicInfos));
