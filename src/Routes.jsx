import React from "react";
import { Route, Link, withRouter } from "react-router-dom";
import MainRoutes from "./components/mainRoutes";
import NewInRoutes from "./components/menu/new/newInRoutes";
import store from "./store";

class Routes extends React.Component {
  componentDidMount() {
    //alert("welcome");
  }
  render() {
    console.log("in routes direction:", store.getState().language.fontFamily);
    return (
      <div
        style={{
          direction: store.getState().language.direction
          // fontFamily: store.getState().language.fontFamily
        }}
        className="app"
      >
        <Route
          exact
          path="/login"
          render={() => <MainRoutes {...this.props} />}
        />
        {MainRoutes.init()}
        {NewInRoutes.init()}
      </div>
    );
  }
}
function mapStateToProps(state, props) {
  return {
    language: state.language
  };
}
export default withRouter(Routes);
