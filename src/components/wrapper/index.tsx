import React from "react";
import { Grid } from "@mui/material";
import backGround from "../../assets/images/backGround1.png";
// ChatGPT Image 2 de jan. de 2026, 15_49_42.png

export const Wrapper = ({ children }: { children: React.ReactNode }) => {
  
  // const backGround = require("../../assets/images/ChatGPT Image 2 de jan. de 2026, 15_49_42.png");
  return (
    // <Grid
    //   container
    //   sx={{
    //     width: "100vw",
    //     height: "100vh",
    //     // background: "linear-gradient( 200deg,  #4b6cb7 9.4%, #182848 78.4% )",
    //     backgroundImage: `url(${backGround})`,
    //     backgroundSize: "cover",
    //     backgroundPosition: "center",
    //     padding: "2rem",
    //     boxSizing: "border-box",
    //   }}
    // >
    //   {children}
    // </Grid>
    <Grid
      container
      sx={{
        position: "relative",
        maxWidth: "100vw",
        minHeight: "100vh",
        backgroundImage: `url(${backGround})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
      }}
    >
      <Grid
        sx={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(180deg, rgba(0,0,0,0.4), rgba(0,0,0,0.6))",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
          zIndex: 1,
        }}
      />

      <Grid
        sx={{
          position: "relative",
          zIndex: 2,
          width: "100%",
          padding: "2rem",
        }}
      >
        {children}
      </Grid>
    </Grid>
  );
};