import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount = () => {
    console.log("drjhf", this.props.history.location.state);
  };

  render() {
    return <div>hello mewhdi bamiri</div>;
  }
}

export default withRouter(Profile);
