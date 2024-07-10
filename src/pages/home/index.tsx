import React from "react";
import { Wrapper } from "../../components/wrapper";
import { Header } from "../../components/header";
import { SectionDefault } from "../../components/sectionDefault";
import { SectionAvatar } from "../../components/sectionAvatar";
import { Box, Grid } from "@mui/material";
import { SectionProfile } from "../../components/sectionProfile";
import { CardHardSkill } from "../../components/cardHardSkill";
import { SectionProjects } from "../../components/sectionProjects";

export const Home = () => {
  return (
    <>
      <Wrapper>
        <Header />
        <Grid container display="flex" flexDirection="row">
          <Grid item xs={6}>
            <SectionAvatar />
          </Grid>

          <Grid item xs={6}>
            <SectionProfile />
          </Grid>
        </Grid>
        <SectionProjects />
      </Wrapper>
    </>
  );
};
