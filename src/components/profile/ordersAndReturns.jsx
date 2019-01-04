import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Menu from "./../menu/menu";
import Footer from "./../footer/footer";
class OrdersAndReturns extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  renderTableOrders() {
    return (
      <table className="table tabl-striped table-hover table-light">
        <thead>
          <tr>
            <th className="align-middle text-center">بیشتر</th>
            <th className="align-middle text-center">وضعیت</th>
            <th className="align-middle text-center">قیمت </th>
            <th className="align-middle text-center">تعداد</th>
            <th className="align-middle text-center">تاریخ خرید</th>
            <th className="align-middle text-center">نام</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="align-middle text-center">
              <i data-toggle="dropdown" className="fas fa-ellipsis-h" />
              <div className="dropdown-menu">
                <div className="dropdown-item">sasd</div>
              </div>
            </td>
            <td className="align-middle text-center">sdfsdfsd</td>
            <td className="align-middle text-center">sdfsdfsd</td>
            <td className="align-middle text-center">sdfsdfsd</td>
            <td className="align-middle text-center">sdfsdfsd</td>
            <td className="align-middle text-center">sdfsdfsd</td>
          </tr>
        </tbody>
      </table>
    );
  }
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
        <div className="" style={{ height: "35vh", zIndex: 22222 }} />
        <div className="d-flex px-5 my-5 py-5 justify-content-center ">
          {this.renderTableOrders()}
        </div>
        <Footer />
      </div>
    );
  }
}

export default withRouter(OrdersAndReturns);
