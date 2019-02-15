import { CHANGE_LANGUAGE } from "./../actions/language";
import localizations from "../localizations";
import languages from "../utility/languages.json";
const initialState = {
  ...languages["en"],
  messages: localizations["en"]
};

/**
 * @param {Object} state
 * @param {Object} action
 * @returns {Object}
 */
export default function(state = initialState, action) {
  switch (action.type) {
    case CHANGE_LANGUAGE:
      return {
        ...state,
        ...languages[action.language],
        messages: localizations[action.language]
      };
    default:
      return state;
  }
}
