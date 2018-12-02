import React from "react";
import { Route, withRouter, Switch } from "react-router-dom";
import Women from "./women";
import Men from "./men";
import Kids from "./kids";
class NewInRoutes extends React.Component {
  static init() {
    return (
      <Switch>
        <Route path="/new/women" component={Women} />;
        <Route path="/new/men" component={Men} />;
        <Route path="/new/kids" component={Kids} />
      </Switch>
    );
  }

  render() {
    return null;
  }
}

export default withRouter(NewInRoutes);
