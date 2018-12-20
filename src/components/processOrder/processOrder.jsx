import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import Menu from "../menu/menu";
import Footer from "../footer/footer";
class ProcessOrder extends Component {
  constructor(props) {
    super(props);
    this.state = {};
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
        <div />
        <Footer />
      </div>
    );
  }
}

export default withRouter(ProcessOrder);
