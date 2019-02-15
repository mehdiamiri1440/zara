import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.css";
import "bootstrap/dist/css/bootstrap.css";
import * as serviceWorker from "./serviceWorker";
//alerts
// mandatory
import IntlProvider from "./intlProvider";

import { Provider } from "react-redux";
import store from "./store";
import "react-s-alert/dist/s-alert-default.css";

// optional - you can choose the effect you want
import "react-s-alert/dist/s-alert-css-effects/slide.css";
import "react-s-alert/dist/s-alert-css-effects/scale.css";
import "react-s-alert/dist/s-alert-css-effects/bouncyflip.css";
import "react-s-alert/dist/s-alert-css-effects/flip.css";
import "react-s-alert/dist/s-alert-css-effects/genie.css";
import "react-s-alert/dist/s-alert-css-effects/jelly.css";
import "react-s-alert/dist/s-alert-css-effects/stackslide.css";
///end of alerts files
require("bootstrap/dist/js/bootstrap");
const Joi = require("joi");

ReactDOM.render(
  <Provider store={store}>
    <IntlProvider />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
