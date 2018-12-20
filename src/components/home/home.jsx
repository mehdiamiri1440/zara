import React, { Component } from "react";
import Footer from "../footer/footer";
import Menu from "../menu/menu";
import { Redirect, Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { withStyles, TextField, Input } from "@material-ui/core";
import Basket from "@material-ui/icons/ShoppingCart";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import color from "@material-ui/core/colors/teal";
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchStuff: "",
      email: ""
    };
  }
  searchStuff(event) {
    this.setState({ searchStuff: event.target.value });
  }

  fetchEmail(event) {
    this.setState({ email: event.target.value });
  }
  scrollFunc(event) {}
  renderFooter() {
    return (
      <div
        style={{}}
        className="row justify-content-center align-items-center w-100 col-md-12 col-sm-12 col-lg-12 text-center align-middle"
      >
        <TextField
          style={{ width: "60%" }}
          InputProps={{
            disableUnderline: false
          }}
          id="outlined-name"
          label="SIGN UP FOR OUR NEWSLETTER "
          value={this.state.email}
          onChange={event => this.fetchEmail(event)}
          margin="normal"
          classes={{}}
        />
      </div>
    );
  }

  render() {
    const { classes } = this.props;
    return (
      // style={{height:1000}}
      <div style={{ zIndex: -9 }}>
        <Menu
          menuItems={true}
          color="white"
          search={true}
          basket={true}
          contact={true}
          login={true}
        />
        <Carousel
          stopOnHover={false}
          infiniteLoop={true}
          autoPlay={true}
          showThumbs={false}
          showStatus={false}
        >
          <div onScroll={event => this.scrollFunc(event)}>
            <img
              src={require("../../contents/images/2018-New-Fashion-Men-Costume-Homme-Business-Suits-Jacket-Wedding-Suits-For-Men-Two-Buttons-Three.jpg")}
            />
          </div>
          <div>
            <video
              style={{ height: "100%", width: "100%" }}
              autoPlay
              muted
              loop
              id="myVideo"
            >
              <source
                type="video/mp4"
                src="https://static.zara.net//video//mkt/2018/11/aw18-post-black-friday-video01d/aw18-post-black-friday-video01d_1.mp4?1543109403749"
              />
            </video>
          </div>
          <div>
            <img
              src={require("../../contents/images/2018-New-Fashion-Men-Costume-Homme-Business-Suits-Jacket-Wedding-Suits-For-Men-Two-Buttons-Three.jpg")}
            />
          </div>
        </Carousel>
        <div className="h-100" style={{ height: 400 }}>
          <Footer />
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
Home.propTypes = {
  classes: PropTypes.object.isRequired
};
export default withRouter(withStyles(styles)(Home));
