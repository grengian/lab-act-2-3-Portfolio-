import * as actionTypes from "../type";

const initialState = {
  isDarkMode: false,
  lang: "en",
};

function uiReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.SET_THEME:
      return {
        ...state,
        isDarkMode: action.payload,
      };
    default: {
      return {
        ...state,
      };
    }
  }
}
export default uiReducer;
