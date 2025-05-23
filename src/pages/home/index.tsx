import React, { useState } from "react";
import { Box, Grid } from "@mui/material";

import { Avatar } from "../../components/avatar";
import { Wrapper } from "../../components/wrapper";
import { TitleAnimado } from "../../components/titleAnimado";
import { Technologies } from "../../components/technologies";

export const Home = () => {
  const [firstTitleComplete, setFirstTitleComplete] = useState(false);
  const [showSecondTitle, setShowSecondTitle] = useState(false);
  return (
    <>
      <Wrapper>
        <Grid
          container
          display="flex"
          flexDirection="row"
          alignItems="center"
          padding="15px"
        >
          <Grid item xs={4}>
            <TitleAnimado
              texto="Desenvolvedor Web"
              onComplete={() => {
                setShowSecondTitle(true);
                setFirstTitleComplete(true);
              }}
              className={!firstTitleComplete ? "digitando" : ""}
            />
          </Grid>

          <Grid item xs={4}>
            <Avatar />
          </Grid>

          <Grid item xs={4}>
            {showSecondTitle && (
              <TitleAnimado
                className="digitando"
                texto=" Transformando suas idéias em experiências incríveis"
              />
            )}
          </Grid>
        </Grid>
        <Box sx={{ width: "100%", display: "flex", justifyContent: "center" }}>
          <Technologies />
        </Box>
      </Wrapper>
    </>
  );
};
