import React from "react";
import { Grid } from "@mui/material";

export const Wrapper = ({ children }: { children: React.ReactNode }) => {
  
  return (
    <Grid
      container
      sx={{
        width: "100vw",
        height: "100vh",
        background: "linear-gradient( 200deg,  #4b6cb7 9.4%, #182848 78.4% )",
      }}
    >
      {children}
    </Grid>
  );
};