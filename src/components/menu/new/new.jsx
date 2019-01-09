import React, { Component } from "react";
import { Link, withRouter, Route } from "react-router-dom";
import Menu from "../menu";
import Footer from "../../footer/footer";
import PropTypes from "prop-types";
import "./new.css";
import { Carousel } from "react-responsive-carousel";
import { Button, withStyles, TextField } from "@material-ui/core";
import { serverAddress } from "./../../../utility/consts";
class New extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      newinCategories: []
    };
  }
  componentDidMount = () => {
    this.getNewCategories();
  };
  goToCategory() {
    this.props.history.push({
      pathname: "/category/women"
    });
  }
  getNewCategories() {
    fetch(`${serverAddress}/product/getIsNew`, {
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
        this.setState({ products: responseJson });
      })
      .catch(error => {
        console.log("it was false", error);
      });
  }
  renderProducts() {
    this.state.products.map((product, index) => {
      if (product.isAvialable) {
        return (
          <div>
            <div
              onMouseOut={() =>
                this.setState({
                  visible: false
                })
              }
              className={`mx-2 ${this.state.visible ? "hoverCard" : null} card`}
              style={{ width: 400 }}
              onClick={() => this.goToCategory()}
            >
              <img src={product.image} alt="" />
            </div>
            <div>{product.name}</div>
            <div>{product.description}</div>
            <div>{product.price}</div>
            <div>{product}</div>
          </div>
        );
      } else {
        return (
          <div>
            <div className="p-4 d-flex justify-content-center px-5">
              <div className="px-5">
                <div className="row p-3">
                  <div
                    onClick={() => this.goToCategory()}
                    onMouseOver={() =>
                      this.setState({
                        visible: true
                      })
                    }
                    onMouseOut={() =>
                      this.setState({
                        visible: false
                      })
                    }
                    className={`mx-2 ${
                      this.state.visible ? "hoverCard" : null
                    } card`}
                    style={{ width: 400 }}
                  >
                    <div style={{ cursor: "pointer" }}>
                      <img
                        className="card-img-top"
                        src={require("../../../contents/images/arms-cheerful-coffee-1331971.jpg")}
                        alt="Card image"
                      />
                      <div className="card-img-overlay d-flex justify-content-center">
                        {this.state.visible ? (
                          <div>
                            <h4 class="card-title">John Dsdfsdfoe</h4>
                            <p class="card-text">Some sdfsfsd text.</p>
                          </div>
                        ) : null}
                      </div>
                      <div className="card-body">
                        <h4 className="card-title">John Doe</h4>
                        <p class="card-text">Some example text.</p>
                        <a href="#" className="btn btn-primary">
                          See Profile
                        </a>
                      </div>
                    </div>
                  </div>
                  <div
                    onMouseOver={() =>
                      this.setState({
                        visible: true
                      })
                    }
                    onMouseOut={() =>
                      this.setState({
                        visible: false
                      })
                    }
                    className={`mx-2 ${
                      this.state.visible ? "hoverCard" : null
                    } card`}
                    style={{ width: 400 }}
                  >
                    <div style={{ cursor: "pointer" }}>
                      <img
                        className="card-img-top"
                        src={require("../../../contents/images/arms-cheerful-coffee-1331971.jpg")}
                        alt="Card image"
                      />
                      <div class="card-img-overlay d-flex justify-content-center">
                        {this.state.visible ? (
                          <div>
                            <h4 className="card-title">John Dsdfsdfoe</h4>
                            <p className="card-text">Some sdfsfsd text.</p>
                          </div>
                        ) : null}
                      </div>
                      <div className="card-body">
                        <h4 className="card-title">John Doe</h4>
                        <p className="card-text">Some example text.</p>
                        <a href="#" className="btn btn-primary">
                          See Profile
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      }
    });
  }
  render() {
    // const { classes } = this.props;
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
        {this.renderProducts()}
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
