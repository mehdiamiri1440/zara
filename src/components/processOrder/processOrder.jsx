import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import Menu from "../menu/menu";
import Footer from "../footer/footer";
class ProcessOrder extends Component {
  constructor(props) {
    super(props);
    this.state = { shippingWay: "", paymentType: "" };
  }
  render() {
    return (
      <div>
        <div style={{ zIndex: -9 }}>
          <Menu
            menuItems={false}
            login={false}
            contact={true}
            search={false}
            color="black"
            basket={true}
          />
        </div>
        <div className="pt-5 " style={{ height: "35vh", zIndex: 22222 }} />
        <div
          style={{ fontWeight: "bold", fontSize: 24 }}
          className="d-flex justify-content-end px-5"
        >
          نهایی کردن خرید
        </div>
        <div
          style={{ fontWeight: "bold", fontSize: 26 }}
          className="d-flex justify-content-end pt-5 border-bottom w-75 p-2 m-auto px-5"
        >
          نحوه ارسال
        </div>
        <div
          style={{}}
          className="d-flex justify-content-center  align-items-center w-75 p-4 m-auto px-5"
        >
          <input
            className="mx-2"
            onClick={() =>
              this.setState({
                shippingWay: "post"
              })
            }
            type="radio"
            name="category0"
          />
          <span className="d-flex align-items-center px-1">پست پیشتاز</span>
          <input
            className="mx-2"
            onClick={() =>
              this.setState({
                shippingWay: "dhl"
              })
            }
            type="radio"
            name="category0"
          />
          <span className="d-flex align-items-center px-1">DHL</span>
        </div>
        <div
          style={{ fontWeight: "bold", fontSize: 26 }}
          className="d-flex justify-content-end pt-1 border-bottom w-75 p-2 m-auto px-5"
        >
          نحوه پرداخت
        </div>
        <div
          style={{}}
          className="d-flex justify-content-center  align-items-center border-bottom w-75 p-4 m-auto px-5"
        >
          <div>
            <img src={require("../../contents/icons/paypal.png")} alt="" />
            <input
              className="mx-2"
              onClick={() =>
                this.setState({
                  paymentType: "localPay"
                })
              }
              type="radio"
              name="category0"
            />
          </div>
          <span className="d-flex align-items-center px-1">بانک ملی</span>
          <input
            className="mx-2"
            onClick={() =>
              this.setState({
                paymentType: "payPal"
              })
            }
            type="radio"
            name="category0"
          />
          <span className="d-flex align-items-center px-1">paypal</span>
        </div>
        <div />
        <Footer />
      </div>
    );
  }
}

export default withRouter(ProcessOrder);
