import React, { Component } from "react";
import { Redirect, Link, withRouter, Route } from "react-router-dom";
import PropTypes from "prop-types";
import New from "./new/new";
import "./menu.css";
import Women from "./new/women.jsx";
import Basket from "@material-ui/icons/ShoppingCart";
import { withStyles, TextField } from "@material-ui/core";
import { connect } from "react-redux";
import { numberWithCommas } from "./../../utility/index";
import { serverAddress } from "./../../utility/consts";
import { FormattedMessage, injectIntl } from "react-intl";
import { addBasketCount, deleteBasketCount } from "../../actions/basket";
import store from "../../store";
import { userLogout } from "../../actions/user";
class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      basket: [],
      subMenuNubmer: 0,
      searchStuff: "",
      user: {},
      scrollY: 0,
      color: "green"
    };
    this.t = "vome";
  }
  handleScroll = () => {
    var lastScrollY = window.scrollY;
    this.setState({ scrollY: lastScrollY });
  };
  componentDidMount() {
    this.setState({ user: this.props.user });
    if (
      localStorage.basket &&
      JSON.parse(localStorage.basket) &&
      JSON.parse(localStorage.basket).length
    )
      this.setState({ basket: this.props.basket });
    window.addEventListener("scroll", this.handleScroll);
  }
  renderColorOfTexts() {
    if (this.props.color == "white") {
      if (this.state.scrollY > 1158) return "rgba(0,0,0,0.6)";
      else return "white";
    } else return "black";
  }

  navigateToContact() {
    this.props.history.push({ pathname: "/contact" });
  }
  searchStuff(event) {
    this.setState({ searchStuff: event.target.value });
  }
  logout() {
    fetch(`${serverAddress}/user/logout`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    })
      .then(responseJson => {
        console.log("oit is thgew erwspiis", responseJson);
        localStorage.user = null;
        this.props.userLogout();
        this.props.history.push({
          pathname: "/home"
        });
        window.location.reload();
      })
      .catch(error => {});
  }
  navigateToItemDetails() {}
  renderSearch() {
    const { classes } = this.props;
    if (this.props.search) {
      if (window.location.pathname != "/searchProducts") {
        return (
          <TextField
            InputLabelProps={{
              className: [classes.floatingLabel, classes.focused],
              style: {
                cursor: "pointer",
                direction: "rtl",
                color: this.renderColorOfTexts()
              }
            }}
            style={{ cursor: "pointer" }}
            id="search"
            inputProps={{ style: { color: this.renderColorOfTexts() } }}
            label={this.props.intl.formatMessage({
              id: "menu.search"
            })}
            className={(classes.textField, "display-1 p-3 col-md-12")}
            value={this.state.searchStuff}
            onClick={() =>
              this.props.history.push({ pathname: "/searchProducts" })
            }
            margin="normal"
          />
        );
      }
    }
  }
  render() {
    const { classes } = this.props;
    return (
      <div
        className=" col-md-12 col-sm-12 col-lg-12 text-white"
        style={{ zIndex: 1 }}
      >
        <div
          className={`${
            this.props.position ? null : "position-fixed"
          } row col-md-12 col-sm-12 col-lg-12`}
        >
          <Link
            className="display-1 p-3 col-md-4 col-sm-4 d-flex justify-content-start col-lg-4"
            style={{ textDecoration: "none", cursor: "pointer" }}
            to="/home"
          >
            <div style={{ color: this.renderColorOfTexts() }}>
              <img
                style={{ width: 200, height: 300 }}
                src={require("../../contents/icons/Untitled-2.png")}
                alt=""
              />
            </div>
          </Link>

          <div className="display-1 mt-3 col-md-4 col-sm-4 col-lg-4 p-3">
            {this.renderSearch()}
          </div>
          <div
            style={{ paddingTop: "10%" }}
            className="pr-0 justify-content-end row col-md-4 col-sm-4 col-lg-4 p-3 "
          >
            {this.state.user && this.state.user.username ? (
              <Link style={{ textDecoration: "none" }} to="/profile">
                <div
                  {...console.log("it is the fucking user:", this.state.user)}
                  style={{
                    color: this.renderColorOfTexts(),
                    cursor: "pointer"
                  }}
                  className="pt-4 p-2 mt-5 align-middle"
                >
                  {this.state.user.username}
                </div>
              </Link>
            ) : (
              <Link style={{ textDecoration: "none" }} to="/login">
                <div
                  style={{
                    color: this.renderColorOfTexts(),
                    cursor: "pointer"
                  }}
                  className="pt-4 p-2 mt-5 align-middle"
                >
                  <FormattedMessage id="menu.login" />
                </div>
              </Link>
            )}
            {this.props.contact ? (
              <Link style={{ textDecoration: "none" }} to="/contact">
                <div
                  style={{
                    color: this.renderColorOfTexts(),
                    cursor: "pointer"
                  }}
                  className="pt-4 p-2 mt-5 align-middle"
                >
                  <FormattedMessage id="menu.contactus" />
                </div>
              </Link>
            ) : null}
            {this.props.basket ? (
              <div
                style={{
                  color: this.renderColorOfTexts(),
                  cursor: "pointer"
                }}
                className="pt-4 p-2 mt-5 align-middle"
              >
                <div className="hoverBasket position-relative">
                  <i
                    onClick={() => {
                      if (this.props.basketCount > 0)
                        return this.props.history.push({
                          pathname: "/shoppingbasket"
                        });
                    }}
                    style={{ fontSize: 24 }}
                    className=" fas fa-shopping-cart"
                  />
                  <span
                    style={{
                      bottom: "72%",
                      left:
                        this.props.language.direction === "ltr" ? "50%" : "-50%"
                    }}
                    className="position-absolute bg-info  text-white px-1 rounded-circle"
                  >
                    {this.props.basketCount}
                  </span>
                  {this.props.basketCount > 0 ? (
                    <div
                      style={{
                        left:
                          this.props.language.direction === "ltr" ? null : 0,
                        right:
                          this.props.language.direction === "ltr"
                            ? "2.5%"
                            : null
                      }}
                      className="p-2 border-3 inBaskets border-dark border-1 bg-white"
                      id="baskets"
                    >
                      {this.props.basket &&
                        this.props.basket.length &&
                        this.props.basket.map((item, indx) => (
                          <div
                            key={indx}
                            onClick={() => {
                              this.props.history.push({
                                pathname: `/itemDetails/id/${item._id}`,
                                state: item._id
                              });
                              window.location.reload();
                            }}
                            className="border-bottom d-flex p-1"
                          >
                            <img
                              src={item.image}
                              style={{ width: "35%", height: "60%" }}
                              alt=""
                            />
                            <div
                              style={{ width: "60%" }}
                              className="text-center"
                            >
                              <div className="px-2 text-right align-top text-dark">
                                {item.name}
                              </div>
                              <div
                                style={{ fontsize: 16 }}
                                className="px-2 text-muted  text-right align-top"
                              >
                                {numberWithCommas(item.price)}
                              </div>
                              <div
                                style={{ fontsize: 16 }}
                                className="px-2 text-muted  text-right align-top text-dark"
                              >
                                {item.size}
                              </div>
                              <div
                                style={{ fontsize: 16 }}
                                className="px-2 text-muted  text-right align-top text-dark"
                              >
                                {item.color}
                              </div>
                              <div
                                style={{ fontsize: 16 }}
                                className="px-2 text-muted  text-right align-top text-dark"
                              >
                                <i
                                  onClick={e => {
                                    e.stopPropagation();
                                    let basket = this.state.basket;
                                    basket.splice(indx, 1);
                                    this.setState({ basket }, () => {
                                      localStorage.basket = JSON.stringify(
                                        this.state.basket
                                      );
                                    });
                                    this.props.deleteBasketCount(
                                      this.props.basket.length
                                    );
                                  }}
                                  className="fa fa-trash"
                                />
                              </div>
                            </div>
                          </div>
                        ))}
                    </div>
                  ) : null}
                </div>
              </div>
            ) : null}
          </div>
          {this.props.menuItems ? (
            <div
              style={{
                top: "90%",
                visibility: this.state.scrollY > 800 ? "hidden" : null,
                color: this.renderColorOfTexts(),
                cursor: "pointer"
              }}
              className=" text-center px-5 mx-4"
            >
              <Link
                style={{
                  color: this.renderColorOfTexts(),
                  textDecoration: "none"
                }}
                to="/category/new"
              >
                <div className="p-1  col-md-12 col-sm-12 col-lg-12">
                  <FormattedMessage id="menu.new" />
                </div>
              </Link>
              <div
                onClick={() =>
                  this.props.history.push({
                    pathname: "/category/women",
                    state: ""
                  })
                }
                className="p-1  col-md-12 col-sm-12 col-lg-12"
              >
                <FormattedMessage id="menu.women" />
              </div>
              <div
                onClick={() =>
                  this.props.history.push({
                    pathname: "/category/men",
                    state: ""
                  })
                }
                className="p-1  col-md-12 col-sm-12 col-lg-12"
              >
                <FormattedMessage id="menu.men" />
              </div>
              {this.state.user && this.state.user.username ? (
                <div
                  onClick={() => this.logout()}
                  className="p-1  col-md-12 col-sm-12 col-lg-12"
                >
                  خروج
                </div>
              ) : null}
            </div>
          ) : null}
        </div>
      </div>
    );
  }
}
const styles = theme => ({
  underline: {
    backgroundColor: "yellow",
    color: "green"
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
    color: "white",
    backgroundColor: "red"
  },
  focused: {
    "&$focused": {
      color: "white",
      fontSize: 40
    }
  },
  input: {
    borderColor: "white",
    color: "white"
  },
  floatingLabel: {
    color: "white",
    cursor: "pointer",
    pointerEvents: "white"
  },
  button: {
    margin: theme.spacing.unit
  },
  leftIcon: {
    marginRight: theme.spacing.unit
  },
  rightIcon: {
    marginLeft: theme.spacing.unit
  },
  iconSmall: {
    fontSize: 20
  }
});
// Menu.propTypes = {
//   classes: PropTypes.object.isRequired
// };
function mapDispatchToProps(dispatch) {
  return {
    userLogout: () => dispatch(userLogout()),
    deleteBasketCount: index => dispatch(deleteBasketCount(index))
  };
}
function mapStateToProps(state) {
  return {
    basketCount: state.basket.basketCount,
    language: state.language,
    basket: state.basket.basket,
    user: state.user.user
  };
}
export default injectIntl(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(withRouter(withStyles(styles)(Menu)))
);
