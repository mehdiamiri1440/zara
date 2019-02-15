import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import Footer from "../footer/footer";
import Menu from "../menu/menu";
import { connect } from "react-redux";
import AccessDenied from "./../accessDenied/accessDenied";
import { serverAddress } from "./../../utility/consts";
import { userLogin } from "../../actions/user";
class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = { user: {}, userLogin: false };
  }
  componentDidMount = () => {
    this.checkUserLoggedIn();
    this.setState({ user: this.props.user });
  };
  editUserInfo(path) {
    this.props.history.push({
      pathname: `${path}`
    });
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
        if (responseJson) this.setState({ userLogin: true }, () => {});
        else this.setState({ userLogin: false }, () => {});
      })
      .catch(error => console.error("Error:", error));
  }
  render() {
    if (this.state.userLogin)
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
          <div className="pt-5 " style={{ height: "35vh", zIndex: 22222 }} />
          <div
            className="d-flex justify-content-end px-5"
            style={{ fontWeight: "bold", fontSize: 26 }}
          >
            پروفایل من
          </div>
          <div className=" ">
            <div
              onClick={() => this.editUserInfo("/profile/ordersAndReturns")}
              className="d-flex  justify-content-end px-5 pt-2"
              style={{ cursor: "pointer", fontWeight: "bold", fontSize: 18 }}
            >
              سفارشات و برگشتی ها
            </div>
            <div className=" d-flex  justify-content-end px-5 pt-2">
              شما می توانید لیست خرید های قبلی خود و لیست مرجوعیات خود را در این
              قسمت مشاهده کنید
            </div>
          </div>

          <div className=" ">
            <div
              onClick={() => this.editUserInfo("/profile/editBasicInfos")}
              className="d-flex  justify-content-end px-5 pt-2"
              style={{ cursor: "pointer", fontWeight: "bold", fontSize: 18 }}
            >
              ویرایش مشخصات پایه
            </div>
            <div className=" d-flex  justify-content-end px-5 pt-2">
              شما می توانید اطلاعات پایه مربوط به پروفایل خود را شامل نام و آدرس
              را در این قسمت تغییر دهید
            </div>
          </div>

          <div className=" ">
            <div
              onClick={() => this.editUserInfo("/profile/updateAddresses")}
              className="d-flex  justify-content-end px-5 pt-2"
              style={{ cursor: "pointer", fontWeight: "bold", fontSize: 18 }}
            >
              دفتر آدرس ها
            </div>
            <div className=" d-flex  justify-content-end px-5 pt-2">
              شما می توانید لیستی از آدرس های پیشفرض خود ایجاد نمایید تا در موقع
              خرید با آسانی و سرعت بیشتر با استفاده از این لیست فرایند خرید خود
              را تکمیل نمایید
            </div>
          </div>

          <Footer />
        </div>
      );
    return <AccessDenied />;
  }
}
function mapDispatchToProps(dispatch) {
  return {
    userLogin: user => dispatch(userLogin(user))
  };
}
function mapStateToProps(state) {
  return { user: state.user.user };
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Profile));
