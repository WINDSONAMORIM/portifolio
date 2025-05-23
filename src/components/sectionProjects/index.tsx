import { Box, Grid, Typography } from "@mui/material";
import { CardHardSkill } from "../cardHardSkill";
import pokedexThumbnail from "../../assests/thumbnail/pokedex.png";

export const SectionProjects = () => {
  return (
    <Box display="flex" flexDirection='column' justifyContent="center" alignItems='center' width="100%" >
      <Typography variant="h4" color="white">
        Meus Projetos
      </Typography>
      <Grid container>
        <Grid item>
            <CardHardSkill thumbnail={pokedexThumbnail} title="Pokedex"/>
        </Grid>
      </Grid>
    </Box>
  );
};
