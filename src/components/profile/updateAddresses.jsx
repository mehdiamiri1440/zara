import React, { Component } from "react";
import Menu from "./../menu/menu";
import { withRouter } from "react-router-dom";
import { TextField, Button } from "@material-ui/core";
import Footer from "./../footer/footer";
class UpdateAddresses extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <div style={{ zIndex: -9 }}>
          <Menu
            menuItems={true}
            login={true}
            contact={true}
            search={true}
            color="black"
            basket={true}
          />
        </div>
        <div className="pt-5 " style={{ height: "35vh", zIndex: 22222 }} />
        <div className="d-flex justify-content-center px-5">
          اطلاعات شخصی و آدرس های خود را به روز نگه دارید
        </div>
        <div className="row justify-content-center col-md-12 col-lg-12 col-sm-12 ">
          <div className="row justify-content-center col-md-5 col-lg-5 col-sm-5 ">
            <TextField
              style={{ width: "60%" }}
              InputProps={{ disableUnderline: false }}
              id="outlined-name"
              label="نام "
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
              label="نام خانوادگی"
              type="password"
              value={this.state.password}
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
              label="کد پستی"
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
              label="شهر"
              type="password"
              value={this.state.password}
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
              label="تلفن"
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
              label="منطقه "
              type="text"
              value={localStorage.language}
              onChange={event => this.fetchUserData("region", event)}
              margin="normal"
              classes={{}}
            />
          </div>
        </div>
        <div className="pt-5 row justify-content-center col-md-12 col-lg-12 col-sm-12 ">
          <Button
            className="p-3"
            onClick={() => this.createAccount()}
            variant="contained"
            style={{
              zIndex: 999999,
              color: "white",
              backgroundColor: "#000000",
              marginTop: "6%",
              width: "60%",
              border: 0,
              borderRadius: 0
            }}
          >
            ثبت آدرس جدید
          </Button>
        </div>
        <Footer />
      </div>
    );
  }
}

export default withRouter(UpdateAddresses);
