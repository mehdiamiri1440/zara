import React, { Component } from "react";
import Menu from "./../menu/menu";
import { withRouter } from "react-router-dom";
import { TextField, Button } from "@material-ui/core";
import Footer from "./../footer/footer";
class UpdateAddresses extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      address: "",
      city: "",
      postalCode: "",
      phone: "",
      region: ""
    };
  }
  componentDidMount() {
    this.getAddresses();
  }
  getAddresses() {}
  deleteAddress() {}
  updateAddress() {
    this.setState({});
  }
  renderTableOfAddresses() {
    return (
      <table className="table table-hover table-light table-striped">
        <thead>
          <tr>
            <th className="text-center align-middle">حذف</th>
            <th className="text-center align-middle">شماره تماس</th>
            <th className="text-center align-middle">کد پستی</th>
            <th className="text-center align-middle">شهر</th>
            <th className="text-center align-middle">آدرس</th>
            <th className="text-center align-middle">نام خانوادگی</th>
            <th className="text-center align-middle">نام</th>
          </tr>
        </thead>
        <tbody>
          <tr onClick={() => this.updateAddress()}>
            <td className="text-center align-middle">
              <i onClick={() => this.deleteAddress()} className="fa fa-trash" />
            </td>
            <td className="text-center align-middle">xvc</td>
            <td className="text-center align-middle">xvc</td>
            <td className="text-center align-middle">xvc</td>
            <td className="text-center align-middle">xvc</td>
            <td className="text-center align-middle">xvc</td>
            <td className="text-center align-middle">xvc</td>
          </tr>
        </tbody>
      </table>
    );
  }
  addOrUpdateAddress() {}
  setNewAddressFields(field, event) {
    switch (field) {
      case "phone":
        this.setState({ phone: event.target.value });
        break;
      case "city":
        this.setState({ city: event.target.value });
        break;
      case "firstName":
        this.setState({ firstName: event.target.value });
        break;
      case "lastName":
        this.setState({ lastName: event.target.value });
        break;
      case "address":
        this.setState({ address: event.target.value });
        break;
      case "postalCode":
        this.setState({ postalCode: event.target.value });
        break;

      default:
        break;
    }
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
              type="text"
              value={this.state.firstName}
              onChange={event => this.setNewAddressFields("firstName", event)}
              margin="normal"
            />
          </div>
          <div className="row justify-content-center col-md-5 col-lg-5 col-sm-5 ">
            <TextField
              style={{ width: "60%" }}
              InputProps={{ disableUnderline: false }}
              id="outlined-name"
              label="نام خانوادگی"
              type="text"
              value={this.state.lastName}
              onChange={event => this.setNewAddressFields("lastName", event)}
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
              value={this.state.postalcode}
              onChange={event => this.setNewAddressFields("postalcode", event)}
              margin="normal"
            />
          </div>
          <div className="row justify-content-center col-md-5 col-lg-5 col-sm-5 ">
            <TextField
              style={{ width: "60%" }}
              InputProps={{ disableUnderline: false }}
              id="outlined-name"
              label="شهر"
              type="text"
              value={this.state.city}
              onChange={event => this.setNewAddressFields("city", event)}
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
              type="text"
              value={this.state.phone}
              onChange={event => this.setNewAddressFields("phone", event)}
              margin="normal"
            />
          </div>
          <div className="row justify-content-center col-md-5 col-lg-5 col-sm-5 ">
            <TextField
              style={{ width: "60%" }}
              InputProps={{ disableUnderline: false }}
              id="outlined-name"
              label="منطقه "
              disabled
              type="text"
              value={localStorage.language}
              onChange={event => this.setNewAddressFields("region", event)}
              margin="normal"
              classes={{}}
            />
          </div>
        </div>
        <div className="row justify-content-center col-md-12 col-lg-12 col-sm-12 ">
          <TextField
            style={{ width: "60%" }}
            InputProps={{ disableUnderline: false }}
            id="outlined-name"
            label="آدرس "
            type="text"
            value={this.state.address}
            onChange={event => this.setNewAddressFields("address", event)}
            margin="normal"
            classes={{}}
          />
        </div>
        <div className="pt-5 row justify-content-center col-md-12 col-lg-12 col-sm-12 ">
          <Button
            className="p-3"
            onClick={() => this.addOrUpdateAddress()}
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
        <div className="p-5">{this.renderTableOfAddresses()}</div>
        <Footer />
      </div>
    );
  }
}

export default withRouter(UpdateAddresses);
