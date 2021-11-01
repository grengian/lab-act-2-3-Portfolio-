import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

//Import Reducers
import uiReducer from "./reducer/uiReducer";

const initialState = {};
const middleware = [thunk];
const reducers = combineReducers({
  //Implement Reducers
  ui: uiReducer,
});
const composeEnchancer =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;
const enchancer = composeEnchancer(applyMiddleware(...middleware));
const store = createStore(reducers, initialState, enchancer);
export default store;
