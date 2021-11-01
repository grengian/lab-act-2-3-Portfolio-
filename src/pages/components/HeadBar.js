import React, { useEffect } from "react";
import { AppBar, Toolbar, Box, Button, Typography, Link } from "@mui/material";
import { ReactComponent as MeIcon } from "../../assets/images/Me1.svg";
import BedtimeIcon from "@mui/icons-material/Bedtime";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { useSelector, useDispatch } from "react-redux";
import { toggleTheme, getTheme } from "../../redux/action/uiAction";

const style = {
  setApp: {
    display: "flex",
    flexDirection: "column",
    position: "static",
    backgroundColor: (theme) => theme.palette.primary.main,
    color: "inherit",
  },
  setTool: {
    position: "relative",
    alignItems: "center",
    padding: "10px",
  },
  setBox: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  setButton: {
    fontSize: "0.9rem",
    borderRadius: "28px",
    marginLeft: 2,
    border: "2px solid",
    borderColor: (theme) => theme.palette.secondary.main,
    backgroundColor: (theme) => theme.palette.primary.main,
    color: (theme) => theme.palette.secondary.main,
    "&:hover": {
      border: "2px solid",
      borderColor: (theme) => theme.palette.primary.main,
      backgroundColor: (theme) => theme.palette.secondary.main,
      color: (theme) => theme.palette.primary.main,
    },
  },
};
export default function HeadBar() {
  const dispatch = useDispatch();
  const ui = useSelector((state) => state.ui);
  useEffect(() => {
    dispatch(getTheme());
  }, [dispatch]);
  const _toggleTheme = () => {
    dispatch(toggleTheme(!ui.isDarkMode));
  };
  return (
    <AppBar elevation={0} sx={style.setApp}>
      <Toolbar sx={style.setTool}>
        <MeIcon />
        <Box component="span" sx={{ flexGrow: 1 }} />
        <Box sx={style.setBox}>
          <Link underline="none" href="#">
            <Typography
              variant="button"
              sx={{ color: (theme) => theme.palette.secondary.main }}
            >
              Portfolio
            </Typography>
          </Link>
          <Button variant="outlined" sx={style.setButton}>
            Contact Me
          </Button>
          <Button
            variant="outlined"
            sx={style.setButton}
            onClick={_toggleTheme}
          >
            {ui.isDarkMode ? <Brightness7Icon /> : <BedtimeIcon />}
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
