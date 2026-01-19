import React, { useState } from "react";
import { Box, Grid } from "@mui/material";

import { Avatar } from "../../components/avatar";
import { Wrapper } from "../../components/wrapper";
import { TitleAnimado } from "../../components/titleAnimado";
import { Technologies } from "../../components/technologies";
import { Project } from "../project";
import { SocialMedia } from "../../components/socialMedia";

export const Home = () => {
  const [firstTitleComplete, setFirstTitleComplete] = useState(false);
  const [showSecondTitle, setShowSecondTitle] = useState(false);
  return (
    <>
      <Wrapper>
        <Grid
          container
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Grid item xs={12} sm={12} md={5}>
            <TitleAnimado
              texto="Desenvolvedor Web"
              onComplete={() => {
                setShowSecondTitle(true);
                setFirstTitleComplete(true);
              }}
              className={!firstTitleComplete ? "digitando" : ""}
            />
          </Grid>

          <Grid
            item
            xs={12}
            sm={12}
            md={2}
            display="flex"
            justifyContent="center"
          >
            <Avatar />
          </Grid>

          <Grid item xs={12} sm={12} md={5}>
            {showSecondTitle && (
              <TitleAnimado
                className="digitando"
                texto=" Transformando suas idéias em experiências incríveis"
              />
            )}
          </Grid>
        </Grid>
        <Box sx={{ width: "100%", height: "50%", display: "flex", justifyContent: "center" }}>
          <Technologies />
        </Box>
      </Wrapper>
      <Wrapper>
        <Project />
        <SocialMedia />
      </Wrapper>
     </>
  );
};
