import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import Menu from "../menu";
import "./womenStyles.css";
import Footer from "../../footer/footer";
import { Button, withStyles, TextField } from "@material-ui/core";
let i = 0;
let arrayOfCounters = [];
class Women extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    };
  }
  componentDidMount() {
    this.getProducts();
  }
  getProducts() {
    fetch(`http://192.168.1.194:3003/product/getByCategoryName/women`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    })
      .then(response => response.json())
      .then(responseJson => {
        console.log("it is the countires", responseJson);
        responseJson.map(cloth => (cloth.selectedImage = -1));
        this.setState({ products: responseJson });
      })
      .catch(error => {
        console.log("it was false", error);
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
        {this.state.products.map((cloth, index) => (
          <div
            onClick={() =>
              this.props.history.push({
                pathname: `/itemDetails/id/${cloth._id}`
                // state: cloth._id
              })
            }
            style={{ cursor: "pointer" }}
            className={
              counter.indexOf(index) != -1
                ? " justify-content-center  row"
                : "col-md-6 col-sm-6 row  justify-content-end col-lg-6 pt-5"
            }
            key={index}
          >
            <img
              className="visibility"
              style={{
                width: counter.indexOf(index) != -1 ? "45%" : "90%"
              }}
              src={
                cloth.selectedImage == -1
                  ? cloth.images[0]
                  : cloth.images[cloth.selectedImage]
              }
            />
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
              {cloth.descriprion ? cloth.descriprion : null}
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
Women.propTypes = {
  classes: PropTypes.object.isRequired
};
export default withRouter(withStyles(styles)(Women));
