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
      selectedImage: -1,
      womenClothes: [
        {
          imageItems: [
            {
              image: require("../../../contents/images/architecture-asking-brainstorming-1438084.jpg"),
              color: "white"
            },
            {
              image: require("../../../contents/images/arms-cheerful-coffee-1331971.jpg"),
              color: "green"
            },
            {
              image: require("../../../contents/images/architecture-asking-brainstorming-1438084.jpg"),
              color: "red"
            }
          ],
          name: "",
          price: 12000,
          descriprion: "سلامممم مهددی اوضاع احوالت",
          size: []
        },
        {
          imageItems: [
            {
              image: require("../../../contents/images/arms-cheerful-coffee-1331971.jpg"),
              color: "green"
            },
            {
              image: require("../../../contents/images/arms-cheerful-coffee-1331971.jpg"),
              color: "blue"
            },
            {
              image: require("../../../contents/images/arms-cheerful-coffee-1331971.jpg"),
              color: "white"
            }
          ],
          name: "",
          price: 12000,
          descriprion: "na man aslan khoob nistam",
          size: []
        },
        {
          imageItems: [
            {
              image: require("../../../contents/images/beautiful-bestfriends-celebration-1627935.jpg"),
              color: "dark"
            },
            {
              image: require("../../../contents/images/beautiful-bestfriends-celebration-1627935.jpg"),
              color: "orange"
            },
            {
              image: require("../../../contents/images/beautiful-bestfriends-celebration-1627935.jpg"),
              color: "yellow"
            }
          ],
          name: "",
          price: 12000,
          descriprion: "to chtori hoseyn hoseynian",
          size: []
        }
      ]
    };
    // {
    //   images: [
    //     require("../../../contents/images/architecture-asking-brainstorming-1438084.jpg")
    //   ],
    //   name: "",
    //   price: 12000,
    //   descriprion: "hey che fazecsangingi",
    //   size: []
    // },
    // {
    //   images: [
    //     require("../../../contents/images/arms-cheerful-coffee-1331971.jpg")
    //   ],
    //   name: "",
    //   price: 12000,
    //   descriprion: "ajaab rasmie rasme zamoone",
    //   size: []
    // },
    // {
    //   images: [
    //     require("../../../contents/images/architecture-asking-brainstorming-1438084.jpg")
    //   ],
    //   name: "",
    //   price: 12000,
    //   descriprion: "ghese ye margo ",
    //   size: []
    // },
    // {
    //   images: [
    //     require("../../../contents/images/architecture-asking-brainstorming-1438084.jpg")
    //   ],
    //   name: "",
    //   price: 12000,
    //   descriprion: "na baste am be kas del",
    //   size: []
    // },
    // {
    //   images: [
    //     require("../../../contents/images/arms-cheerful-coffee-1331971.jpg")
    //   ],
    //   name: "",
    //   price: 12000,
    //   descriprion: "be sooye to be shoghe rooye to",
    //   size: []
    // }
  }
  counterOfTheLoopFunction() {
    for (let j = 0; j < this.state.womenClothes.length - 5; j++) {
      arrayOfCounters.push(i);
      i += 5;
    }

    return arrayOfCounters;
  }
  changeMainImage(selected) {
    this.setState({ selectedImage: selected });
    return this.state.selectedImage;
  }

  renderImagesWithDetails() {
    var counter = this.counterOfTheLoopFunction();
    return (
      <div className="pt-3  row">
        {this.state.womenClothes.map((cloth, index) => (
          <div
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
                this.state.selectedImage == -1
                  ? cloth.imageItems[0].image
                  : cloth.imageItems[this.state.selectedImage].image
              }
            />
            <div
              id="hide"
              className="show row justify-content-center col-lg-12 align-top align-text-top text-center"
            >
              {cloth.imageItems.map((image, indx) => (
                <div key={indx}>
                  <div onClick={() => this.changeMainImage(indx)}>
                    <img
                      className="p-2"
                      style={{ width: 50, height: 50 }}
                      src={image.image}
                    />
                  </div>
                  <div>{image.color}</div>
                </div>
              ))}
            </div>
            <div className="col-lg-12 align-top align-text-top row justify-content-center text-center">
              {cloth.descriprion}
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
    fontFamily: "Neue-Helvetica-Condensed",
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
export default (withRouter, withStyles)(styles)(Women);
