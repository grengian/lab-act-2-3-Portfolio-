import React from "react";
import { Box, Paper, Grid, Typography } from "@mui/material";
import { ReactComponent as FullDevIcon } from "../../assets/images/fulldev.svg";

const style = {
  setBox: {
    display: "flex",
    justifyContent: "center",
    marginTop: "-100px",
  },
  setGrid: {
    boxSizing: "border-box",
    display: "flex",
    flexDirection: "row",
    width: "100%",
  },
  setItem: {
    boxSizing: "border-box",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "32px 5px",
  },
  setNA: {
    boxSizing: "border-box",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "32px 5px",
  },
};
export default function SkillInfo() {
  return (
    <Box sx={style.setBox}>
      <Paper elevation={8} sx={{ width: "63%", borderRadius: "20px" }}>
        <Grid container sx={style.setGrid}>
          <Grid sm item sx={style.setItem}>
            <FullDevIcon />
            <Typography variant="h5" sx={{ paddingTop: "20px", weight: "700" }}>
              Full Stack Web Developer
            </Typography>
            <Typography
              variant="subtitle1"
              sx={{ paddingTop: "30px", maxWidth: "70%", textAlign: "center" }}
            >
              I like to code things from scratch, and enjoy bringing ideas to
              life in the browser.
            </Typography>
            <Typography variant="h5" sx={{ paddingTop: "30px", weight: "700" }}>
              Languages I speak:
            </Typography>
            <Typography variant="subtitle1" sx={{ paddingTop: "10px" }}>
              HTML, CSS, JavaScript, PHP, Java
            </Typography>
            <Typography variant="h5" sx={{ paddingTop: "30px", weight: "700" }}>
              Dev tools, libraries & frameworks:
            </Typography>
            <Typography variant="subtitle1" sx={{ paddingTop: "10px" }}>
              VSCode
            </Typography>
            <Typography variant="subtitle1">Github</Typography>
            <Typography variant="subtitle1">Terminal</Typography>
            <Typography variant="subtitle1">Node JS</Typography>
            <Typography variant="subtitle1">React JS</Typography>
            <Typography variant="subtitle1">React Native</Typography>
            <Typography variant="subtitle1">Tailwind</Typography>
            <Typography variant="subtitle1">Firebase</Typography>
            <Typography variant="subtitle1">Android Studio</Typography>
          </Grid>
          <Grid sm item sx={style.setNA}>
            <Typography variant="h1">N/A</Typography>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
}
