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
    console.log("in shopping basket and menu", this.props.user);
    this.setState({ user: this.props.user });
    if (
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
  routing(vari) {}
  renderSubMenu(open, subMenuNubmer) {
    if (open) {
      switch (subMenuNubmer) {
        case 1:
          return (
            <div className=" col-md-12 col-sm-12 col-lg-12   row">
              <div className=" row col-md-12 col-sm-12 col-lg-12">TRF </div>
              <div className=" row col-md-12 col-sm-12 col-lg-12">MAN</div>
              <div className=" row col-md-12 col-sm-12 col-lg-12">KIDS</div>
              <div className=" row col-md-12 col-sm-12 col-lg-12">STORIES</div>
            </div>
          );
        case 2:
          return (
            <div className=" row col-md-12 col-sm-12 col-lg-12">
              <div className=" row col-md-12 col-sm-12 col-lg-12">NEW IN</div>
              <div className=" row col-md-12 col-sm-12 col-lg-12">SPECIAL</div>
              <div className=" row col-md-12 col-sm-12 col-lg-12">
                PRICESNEW
              </div>
              <div className=" row col-md-12 col-sm-12 col-lg-12">
                TIMECORNER SHOP
              </div>
              <div className=" row col-md-12 col-sm-12 col-lg-12">WINTER</div>
              <div className=" row col-md-12 col-sm-12 col-lg-12"> MOOD</div>
              <div className=" row col-md-12 col-sm-12 col-lg-12">
                ANIMAL TREND
              </div>
              <div className=" row col-md-12 col-sm-12 col-lg-12">COATS</div>
              <div className=" row col-md-12 col-sm-12 col-lg-12">JACKETS</div>
              <div className=" row col-md-12 col-sm-12 col-lg-12">BLAZERS</div>
              <div className=" row col-md-12 col-sm-12 col-lg-12">TWEED</div>
              <div className=" row col-md-12 col-sm-12 col-lg-12">DRESSES</div>
              <div className=" row col-md-12 col-sm-12 col-lg-12">
                JUMPSUITS
              </div>
              <div className=" row col-md-12 col-sm-12 col-lg-12">
                SHIRTS | BLOUSES
              </div>
              <div className=" row col-md-12 col-sm-12 col-lg-12">TOPS</div>
            </div>
          );
        default:
          break;
      }
    }
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
        window.location.reload();
        console.log("oit is thgew erwspiis", responseJson);
        localStorage.user = null;
        this.props.deleteUserData();
        this.props.history.push({
          pathname: "/home"
        });
      })
      .catch(error => {});
  }
  navigateToItemDetails() {}
  render() {
    const { classes } = this.props;
    return (
      <div
        className=" col-md-12 col-sm-12 col-lg-12 text-white"
        style={{ zIndex: 1 }}
      >
        <div className="position-fixed row col-md-12 col-sm-12 col-lg-12">
          <Link
            className="display-1 p-3 col-md-4 col-sm-4 col-lg-4"
            style={{ textDecoration: "none", cursor: "pointer" }}
            to="/home"
          >
            <div style={{ color: this.renderColorOfTexts() }}>ثریا</div>
          </Link>

          <div className="display-1 mt-3 col-md-4 col-sm-4 col-lg-4 p-3">
            {this.props.search ? (
              <TextField
                InputLabelProps={{
                  className: [classes.floatingLabel, classes.focused],
                  style: { direction: "rtl", color: this.renderColorOfTexts() }
                }}
                id="search"
                inputProps={{ style: { color: this.renderColorOfTexts() } }}
                label="جستجو"
                className={(classes.textField, "display-1 p-3 col-md-12")}
                value={this.state.searchStuff}
                onChange={event => this.searchStuff(event)}
                margin="normal"
              />
            ) : null}
          </div>

          <div
            style={{ paddingTop: "10%" }}
            className="pr-0 justify-content-end row col-md-4 col-sm-4 col-lg-4 p-3 "
          >
            {this.state.user ? (
              <Link style={{ textDecoration: "none" }} to="/profile">
                <div
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
                  ورود
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
                  ارتباط با ما
                </div>
              </Link>
            ) : null}
            {this.props.basket ? (
              <div
                style={{ color: this.renderColorOfTexts(), cursor: "pointer" }}
                className="pt-4 p-2 mt-5 align-middle"
              >
                <div className="hoverBasket position-relative">
                  <i
                    style={{ fontSize: 24 }}
                    className=" fas fa-shopping-cart"
                  />
                  <span
                    style={{ bottom: "72%", left: "50%" }}
                    className="position-absolute bg-info  text-white px-1 rounded-circle"
                  >
                    {this.props.basketCount}
                  </span>
                  <div
                    className="p-2 border-3 inBaskets border-dark border-1 bg-white"
                    id="baskets"
                  >
                    {this.props.basket.map((item, indx) => (
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
                        <div style={{ width: "60%" }} className="text-center">
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
                                this.props.deleteItemFromBasket();
                                let basket = this.state.basket;
                                basket.splice(indx, 1);
                                this.setState({ basket }, () => {
                                  localStorage.basket = JSON.stringify(
                                    this.state.basket
                                  );
                                });
                              }}
                              className="fa fa-trash"
                            />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
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
              className="position-absolute pl-3"
            >
              <Link
                style={{
                  color: this.renderColorOfTexts(),
                  textDecoration: "none"
                }}
                to="/category/new"
              >
                <div className="p-1  col-md-12 col-sm-12 col-lg-12">
                  جدید ها
                  {/* {this.state.subMenuNubmer == 1
                    ? this.renderSubMenu(this.state.open, 1)
                    : null} */}
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
                زنانه
                {/* {this.state.subMenuNubmer == 2
                  ? this.renderSubMenu(this.state.open, 2)
                  : null} */}
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
                مردانه
                {/* {this.state.subMenuNubmer === 3
                  ? this.renderSubMenu(this.state.open, 3)
                  : null} */}
              </div>
              {this.state.user ? (
                <div
                  onClick={() => this.logout()}
                  className="p-1  col-md-12 col-sm-12 col-lg-12"
                >
                  خروج
                </div>
              ) : null}
              {/* <div
              onClick={() => {
                this.setState({ open: !this.state.open, subMenuNubmer: 3 });
              }}
              className="p-1 row col-md-12 col-sm-12 col-lg-12"
            >
              TRF
              {this.state.subMenuNubmer == 3
                ? this.renderSubMenu(this.state.open, 3)
                : null}
            </div>
            <div
              onClick={() => {
                this.setState({ open: !this.state.open, subMenuNubmer: 4 });
              }}
              className="p-1 row col-md-12 col-sm-12 col-lg-12"
            >
              MAN
              {this.state.subMenuNubmer == 4
                ? this.renderSubMenu(this.state.open, 4)
                : null}
            </div>
            <div
              onClick={() => {
                this.setState({ open: !this.state.open, subMenuNubmer: 5 });
              }}
              className="p-1 row col-md-12 col-sm-12 col-lg-12"
            >
              KIDS
              {this.state.subMenuNubmer == 5
                ? this.renderSubMenu(this.state.open, 5)
                : null}
            </div>
            <div
              onClick={() => {
                this.setState({ open: !this.state.open, subMenuNubmer: 6 });
              }}
              className="p-1 row col-md-12 col-sm-12 col-lg-12"
            >
              SHOES
              {this.state.subMenuNubmer == 6
                ? this.renderSubMenu(this.state.open, 6)
                : null}
            </div>
            <div
              onClick={() => {
                this.setState({ open: !this.state.open, subMenuNubmer: 7 });
              }}
              className="p-1 row col-md-12 col-sm-12 col-lg-12"
            >
              GIFT CARD
              {this.state.subMenuNubmer == 7
                ? this.renderSubMenu(this.state.open, 7)
                : null}
            </div>
            <div
              onClick={() => {
                this.setState({ open: !this.state.open, subMenuNubmer: 8 });
              }}
              className="p-1 row col-md-12 col-sm-12 col-lg-12"
            >
              ZARA SRPLS
              {this.state.subMenuNubmer == 8
                ? this.renderSubMenu(this.state.open, 8)
                : null}
            </div>
            <div
              onClick={() => {
                this.setState({ open: !this.state.open, subMenuNubmer: 9 });
              }}
              className="p-1 row col-md-12 col-sm-12 col-lg-12"
            >
              JOIN LIFE
              {this.state.subMenuNubmer == 9
                ? this.renderSubMenu(this.state.open, 9)
                : null}
            </div>
            <div
              onClick={() => {
                this.setState({
                  open: !this.state.open,
                  subMenuNubmer: 10
                });
              }}
              className="p-1 row col-md-12 col-sm-12 col-lg-12"
            >
              STORIES
              {this.state.subMenuNubmer == 10
                ? this.renderSubMenu(this.state.open, 6)
                : null}
            </div> */}
            </div>
          ) : null}
        </div>
        {/* <Route path="/new/women" render={() => <Women {...this.props} />} />; */}
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
    deleteItemFromBasket: () => {
      const action = { type: "DELETE_BASKET_COUNT", user: localStorage.user };
      dispatch(action);
    },
    deleteUserData: () => {
      const action = { type: "USER", user: localStorage.user };
      dispatch(action);
    }
  };
}
function mapStateToProps(state) {
  return {
    basketCount: state.basketCount,
    basket: state.basket,
    user: state.user
  };
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(withStyles(styles)(Menu)));
