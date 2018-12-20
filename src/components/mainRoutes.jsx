import React from "react";
import { Redirect, Route, withRouter, Switch } from "react-router-dom";
import Login from "./login/login";
import Contact from "./contact/contact";
import ResetPassword from "./resetPassword/resetPassword";
import CreateAccount from "./createAccount/createAccount";
import New from "./menu/new/new";
import Landing from "./landing/landing";
import ShoppingBasket from "./shoppingBasket/shoppingBasket";
import Home from "./home/home";
import ProcessOrder from "./processOrder/processOrder";
import ItemDetails from "./itemDetails/itemDetails";
import Profile from "./profile/profile";
class MainRoutes extends React.Component {
  static init() {
    return (
      <Switch>
        {/* <Route from="/" to="/landing" /> */}
        <Route exact path="/" render={() => <Landing {...this.props} />} />
        <Route
          exact
          path="/landing"
          render={() => <Landing {...this.props} />}
        />
        <Route
          exact
          path="/profile"
          render={() => <Profile {...this.props} />}
        />
        <Route
          exact
          path="/processOrder"
          render={() => <ProcessOrder {...this.props} />}
        />
        <Route
          exact
          path="/shoppingBasket"
          render={() => <ShoppingBasket {...this.props} />}
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
