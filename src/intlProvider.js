// ConnectedIntlProvider.js
import React, { Component } from "react";
import { connect } from "react-redux";
import App from "./App";

// Localization
import { addLocaleData, IntlProvider } from "react-intl";
import en from "react-intl/locale-data/en";
import fa from "react-intl/locale-data/fa";
import ar from "react-intl/locale-data/ar";
addLocaleData([...en, ...fa, ...ar]);
// let i18nConfig = {
//   locale: "fr",
//   messages: messages["fr"]
// };
// let changeLanguage = lang => {
//   i18nConfig = { locale: lang, messages: messages[lang] };
//   return i18nConfig;
// };
class ConnectedIntlProvider extends Component {
  render() {
    return (
      <IntlProvider
        locale={this.props.language}
        key={this.props.language}
        messages={this.props.messages}
      >
        <App />
      </IntlProvider>
    );
  }
}

function mapStateToProps(state) {
  const { name: language, messages } = state.language;
  return { language, messages };
}
export default connect(mapStateToProps)(ConnectedIntlProvider);
