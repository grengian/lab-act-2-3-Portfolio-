import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import SetRouter from "./router/SetRouter"

export default function App() {
  return (
    <Provider store={store}>
        <SetRouter />
    </Provider>
  );
}
