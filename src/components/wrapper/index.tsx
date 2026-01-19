import React from "react";
import { Grid } from "@mui/material";
import backGround from "../../assets/images/backGround1.png";

export const Wrapper = ({ children }: { children: React.ReactNode }) => {
  
  return (
  
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
          // backgroundSize: "cover",
          // backgroundPosition: "center",
          // backgroundRepeat: "no-repeat",
          // backgroundAttachment: "fixed",
          zIndex: 0,
        }}
      />

      <Grid
        sx={{
          position: "relative",
          zIndex: 1,
          width: "100%",
          padding: { xs: "1rem", md: "2rem" },
        }}
      >
        {children}
      </Grid>
    </Grid>
  );
};