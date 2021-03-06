import React, { Component } from "react";
import { withRouter, Redirect } from "react-router-dom";
import "./styles.css";
import PropTypes from "prop-types";
import Alert from "react-s-alert";
import { withStyles } from "@material-ui/core/styles";
import { serverAddress } from "./../../utility/consts";
import {
  Select,
  Button,
  Input,
  InputLabel,
  MenuItem,
  FormControl
} from "@material-ui/core";
import { changeLanguage } from "../../actions/language";
import { connect } from "react-redux";
class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      country: "",
      language: "",
      languages: [
        { name: "Persian", _id: "01" },
        { name: "English", _id: "02" },
        { name: "Arabic", _id: "03" }
      ],
      countries: [
        // { name: "Iran", _id: "001" },
        // { name: "Iraq", _id: "002" },
        // { name: "Turkey", _id: "003" },
        // { name: "Russia", _id: "004" }
      ]
    };
  }
  componentDidMount() {
    this.getCountries();
  }

  getCountries() {
    fetch(`${serverAddress}/country`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    })
      .then(response => response.json())
      .then(responseJson => {
        // responseJson.map(roleID => rolesID.push(roleID.Id));
        this.setState({ countries: responseJson });
      })
      .catch(error => {});
  }
  fetchCountryAndLanguage() {
    // 172.16.204.236:3003/country/get
    if (this.state.language === "Persian") this.props.changeLanguage("fa");
    else if (this.state.language === "English") this.props.changeLanguage("en");
    else this.props.changeLanguage("ar");
    localStorage.language = this.state.language.toString();
    localStorage.country = this.state.country.toString();
    if (this.state.country && this.state.language) {
      console.warn(
        "hello mehdi amiri",
        this.state.language,
        this.state.country
      );
      this.props.history.push({
        pathname: "/home",
        state: {
          hello: "world"
        }
      });
    } else {
      Alert.error("Fill out all the inputs", {
        position: "bottom-right",
        effect: "slide",
        timeout: 2000
      });
    }
  }
  handleCountryChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  handleLanguageChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  render() {
    const { classes } = this.props;
    return (
      <div className="backgroundTheme ">
        <Alert stack={{ limit: 3 }} />

        <span style={{ fontSize: 30 }} className="d-flex w-100  p-5">
          Soraya
        </span>
        <div className=" col-md-12 col-sm-12 col-lg-12">
          <div>
            <FormControl className={"w-25  m-5"}>
              <InputLabel className="text-white" htmlFor="country">
                country
              </InputLabel>
              <Select
                value={this.state.country}
                onChange={this.handleCountryChange}
                input={
                  <Input className=" text-white" name="country" id="country" />
                }
              >
                {this.state.countries.map((country, index) => (
                  <MenuItem key={index} value={country.name}>
                    {country.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <FormControl className={"w-25  m-5"}>
              <InputLabel className="text-white" htmlFor="language">
                language
              </InputLabel>
              <Select
                value={this.state.language}
                onChange={this.handleLanguageChange}
                input={
                  <Input className="text-white" name="language" id="language" />
                }
              >
                {this.state.languages.map((language, index) => (
                  <MenuItem key={index} value={language.name}>
                    {language.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <FormControl
              className={
                "w-25 pt-3 row justify-content-center align-items-center mt-5"
              }
            >
              <Button
                onClick={() => this.fetchCountryAndLanguage()}
                variant="contained"
                style={{
                  marginRight: "20%",
                  width: "30%",
                  border: 0,
                  borderRadius: 0
                }}
              >
                GO
              </Button>
            </FormControl>
          </div>
        </div>
      </div>
    );
  }
}
const styles = theme => ({
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
Landing.propTypes = {
  classes: PropTypes.object.isRequired
};
function mapStateToProps(state, props) {
  return {
    language: state.language
    // notification: state.notification
  };
}
export default connect(
  mapStateToProps,
  { changeLanguage }
)(withRouter(withStyles(styles)(Landing)));
