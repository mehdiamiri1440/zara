import React, { Component } from "react";
import { Redirect, Link, withRouter, Route } from "react-router-dom";
import PropTypes from "prop-types";
import New from "./new/new";
import Women from "./new/women.jsx";
import Basket from "@material-ui/icons/ShoppingCart";
import { withStyles, TextField } from "@material-ui/core";
class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      subMenuNubmer: 0,
      searchStuff: "",
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
        <div className="position-fixed row col-md-12 col-sm-12 col-lg-12">
          <Link
            className="display-1 p-3 col-md-4 col-sm-4 col-lg-4"
            style={{ textDecoration: "none", cursor: "pointer" }}
            to="/home"
          >
            <div
              style={{
                color: this.renderColorOfTexts()
              }}
            >
              ثریا
            </div>
          </Link>

          <div className="display-1 mt-3 col-md-4 col-sm-4 col-lg-4 p-3">
            {this.props.search ? (
              <TextField
                InputLabelProps={{
                  className: [classes.floatingLabel, classes.focused],
                  style: {
                    direction: "rtl",
                    color: this.renderColorOfTexts()
                  }
                }}
                id="search"
                inputProps={{
                  style: {
                    color: this.renderColorOfTexts()
                  }
                }}
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
            {this.props.login ? (
              this.props.history.location.state ? (
                <Link style={{ textDecoration: "none" }} to="/profile">
                  <div
                    style={{
                      color: this.renderColorOfTexts(),
                      cursor: "pointer"
                    }}
                    className="pt-4 p-2 mt-5 align-middle"
                  >
                    {this.props.history.location.state.firstName}
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
              )
            ) : null}
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
                <Basket />
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
                to="/new"
              >
                <div
                  onClick={() => {
                    this.setState({
                      open: !this.state.open,
                      subMenuNubmer: 1
                    });
                  }}
                  className="p-1  col-md-12 col-sm-12 col-lg-12"
                >
                  جدید ها
                  {this.state.subMenuNubmer == 1
                    ? this.renderSubMenu(this.state.open, 1)
                    : null}
                </div>
              </Link>
              <div
                onClick={() =>
                  this.setState({
                    open: !this.state.open,
                    subMenuNubmer: 2
                  })
                }
                className="p-1  col-md-12 col-sm-12 col-lg-12"
              >
                زنانه
                {this.state.subMenuNubmer == 2
                  ? this.renderSubMenu(this.state.open, 2)
                  : null}
              </div>
              <div
                onClick={() =>
                  this.setState({
                    open: !this.state.open,
                    subMenuNubmer: 3
                  })
                }
                className="p-1  col-md-12 col-sm-12 col-lg-12"
              >
                مردانه
                {this.state.subMenuNubmer == 3
                  ? this.renderSubMenu(this.state.open, 3)
                  : null}
              </div>
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
export default withRouter(withStyles(styles)(Menu));
