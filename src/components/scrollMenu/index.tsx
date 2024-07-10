import React from "react";
import { Box, Typography } from "@mui/material";
import { Link } from "react-scroll";

export const ScrollMenu = () => {
  return (
    <Box mt={2} paddingLeft={3} display="flex" gap={2} color="white">
      <Link to="home" spy={true} smooth={true} duration={500}>
        <Typography
          variant="h6"
          component="span"
          sx={{ cursor: "pointer", fontSize: "20px", color: "white" }}
          >
          Home
        </Typography>
      </Link>
      <Link to="projects" spy={true} smooth={true} duration={500}>
       <Typography
          variant="h6"
          component="span"
          sx={{ cursor: 'pointer', fontSize: '20px', color: 'white' }}
        >
        Projetos
        </Typography>
      </Link>
      <Link to="socialMedia" spy={true} smooth={true} duration={500}>
       <Typography
          variant="h6"
          component="span"
          sx={{ cursor: 'pointer', fontSize: '20px', color: 'white' }}
        >
        Social Media
        </Typography>
      </Link>
    </Box>
  );
};
