import React from "react";
import { Grid } from "@mui/material";
import { Avatar } from "../avatar";
import { TitleAnimado } from "../titleAnimado";

export const SectionAvatar = () => {
  return (
    <Grid
      container
      display="flex"
      flexDirection="column"
      justifyContent="center"
    >
      <Grid item>
        <Avatar />
      </Grid>
      <Grid item>
        <TitleAnimado texto="Desenvolvedor Web" />
      </Grid>
    </Grid>
  );
};
