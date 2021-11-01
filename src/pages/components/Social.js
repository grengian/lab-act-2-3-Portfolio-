import React from "react";
import { Box } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";

const style = {
  Section: {
    position: "fixed",
    top: "50%",
    transform: "translateY(-50%)",
  },
  Share: {
    width: {
      xm: "20px",
      sm: "30px",
      md: "50px",
    },
    height: {
      xm: "20px",
      sm: "30px",
      md: "50px",
    },
    background: (theme) => theme.palette.primary.main,
    color: (theme) => theme.palette.secondary.main,
    borderColor: (theme) => theme.palette.secondary.main,
    position: "relative",
    transition: "all 0.2s linear",
    "&:hover": {
      borderRadius: "0px 6px 6px 0px",
      width: {
        xm: "30px",
        sm: "60px",
        md: "70px",
      },
    },
  },
};
export default function Social() {
  return (
    <Box sx={style.Section}>
      <Box>
        <a href="https://www.facebook.com/grengian5180/">
          <FacebookIcon
            sx={{ borderRadius: "0px 6px 0px 0px", ...style.Share }}
          />
        </a>
      </Box>
      <Box sx={{ marginTop: "-4px" }}>
        <a href="https://twitter.com/grengian_">
          <TwitterIcon sx={style.Share} />
        </a>
      </Box>
      <Box sx={{ marginTop: "-4px" }}>
        <a href="https://www.instagram.com/grengian_/">
          <InstagramIcon sx={style.Share} />
        </a>
      </Box>
      <Box sx={{ marginTop: "-4px" }}>
        <a href="https://github.com/grengian">
          <GitHubIcon
            sx={{ borderRadius: "0px 0px 6px 0px", ...style.Share }}
          />
        </a>
      </Box>
    </Box>
  );
}
