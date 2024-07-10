import React from "react";
import { Grid } from "@mui/material";

export const Wrapper = ({ children }: { children: React.ReactNode }) => {
  // const backgroundImage = require("../../assests/images/peakpx.jpg");
  return (
    <Grid
      container
      sx={{
        width: "100vw",
        // height: "100vh",
        // background: "linear-gradient(to right, #4b6cb7, #182848)", //pinot noir
        // background:
        // "linear-gradient( 68.1deg,  rgba(196,69,69,1) 9.2%, rgba(255,167,73,0.82) 25%, rgba(253,217,82,0.82) 43.4%, rgba(107,225,108,0.82) 58.2%, rgba(107,169,225,0.82) 75.1%, rgba(153,41,243,0.82) 87.3% )", //pinot noir
        // background:
        //   "linear-gradient( 193deg,  rgba(13,11,136,1) 9.4%, rgba(86,255,248,1) 78.4% )", //pinot noir
        // background:
        //   "linear-gradient( 193deg,  rgba(13,11,136,1) 9.4%, #206c6b 78.4% )", //pinot noir
        background: "linear-gradient( 200deg,  #4b6cb7 9.4%, #182848 78.4% )", //pinot noir
      }}
    >
      {children}
    </Grid>
  );
};
//  backgroundImage: `url(${backgroundImage})`,
//  backgroundRepeat: 'no-repeat',
//  backgroundSize: 'cover',
//  overflow: 'auto'