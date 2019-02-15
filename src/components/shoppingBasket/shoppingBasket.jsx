import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import Menu from "../menu/menu";
import Footer from "../footer/footer";
import "./shoppingbasket.css";
import { connect } from "react-redux";
import store from "../../store";
import { numberWithCommas } from "./../../utility/index";
import { deleteBasketCount } from "../../actions/basket";
var sum = 0;
class ShoppingBasket extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sum: 0,
      basket: [],
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
  calculaeSum() {
    let sum = 0;
    this.state.basket.map(basket => (sum += basket.count * basket.price));
    this.setState({ sum });
  }
  componentDidMount() {
    this.setState({ basket: this.props.basket }, () => {
      this.calculaeSum();
    });
  }
  changeRoute() {
    if (localStorage.username && localStorage.username.length > 0) {
      this.history.props.push({
        pathname: "/processOrder",
        state: "user"
      });
    } else {
      this.props.history.push({
        pathname: "/checkForSignUp"
      });
    }
  }
  render() {
    return (
      <div>
        <div style={{ zIndex: -9 }}>
          <Menu
            store={store}
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
              {this.state.basket.map((basket, indx) => (
                <tr>
                  <td className="align-middle text-center">
                    <img
                      style={{ width: 84, height: 126 }}
                      src={basket.image}
                      alt=""
                    />
                  </td>
                  <td className="align-middle text-center">
                    <div
                      className="text-dark text-center"
                      style={{ fontSize: 18 }}
                    >
                      {basket.name}
                    </div>
                    <div style={{ color: "#B5BCC4" }}>
                      {numberWithCommas(basket.price)}
                    </div>
                  </td>
                  <td
                    className="align-middle text-center text-dark"
                    style={{ fontSize: 18 }}
                  >
                    {basket.color}
                  </td>
                  <td className="align-middle text-center">{basket.size}</td>
                  <td className="align-middle text-center">
                    <i
                      onClick={() => {
                        let myBasket = this.state.basket;
                        if (basket.count <= 1) myBasket[indx].count = 1;
                        else myBasket[indx].count -= 1;
                        this.setState({ basket: myBasket }, () => {
                          localStorage.basket = JSON.stringify(
                            this.state.basket
                          );
                          this.calculaeSum();
                        });
                      }}
                      style={{ cursor: "pointer", fontSize: 20 }}
                      className="hoverableArrow align-middle text-center p-3 fas fa-angle-left"
                    />
                    <span className="text-center align-middle">
                      {basket.count}
                    </span>
                    <i
                      onClick={() => {
                        let myBasket = this.state.basket;
                        myBasket[indx].count += 1;
                        this.setState({ basket: myBasket }, () => {
                          localStorage.basket = JSON.stringify(
                            this.state.basket
                          );
                          this.calculaeSum();
                        });
                      }}
                      style={{ cursor: "pointer", fontSize: 20 }}
                      className="hoverableArrow align-middle text-center p-3 fas fa-angle-right "
                    />
                  </td>
                  <td className="align-middle text-center">
                    {numberWithCommas(basket.price * basket.count)}
                  </td>
                  <td className="align-middle text-center">
                    <i
                      onClick={() => {
                        let myBasket = this.state.basket;
                        myBasket.splice(indx, 1);
                        this.calculaeSum();
                        this.setState(
                          {
                            basket: myBasket
                          },
                          () => {
                            localStorage.basket = JSON.stringify(
                              this.state.basket
                            );
                          }
                        );
                        this.props.deleteBasketCount(this.props.basket.length);
                      }}
                      style={{ fontSize: 20, cursor: "pointer" }}
                      className="fas fa-times-circle"
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="px-5  d-flex justify-content-end">
          <span>تومان</span>
          <span>{numberWithCommas(this.state.sum)}</span>
          <span>: تمامی خرید ها</span>
        </div>
        <div className="px-5 pt-1 d-flex justify-content-end">
          <span>تومان</span>
          <span>0.00</span>
          <span>: هزینه تخمینی برای ارسال</span>
        </div>
        <div className="px-5 pt-1 d-flex justify-content-end">
          <span>تومان</span>
          <span>{numberWithCommas(this.state.sum)}</span>
          <span>: کل هزینه</span>
        </div>
        <div className="row justify-content-between px-5 pt-5">
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
          <div
            onClick={() => this.changeRoute()}
            style={{
              textDecoration: "none",
              backgroundColor: "#000000",
              borderRadius: 0
            }}
            className="px-5  text-white  btn border-dark w-25 pt-1 d-flex justify-content-center"
          >
            ادامه
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
function mapDispatchToProps(dispatch) {
  return {
    deleteBasketCount: index => dispatch(deleteBasketCount(index))
  };
}
function mapStateToProps(state) {
  return { basketCount: state.basket.basketCount, basket: state.basket.basket };
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(ShoppingBasket));
