import React from "react";
import { Route, withRouter, Switch } from "react-router-dom";
import ResetPassword from "./../resetPassword/resetPassword";
import UpdateAddresses from "./updateAddresses";
import Profile from "./profile";
import OrdersAndReturns from "./ordersAndReturns";
import EditBasicInfos from "./editBasicInfos";
import PasswordSentSuccessfully from "../passwordSentSuccessfully/passwordSentSuccessfully";
class ProfileRoutes extends React.Component {
  render() {
    return (
      <Switch>
        <Route
          exact
          path="/profile"
          render={() => <Profile {...this.props} />}
        />
        <Route
          exact
          path="/profile/updateAddresses"
          render={() => <UpdateAddresses {...this.props} />}
        />
        <Route
          exact
          path="/profile/ordersAndReturns"
          render={() => <OrdersAndReturns {...this.props} />}
        />
        <Route
          exact
          path="/profile/editBasicInfos"
          render={() => <EditBasicInfos {...this.props} />}
        />
        <Route
          exact
          path="/passwordSentSuccessfully"
          render={() => <PasswordSentSuccessfully {...this.props} />}
        />
        <Route
          exact
          path="/profile/resetPassword"
          render={() => <ResetPassword {...this.props} />}
        />
      </Switch>
    );
  }
}

export default withRouter(ProfileRoutes);
