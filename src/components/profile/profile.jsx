import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import Footer from "../footer/footer";
import Menu from "../menu/menu";
class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount = () => {
    console.log("drjhf", this.props.history.location.state);
  };
  editUserInfo() {}
  render() {
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
            onclicke={() => this.editUserInfo()}
            className="d-flex  justify-content-end px-5 pt-2"
            style={{ fontWeight: "bold", fontSize: 18 }}
          >
            ویرایش مشخصات پایه
          </div>
          <div className=" d-flex  justify-content-end px-5 pt-2">
            شما می توانید اطلاعات پایه مربوط به پروفایل خود را شامل نام و آدرس
            را در این قسمت تغییر دهید
          </div>
        </div>

        <Footer />
      </div>
    );
  }
}

export default withRouter(Profile);
