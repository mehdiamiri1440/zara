import React, { Component } from "react";
import { Link, withRouter, Route } from "react-router-dom";
import Menu from "../menu";
import Footer from "../../footer/footer";
import PropTypes from "prop-types";
import { Carousel } from "react-responsive-carousel";
import { Button, withStyles, TextField } from "@material-ui/core";
class New extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    // const { classes } = this.props;
    return (
      <div>
        <div
          style={{ zIndex: 9999, right: 0 }}
          className=" position-absolute pt-5 p-3"
        >
          <div style={{ textDecoration: "none" }} className="text-white">
            <div className="text-center align-middle">تازه ها</div>
          </div>
          <Link
            style={{ textDecoration: "none" }}
            className="text-center align-middle text-white"
            to="/new/women"
          >
            <div className="row col-md-12 col-sm-12 col-lg-12">زنانه </div>
          </Link>
          <Link
            style={{ textDecoration: "none" }}
            className="text-center align-middle text-white"
            to="/new/men"
          >
            <div className=" row col-md-12 col-sm-12 col-lg-12">مردانه</div>
          </Link>
        </div>
        <Carousel
          stopOnHover={false}
          infiniteLoop={true}
          autoPlay={true}
          showThumbs={false}
          showStatus={false}
        >
          <div onScroll={event => this.scrollFunc(event)}>
            <img
              src={require("../../../contents/images/2018-New-Fashion-Men-Costume-Homme-Business-Suits-Jacket-Wedding-Suits-For-Men-Two-Buttons-Three.jpg")}
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
              src={require("../../../contents/images/2018-New-Fashion-Men-Costume-Homme-Business-Suits-Jacket-Wedding-Suits-For-Men-Two-Buttons-Three.jpg")}
            />
          </div>
        </Carousel>
        <Footer />
      </div>
    );
  }
}
{
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
// New.propTypes = {
//   classes: PropTypes.object.isRequired
// };
export default withRouter(New);
