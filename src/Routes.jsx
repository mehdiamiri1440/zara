import React from "react";
import { Route, Link, withRouter } from "react-router-dom";
import MainRoutes from "./components/mainRoutes";
import NewInRoutes from "./components/menu/new/newInRoutes";
import ProfileRoutes from "./components/profile/profileRoutes";
import store from "./store";
import { serverAddress } from "./utility/consts";
import AccessDenied from "./components/accessDenied/accessDenied";
class Routes extends React.Component {
  constructor(props) {
    super(props);
    this.state = { userLogin: false };
  }
  componentDidMount() {
    this.checkUserLoggedIn();
    //alert("welcome");
  }
  checkUserLoggedIn() {
    fetch(`${serverAddress}/user/isuserlogin`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    })
      .then(responseJson => {
        if (responseJson)
          this.setState({ userLogin: true }, () => {
            console.log("user login in routes:", this.state.userLogin);
          });
        else
          this.setState({ userLogin: false }, () => {
            console.log("user login in routes", this.state.userLogin);
          });
      })
      .catch(error => console.error("Error:", error));
  }
  render() {
    // console.log("in routes direction:", store.getState().language.fontFamily);
    return (
      <div
        style={{
          direction: store.getState().language.direction
          // fontFamily: store.getState().language.fontFamily
        }}
        className="app"
      >
        {/* <Route
          exact
          path="/login"
          render={() => <MainRoutes {...this.props} />}
        /> */}
        {MainRoutes.init()}
        {this.state.userLogin ? <ProfileRoutes /> : <AccessDenied />}
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
