import React, { Component } from "react";
import { withRouter } from "react-router-dom";
class PasswordSentSuccessfully extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="w-100 text-center ">
        <h2> برای تغییر رمز عبور به ایمیل خود مراجعه کنید</h2>
      </div>
    );
  }
}

export default withRouter(PasswordSentSuccessfully);
