import React, { Component } from "react";
import { Redirect, Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { withStyles, TextField, Input } from "@material-ui/core";
import { FormattedMessage, injectIntl } from "react-intl";

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = { email: "", showMore: false };
  }
  fetchEmail(event) {
    this.setState({ email: event.target.value });
  }
  changeShowMore() {
    this.setState({ showMore: !this.state.showMore });
  }
  renderMoreInfo() {
    return (
      <div>
        <div className="p-1">
          <a
            style={{ color: "rgba(0,0,0,0.6)", textDecoration: "none" }}
            href=""
          >
            <FormattedMessage id="menu.contactus" />
          </a>
        </div>
        <div className="p-1">
          <a
            style={{ color: "rgba(0,0,0,0.6)", textDecoration: "none" }}
            href=""
          >
            <FormattedMessage id="footer.stories" />
          </a>
        </div>
        <div className="p-1">
          <a
            style={{ color: "rgba(0,0,0,0.6)", textDecoration: "none" }}
            href=""
          >
            <FormattedMessage id="footer.help" />
          </a>
        </div>
        <div className="p-1">
          <a
            style={{ color: "rgba(0,0,0,0.6)", textDecoration: "none" }}
            href=""
          >
            <FormattedMessage id="footer.company" />
          </a>
        </div>
      </div>
    );
  }
  render() {
    return (
      <div>
        <div
          style={{ height: 300 }}
          className="row justify-content-center align-items-center w-100 col-md-12 col-sm-12 col-lg-12 text-center align-middle"
        >
          <span
            className="border-bottom d-flex justify-content-start"
            style={{ color: "rgba(0,0,0,0.6)", width: "60%" }}
          >
            <FormattedMessage id="footer.signupnow" />
          </span>
        </div>
        <div className="col-md-12 col-lg-12 col-sm-12 row justify-content-center align-items-center text-center">
          <div className="p-2">
            <a
              style={{ color: "rgba(0,0,0,0.6)", textDecoration: "none" }}
              href=""
            >
              <FormattedMessage id="footer.instagram" />
            </a>
          </div>
          <div className="p-2">
            <a
              style={{ color: "rgba(0,0,0,0.6)", textDecoration: "none" }}
              href=""
            >
              <FormattedMessage id="footer.facebook" />
            </a>
          </div>
          <div className="p-2">
            <a
              style={{ color: "rgba(0,0,0,0.6)", textDecoration: "none" }}
              href=""
            >
              <FormattedMessage id="footer.twitter" />
            </a>
          </div>
          <div className="p-2">
            <a
              style={{ color: "rgba(0,0,0,0.6)", textDecoration: "none" }}
              href=""
            >
              <FormattedMessage id="footer.telegram" />
            </a>
          </div>
        </div>
        <div className="justify-content-start p-5">
          <div
            className="row"
            onClick={() => this.changeShowMore()}
            style={{
              cursor: "pointer",
              color: "rgba(0,0,0,0.6)",
              textDecoration: "none"
            }}
            href=""
          >
            <FormattedMessage id="footer.info" />
          </div>
          <div className=" row justify-content-start">
            {this.state.showMore ? this.renderMoreInfo() : null}
          </div>
        </div>
        <div className="row justify-content-end col-md-12 col-lg-12 col-sm-12">
          <div className="p-2">
            <a
              style={{ color: "rgba(0,0,0,0.6)", textDecoration: "none" }}
              href=""
            >
              <FormattedMessage id="footer.termofuse" /> |
            </a>
          </div>
          <div className="p-2">
            <a
              style={{ color: "rgba(0,0,0,0.6)", textDecoration: "none" }}
              href=""
            >
              <FormattedMessage id="footer.privacy" /> |
            </a>
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
Footer.propTypes = {
  classes: PropTypes.object.isRequired
};
export default injectIntl(withRouter(withStyles(styles)(Footer)));
