import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material";
import { useSelector } from "react-redux";
import theme from "../utils/theme";
import Main from "../pages/Main";

export default function SetRouter() {
  const ui = useSelector((state) => state.ui);
  const THEME = createTheme(theme(ui.isDarkMode));
  return (
    <ThemeProvider theme={THEME}>
      <Router>
        <Switch>
          <Route component={Main} path="/" />
        </Switch>
      </Router>
    </ThemeProvider>
  );
}
