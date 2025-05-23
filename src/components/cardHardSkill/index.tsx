import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box, Grid, Link } from "@mui/material";

interface CardHardSkillProps {
  thumbnail: string;
  title: string;
}

export const CardHardSkill = ({thumbnail, title}:CardHardSkillProps) => {
  return (
    <Grid
      item
      xs={12}
      lg={9}
      sx={{
        display: "flex",
        height: { xs: "70%", lg: "100%" },
        alignItems: { xs: "flex-start", lg: "center" },
        justifyContent: { xs: "flex-start", lg: "center" },
        p: { md: "0 2%" },
      }}
    >
      <Card
        sx={{
          maxWidth: 260,
          maxHeight: 500,
          m: 2,
          position: "relative",
          display: "block",
        }}
      >
        <CardMedia
          component="img"
          height="140"
          image={thumbnail}
          sx={{ padding: "1em 1em 0 1em", objectFit: "contain" }}
        />
        <CardContent>
          <Typography variant="h5">{title}</Typography>
          <Box
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              margin: "0 auto",
              backgroundColor: "#040203",
              opacity: 0,
              transition: "opacity 0.3s",
              "&:hover": { opacity: 0.7 },
            }}
          >
            <Link
              href="http://127.0.0.1:5501/index.html"
              underline="none"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Typography variant="body2" color="white">
                Projeto feito usando HTML, CSS e JavaScript
              </Typography>
              <Typography variant="body2" color="white">
                🔗 Ver no GitHub Pages
              </Typography>
            </Link>
          </Box>
          <Typography variant="body2">
            Aqui você irá encontrar projetos que realizei para a praticar minhas
            habilidades em CSS
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};