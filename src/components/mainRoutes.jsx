import React from "react";
import { Route, withRouter, Switch } from "react-router-dom";
import Login from "./login/login";
import Contact from "./contact/contact";
import ResetPassword from "./resetPassword/resetPassword";
import CreateAccount from "./createAccount/createAccount";
import New from "./menu/new/new";
import Landing from "./landing/landing";
import Home from "./home/home";
import ItemDetails from "./itemDetails/itemDetails";
class MainRoutes extends React.Component {
  static init() {
    return (
      <Switch>
        {/* <Redirect from="/" to="/landing" /> */}
        <Route
          exact
          path="/landing"
          render={() => <Landing {...this.props} />}
        />
        <Route
          exact
          path="/itemDetails"
          render={() => <ItemDetails {...this.props} />}
        />
        <Route exact path="/new" render={props => <New {...this.props} />} />)
        {/* </Route> */}
        <Route
          exact
          path="/createAccount"
          render={() => <CreateAccount {...this.props} />}
        />
        <Route
          exact
          path="/contact"
          render={() => <Contact {...this.props} />}
        />
        <Route exact path="/login" render={() => <Login {...this.props} />} />
        <Route
          exact
          path="/resetPassword"
          render={() => <ResetPassword {...this.props} />}
        />
        <Route exact path="/home" render={() => <Home {...this.props} />} />
      </Switch>
    );
  }

  render() {
    return null;
  }
}

export default withRouter(MainRoutes);
