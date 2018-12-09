import React from "react";
import { Route, withRouter, Switch } from "react-router-dom";
import Women from "./women";

class NewInRoutes extends React.Component {
  static init() {
    return (
      <Switch>
        <Route path="/new/women" component={Women} />;
      </Switch>
    );
  }

  render() {
    return null;
  }
}

export default withRouter(NewInRoutes);
