import React from "react";
import { Box, Paper, Grid, Typography } from "@mui/material";

const style = {
  setBox: {
    display: "flex",
    justifyContent: "center",
    marginTop: "-100px",
  },
  setGrid: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
  },
  setItem: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "32px 5px",
  },
};
export default function SkillInfo() {
  return (
    <Box sx={style.setBox}>
      <Paper elevation={8} sx={{ width: "63%", borderRadius: "20px" }}>
        <Grid container sx={style.setGrid}>
          <Grid sm item sx={style.setItem}>
            <Typography variant="h6">Software Engineer</Typography>
            <Typography variant="h6">Software Engineer</Typography>
            <Typography variant="h6">Software Engineer</Typography>
            <Typography variant="h6">Software Engineer</Typography>
            <Typography variant="h6">Software Engineer</Typography>
            <Typography variant="h6">Software Engineer</Typography>
            <Typography variant="h6">Software Engineer</Typography>
            <Typography variant="h6">Software Engineer</Typography>
            <Typography variant="h6">Software Engineer</Typography>
          </Grid>
          <Grid sx={style.setItem}>
            <Typography variant="h6">Software Engineer</Typography>
            <Typography variant="h6">Software Engineer</Typography>
            <Typography variant="h6">Software Engineer</Typography>
            <Typography variant="h6">Software Engineer</Typography>
            <Typography variant="h6">Software Engineer</Typography>
            <Typography variant="h6">Software Engineer</Typography>
            <Typography variant="h6">Software Engineer</Typography>
            <Typography variant="h6">Software Engineer</Typography>
            <Typography variant="h6">Software Engineer</Typography>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
}
