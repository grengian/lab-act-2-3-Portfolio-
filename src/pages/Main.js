import React from "react";
import { Box, Paper, Grid, Typography, Avatar } from "@mui/material";
import Social from "./components/Social";
import HeadBar from "./components/HeadBar";
import SkillInfo from "./components/SkillInfo";
import WorkInfo from "./components/WorkInfo";
import { ReactComponent as ComputerIcon } from "../assets/images/Computer.svg";
import { ReactComponent as MeIcon } from "../assets/images/Me1.svg";
import UserMe from "../assets/images/mee.jpg";

const style = {
  setHeader: {
    textAlign: "center",
    fontWeight: "700",
    fontSize: {
      xs: "2.3rem",
      sm: "3.1rem",
      md: "4.3rem",
    },
  },
  setSubtitle: {
    textAlign: "center",
    fontSize: {
      xs: "1rem",
      sm: "1.2rem",
      md: "1.5rem",
    },
  },
  setIntro: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    paddingBottom: "160px",
    backgroundColor: (theme) => theme.palette.secondary.main,
  },
  setFooter: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingTop: "40px",
  },
  setImage: {
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  setMe: {
    width: "200px",
    height: "200px",
  },
};
export default function Main() {
  return (
    <Box sx={{ backgroundColor: (theme) => theme.palette.background.default }}>
      <Box>
        <HeadBar />
        <Box>
          <Paper elevation={0}>
            <Grid>
              <Grid>
                <Typography
                  variant="h1"
                  sx={{ ...style.setHeader, marginTop: 10 }}
                >
                  Christian Grengia
                </Typography>
              </Grid>
              <Grid>
                <Typography
                  variant="subtitle1"
                  sx={{ ...style.setSubtitle, marginBottom: "20px" }}
                >
                  Full Stack Web Developer
                </Typography>
              </Grid>
              <Grid sx={style.setImage}>
                <Avatar
                  src={UserMe}
                  sx={{ ...style.setMe, marginBottom: "80px" }}
                />
              </Grid>
            </Grid>
          </Paper>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <ComputerIcon />
        </Box>
        <Box sx={style.setIntro}>
          <Grid sx={{ marginTop: 8 }}>
            <Grid>
              <Typography variant="h6" sx={style.setSubtitle}>
                Hi, I'm Ian. Nice to meet you.
              </Typography>
            </Grid>
            <Grid>
              <Typography
                variant="subtitle2"
                sx={{ ...style.setSubtitle, maxWidth: "800px", marginTop: 3 }}
              >
                I am a freshly student programmer that simple and
                non-experienced developer. I build code with passion. I'm also
                willing to learn more new things in coding.
              </Typography>
            </Grid>
          </Grid>
        </Box>
        <SkillInfo />
        <WorkInfo />
        <Box
          sx={{
            padding: "80px 5px",
            backgroundColor: (theme) => theme.palette.secondary.main,
          }}
        >
          <Grid sx={style.setFooter}>
            <Grid>
              <MeIcon />
            </Grid>
            <Grid>
              <Typography>
                First, solve the problem. Then, write the code
              </Typography>
            </Grid>
            <Grid>
              <Typography>Handcrafted by me ©grengian_</Typography>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Social />
    </Box>
  );
}
