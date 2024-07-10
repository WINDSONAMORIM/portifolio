import React from "react";
import { Grid } from "@mui/material";
import { ScrollMenu } from "../scrollMenu";
import { NameMenu } from "../nameMenu";

export const Header = () => {
  return (
    <Grid container display="flex" justifyContent="space-between">
      <Grid item>
        <ScrollMenu />
      </Grid>
      <Grid item>
        <NameMenu name="Windson" surname="Marana" />
      </Grid>
    </Grid>
  );
};
