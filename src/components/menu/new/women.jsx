import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import Menu from "../menu";
import Footer from "../../footer/footer";
import { Button, withStyles, TextField } from "@material-ui/core";
let i = 0;
let arrayOfCounters = [];
class Women extends Component {
  constructor(props) {
    super(props);
    this.state = {
      womenClothes: [
        {
          images: [
            require("../../../contents/images/architecture-asking-brainstorming-1438084.jpg")
          ],
          name: "",
          price: 12000,
          descriprion: "mehdi amiri salam chtori",
          size: []
        },
        {
          images: [
            require("../../../contents/images/arms-cheerful-coffee-1331971.jpg")
          ],
          name: "",
          price: 12000,
          descriprion: "na man aslan khoob nistam",
          size: []
        },
        {
          images: [
            require("../../../contents/images/beautiful-bestfriends-celebration-1627935.jpg")
          ],
          name: "",
          price: 12000,
          descriprion: "to chtori hoseyn hoseynian",
          size: []
        },
        {
          images: [
            require("../../../contents/images/architecture-asking-brainstorming-1438084.jpg")
          ],
          name: "",
          price: 12000,
          descriprion: "hey che fazecsangingi",
          size: []
        },
        {
          images: [
            require("../../../contents/images/arms-cheerful-coffee-1331971.jpg")
          ],
          name: "",
          price: 12000,
          descriprion: "ajaab rasmie rasme zamoone",
          size: []
        },
        {
          images: [
            require("../../../contents/images/architecture-asking-brainstorming-1438084.jpg")
          ],
          name: "",
          price: 12000,
          descriprion: "ghese ye margo ",
          size: []
        },
        {
          images: [
            require("../../../contents/images/architecture-asking-brainstorming-1438084.jpg")
          ],
          name: "",
          price: 12000,
          descriprion: "na baste am be kas del",
          size: []
        },
        {
          images: [
            require("../../../contents/images/arms-cheerful-coffee-1331971.jpg")
          ],
          name: "",
          price: 12000,
          descriprion: "be sooye to be shoghe rooye to",
          size: []
        }
      ]
    };
  }
  counterOfTheLoopFunction() {
    for (let j = 0; j < this.state.womenClothes.length - 5; j++) {
      arrayOfCounters.push(i);
      i += 5;
    }

    return arrayOfCounters;
  }
  renderImagesWithDetails() {
    var counter = this.counterOfTheLoopFunction();
    return (
      <div className="p-5 col-md-12 col-sm-12 col-lg-12 row pr-0 mr-0`">
        {this.state.womenClothes.map((cloth, index) => (
          <div
            className={
              counter.indexOf(index) != -1
                ? "col-md-12 col-sm-12 justify-content-end col-lg-12 row"
                : "col-md-6 col-sm-6 col-lg-6 row justify-content-center"
            }
            key={index}
          >
            <img
              style={{ width: "50%", height: "100%" }}
              src={cloth.images[0]}
            />
            <div style={{ zIndex: 999 }}>{cloth.descriprion}</div>
          </div>
        ))}
      </div>
    );
  }
  render() {
    const { classes } = this.props;
    return (
      <div style={{ flex: 1 }} className="col-md-12 col-lg-12 col-sm-12 row">
        <div>
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
