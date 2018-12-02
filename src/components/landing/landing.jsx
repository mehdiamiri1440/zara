import React, { Component } from "react";
import { withRouter, Redirect } from "react-router-dom";
import "./styles.css";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import {
  Select,
  Button,
  Input,
  InputLabel,
  MenuItem,
  FormControl
} from "@material-ui/core";
class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      country: "",
      language: "",
      languages: [
        { name: "Persian", code: "01" },
        { name: "English", code: "02" },
        { name: "Arabic", code: "03" }
      ],
      countries: [
        { name: "Iran", code: "001" },
        { name: "Iraq", code: "002" },
        { name: "Turkey", code: "003" },
        { name: "Russia", code: "004" }
      ]
    };
  }
  fetchCountryAndLanguage() {
    console.warn("hello mehdi amiri", this.state.language, this.state.country);
    this.props.history.push({
      pathname: "/home",
      state: {
        hello: "world"
      }
    });
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
      <div className="text-white backgroundTheme">
        <span style={{ fontSize: 30 }} className="d-flex w-100  p-5">
          M.S.A
        </span>
        <div className=" col-md-12 col-sm-12 col-lg-12">
          <div>
            <FormControl className={[classes.formControl, "w-25  m-5"]}>
              <InputLabel className="text-white" htmlFor="country">
                Country
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
            <FormControl className={[classes.formControl, "w-25  m-5"]}>
              <InputLabel className="text-white" htmlFor="language">
                Language
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
              className={[
                "w-25 pt-3 row justify-content-center align-items-center mt-5"
              ]}
            >
              <Button
                color="success"
                onClick={() => this.fetchCountryAndLanguage()}
                variant="contained"
                className={[classes.button]}
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
export default (withRouter, withStyles)(styles)(Landing);