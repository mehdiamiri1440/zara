import React from "react";
import { Route, withRouter, Switch } from "react-router-dom";
import Women from "./women";
import Men from "./men";

class NewInRoutes extends React.Component {
  static init() {
    return (
      <Switch>
        <Route path="/category/women" component={Women} />;
        <Route path="/category/men" component={Men} />;
      </Switch>
    );
  }

  render() {
    return null;
  }
}

export default withRouter(NewInRoutes);
