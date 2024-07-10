import { Grid } from "@mui/material";
import { Profile } from "../profile";
import { SocialMedia } from "../socialMedia";

export const SectionProfile = () =>{
    return (
      <Grid
        container
        display="flex"
        flexDirection="row"
        justifyContent="center"
        height="100%"
      >
        <Grid item xs={12}>
          <Profile />
        </Grid>
        <Grid item xs={12}>
          <SocialMedia />
        </Grid>
      </Grid>
    );
}