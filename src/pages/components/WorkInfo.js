import React from "react";
import { Box, Grid } from "@mui/material";

const style = {
  setBox: {
    display: "flex",
    justifyContent: "center",
    marginBottom: "-80px",
  },
  setGrid: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "0px 5px",
  },
};

export default function WorkInfo() {
  return (
    <Box sx={{ paddingTop: "80px" }}>
      <Grid sx={style.setGrid}>
        <Grid sm item>
          My Recent Work
        </Grid>
        <Grid sm item>
          Here are a few projects I've worked on recently. Want to see more?
          Contact me.
        </Grid>
        <Grid sm item sx={{ padding: "40px" }}>
          Currently Working....
        </Grid>
      </Grid>
    </Box>
  );
}
