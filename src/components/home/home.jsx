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
    fetch(`http://192.168.1.194:3003/carousel/getShownCarousels`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    })
      .then(response => response.json())
      .then(responseJson => {
        console.log("it is the countires", responseJson);
        // responseJson.map(roleID => rolesID.push(roleID.Id));
        this.setState({ carousels: responseJson });
      })
      .catch(error => {
        console.log("it was false", error);
      });
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
          {this.state.carousels.map((carousel, index) => (
            <div
              style={{ cursor: "pointer" }}
              onClick={() => {
                this.props.history.push({
                  pathname: `/category/${carousel.location}`,
                  state: carousel._id
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
