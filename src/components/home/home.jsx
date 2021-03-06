import React, { Component } from "react";
import Footer from "../footer/footer";
import Menu from "../menu/menu";
import { Redirect, Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { css } from "@emotion/core";
import { ScaleLoader } from "react-spinners";
import { withStyles, TextField, Input } from "@material-ui/core";
import Basket from "@material-ui/icons/ShoppingCart";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { FormattedMessage, injectIntl } from "react-intl";
import { serverAddress } from "./../../utility/consts";
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      searchStuff: "",
      email: "",
      carousels: []
    };
  }
  searchStuff(event) {
    this.setState({ searchStuff: event.target.value });
  }
  componentDidMount() {
    this.getCarousel();
  }
  getCarousel() {
    fetch(`${serverAddress}/carousel/getShownCarousels`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    })
      .then(response => response.json())
      .then(responseJson => {
        // responseJson.map(roleID => rolesID.push(roleID.Id));
        this.setState({ carousels: responseJson, loading: false });
      })
      .catch(error => {});
  }
  fetchEmail(event) {
    this.setState({ email: event.target.value });
  }
  render() {
    const { classes } = this.props;
    return (
      <div>
        <div
          className="position-absolute"
          style={{
            top: "50%",
            left: "50%",
            zIndex: 9999
          }}
        >
          <ScaleLoader
            sizeUnit={"px"}
            size={400}
            color={"red"}
            loading={this.state.loading}
          />
        </div>
        <div
          style={{
            backgroundColor: `${this.state.loading ? "gray" : "transparent"}`,
            opacity: `${this.state.loading ? 0.4 : 1}`,
            zIndex: -9
          }}
        >
          <Menu
            menuItems={true}
            color="white"
            search={true}
            basket={true}
            contact={true}
            login={true}
          />
          <div style={{ direction: "ltr" }}>
            <Carousel
              stopOnHover={false}
              infiniteLoop={true}
              autoPlay={true}
              showThumbs={false}
              showStatus={false}
            >
              {this.state.carousels.map((carousel, index) => (
                <div
                  key={index}
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    this.props.history.push({
                      pathname: `/category/${carousel.location.split("/")[0]}`,
                      state: carousel.location.split("/")[1]
                    });
                  }}
                  onScroll={event => this.scrollFunc(event)}
                >
                  <img
                    // carousel.image
                    src={carousel.image}
                  />
                </div>
              ))}
            </Carousel>
          </div>
          <div className="h-100" style={{ height: 400 }}>
            <Footer />
          </div>
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
