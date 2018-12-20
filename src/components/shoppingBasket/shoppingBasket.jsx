import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import Menu from "../menu/menu";
import Footer from "../footer/footer";
import "./shoppingbasket.css";
var sum = 0;
class ShoppingBasket extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sum: 0,
      shoppingBasket: [
        {
          price: 1000
        },
        {
          price: 2000
        },
        {
          price: 3000
        }
      ]
    };
  }
  componentDidMount() {
    this.state.shoppingBasket.map(shop => (sum += shop.price));
    this.setState({ sum: sum });
    console.log(sum, "it is the summation of the all of the prices");
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
        <div className="pt-5 " style={{ height: "35vh", zIndex: 22222 }} />
        <div className="p-4 d-flex justify-content-end px-5">
          <h4 className="px-5">سبد خرید</h4>
        </div>
        <div className="d-flex justify-content-start px-5">
          <table className="table ">
            <thead>
              <tr>
                <th className="align-middle text-center">محصول</th>
                <th className="align-middle text-center">توضیحات</th>
                <th className="align-middle text-center">رنگ</th>
                <th className="align-middle text-center">سایز</th>
                <th className="align-middle text-center">تعداد</th>
                <th className="align-middle text-center">قیمت</th>
                <th className="align-middle text-center">حذف</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="align-middle text-center">
                  <img
                    style={{ width: 84, height: 126 }}
                    src={require("../../contents/images/architecture-asking-brainstorming-1438084.jpg")}
                    alt=""
                  />
                </td>
                <td className="align-middle text-center">
                  <div
                    className="text-dark text-center"
                    style={{ fontSize: 18 }}
                  >
                    title of the product
                  </div>
                  <div style={{ color: "#B5BCC4" }}>price is 4000</div>
                </td>
                <td
                  className="align-middle text-center text-dark"
                  style={{ fontSize: 18 }}
                >
                  black
                </td>
                <td className="align-middle text-center">xl</td>
                <td className="align-middle text-center">
                  <i
                    style={{ cursor: "pointer", fontSize: 20 }}
                    className="hoverableArrow align-middle text-center p-3 fas fa-angle-left"
                  />
                  <span className="text-center align-middle">4</span>
                  <i
                    style={{ cursor: "pointer", fontSize: 20 }}
                    className="hoverableArrow align-middle text-center p-3 fas fa-angle-right "
                  />
                </td>
                <td className="align-middle text-center">419 GBP</td>
                <td className="align-middle text-center">
                  <i
                    style={{ fontSize: 20, cursor: "pointer" }}
                    className="fas fa-times-circle"
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="px-5  d-flex justify-content-end">
          <span>تومان</span>
          <span>{this.state.sum}</span>
          <span>: تمامی خرید ها</span>
        </div>
        <div className="px-5 pt-1 d-flex justify-content-end">
          <span>تومان</span>
          <span>0.00</span>
          <span>: هزینه تخمینی برای ارسال</span>
        </div>
        <div className="px-5 pt-1 d-flex justify-content-end">
          <span>تومان</span>
          <span>6974</span>
          <span>: کل هزینه</span>
        </div>
        <div className="row pt-5">
          <div className="px-5 pt-1 d-flex justify-content-start w-50">
            <Link
              to="/home"
              className="text-dark w-50 btn border-dark"
              style={{
                textDecoration: "none",
                backgroundColor: "#FFFFFF",
                borderRadius: 0
              }}
            >
              خرید بیشتر
            </Link>
          </div>
          <div className="px-5 w-50 pt-1 d-flex justify-content-end">
            <Link
              to="/processOrder"
              className="text-white w-50 btn border-dark"
              style={{
                textDecoration: "none",
                backgroundColor: "#000000",
                borderRadius: 0
              }}
            >
              ادامه
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default withRouter(ShoppingBasket);
