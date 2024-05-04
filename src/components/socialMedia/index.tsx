import React from "react";
import "./style.css";
import { Grid } from "@mui/material";
import { Contact } from "../contact";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

export const SocialMedia = () => {

  return (
    <Grid container justifyContent={{md:"spaceAround", lg:"center"}} className="footer">
      <Contact
        color="#3b5999"
        svg={<FacebookIcon style={{ color: "#ffffff" }} />}
      />
      <Contact
        color="#000000"
        svg={<GitHubIcon style={{ color: "#ffffff" }} />}
      />
      <Contact
        color="#4ECA5C"
        svg={<WhatsAppIcon style={{ color: "#ffffff" }} />}
      />
      <Contact
        color="#0077b5"
        svg={<LinkedInIcon style={{ color: "#ffffff"}} />}
      />
      {/* {children} */}
    </Grid>
  );
};
