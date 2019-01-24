import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import Menu from "../menu";
import "./men.css";
import Footer from "../../footer/footer";
import { Button, withStyles, TextField } from "@material-ui/core";
import { serverAddress } from "./../../../utility/consts";
let i = 0;
let arrayOfCounters = [];
class Men extends Component {
  constructor(props) {
    super(props);
    this.state = {
      headerItem: {},
      headerImage: "",
      products: []
    };
  }
  componentDidMount() {
    this.getProducts().then(() => {
      let headerItem = this.state.headerItem;
      if (this.props.history.location.state) {
        this.state.products.filter(product => {
          if (product._id === this.props.history.location.state) {
            headerItem = product;
            this.setState({ headerItem: headerItem }, () => {
              this.setState({ headerImage: this.state.headerItem.images[0] });
            });
          }
        });
      }
    });
  }
  getProducts() {
    return new Promise((resolve, reject) => {
      fetch(`${serverAddress}/product/getIsNew`, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        }
      })
        .then(response => response.json())
        .then(responseJson => {
          responseJson.map(cloth => (cloth.selectedImage = -1));
          this.setState({ products: responseJson });
          resolve(responseJson);
        })
        .catch(error => {
          console.log("it was false", error);
        });
    });
  }
  counterOfTheLoopFunction() {
    for (let j = 0; j < this.state.products.length - 5; j++) {
      arrayOfCounters.push(i);
      i += 5;
    }

    return arrayOfCounters;
  }
  changeMainImage(index, indx) {
    var products = this.state.products;
    products[index].selectedImage = indx;
    this.setState({ products });
    // return this.state.selectedImage;
  }

  renderImagesWithDetails() {
    var counter = this.counterOfTheLoopFunction();
    return (
      <div className="pt-3  row">
        {this.state.headerItem ? (
          <div className="d-flex justify-content-center align-items-center pt-5 w-100">
            <img
              onClick={() => {
                if (this.state.headerItem && this.state.headerImage) {
                  this.props.history.push({
                    pathname: `/itemDetails/id/${this.state.headerItem._id}`,
                    state: this.state.headerItem._id
                  });
                }
              }}
              src={this.state.headerImage ? this.state.headerImage : null}
              style={{ width: "40%", heigh: "20rem" }}
              alt=""
            />
          </div>
        ) : null}
        {this.state.products.map((cloth, index) => (
          <div
            onClick={() => {
              if (cloth.isAvailable)
                this.props.history.push({
                  pathname: `/itemDetails/id/${cloth._id}`,
                  state: cloth._id
                });
            }}
            style={{ cursor: "pointer" }}
            className={
              counter.indexOf(index) != -1
                ? " justify-content-center  row"
                : "col-md-6 col-sm-6 row  justify-content-end col-lg-6 pt-5"
            }
            key={index}
          >
            <img
              className={`pt-3 ${cloth.isAvailable ? "visibility" : null}`}
              style={{
                height: "90%",
                width: counter.indexOf(index) != -1 ? "45%" : "90%"
              }}
              src={
                cloth.selectedImage == -1
                  ? cloth.images[0]
                  : cloth.images[cloth.selectedImage]
              }
            />
            {!cloth.isAvailable ? (
              <div
                style={{ fontSize: 20, fontWeight: "bold" }}
                className="position-absolute text-white  h-100 d-flex justify-content-center align-items-center col-10"
              >
                <span className="col p-0 text-center p-2 bg-dark">
                  {" "}
                  محصول ناموجود است
                </span>
              </div>
            ) : null}
            <div
              id="hide"
              className="showing row justify-content-center col-lg-12 align-top align-text-top text-center"
            >
              {cloth.images.map((image, indx) => (
                <div key={indx}>
                  <div
                    key={indx}
                    onClick={() => this.changeMainImage(index, indx)}
                  >
                    <img
                      className="p-2"
                      style={{ width: 50, height: 50 }}
                      src={image}
                    />
                  </div>
                  <div>{image.color}</div>
                </div>
              ))}
            </div>
            <div className="col-lg-12 align-top align-text-top row justify-content-center text-center">
              {cloth.description ? cloth.description : null}
            </div>
          </div>
        ))}
      </div>
    );
  }
  render() {
    const { classes } = this.props;
    return (
      <div className="body">
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
        {/* images */}
        {this.renderImagesWithDetails()}
        <div />
        <div />
        <Footer />
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
Men.propTypes = {
  classes: PropTypes.object.isRequired
};
export default withRouter(withStyles(styles)(Men));
