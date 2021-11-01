const theme = (isDarkMode) => ({
  palette: {
    mode: isDarkMode ? "dark" : "light",
    type: "dark",
    primary: {
      main: "#1f2833",
    },
    secondary: {
      main: "#66fcf1",
    },
    error: {
      main: "#ff2442",
    },
  },
  // typography: {
  //   fontFamily: [
  //     "Open Sans",
  //     "-apple-system",
  //     "BlinkMacSystemFont",
  //     "Segoe UI",
  //     "Roboto",
  //     "Helvetica Neue",
  //     "Arial",
  //     "sans-serif",
  //     "Apple Color Emoji",
  //     "Segoe UI Emoji",
  //     "Segoe UI Symbol",
  //   ].join(","),
  // },
});
export default theme;
