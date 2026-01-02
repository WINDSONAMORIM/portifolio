import React from "react";
import { SocialMedia } from "../../components/socialMedia";
import { Avatar, Card, CardActions, CardContent, CardHeader, CardMedia, Grid, Typography } from "@mui/material";
import perfil from "../../assets/images/Perfil_IA.png";
import logo from "../../assets/images/logo.png";
import pokedex from "../../assets/thumbmail/pokedex.png";
import YouTubeIcon from '@mui/icons-material/YouTube';
import GitHubIcon from "@mui/icons-material/GitHub";

export const Project = () => {
  return (
    <>
      <Grid
        container
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <Grid item xs={12} sm={12} md={4}>
          <Card sx={{ maxWidth: 345, margin: 5, height: "max-content" }}>
            <CardHeader
              avatar={
                <Avatar sx={{ width: 56, height: 56 }} src={perfil}></Avatar>
              }
              title="Projetos"
              subheader="Aqui estão alguns dos meus projetos mais recentes"
            />
            <CardMedia
              component="img"
              height="194" 
              sx={{ objectFit: "cover", padding: 5 }}
              image={pokedex}
              alt="Imagem do projeto"
            />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                Este é um projeto de Pokedex desenvolvido com React, TypeScript
                e Material UI. Ele permite que os usuários pesquisem e
                visualizem informações sobre diferentes Pokémon, incluindo suas
                habilidades, tipos e estatísticas.
              </Typography>
            </CardContent>
            <CardActions>
              <YouTubeIcon fontSize="large" sx={{ color: "red" }} />
              <GitHubIcon fontSize="large" sx={{ color: "black" }} />
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={12} sm={12} md={4}>
          <Card sx={{ maxWidth: 345, margin: 5, height: "max-content" }}>
            <CardHeader
              avatar={
                <Avatar sx={{ width: 56, height: 56 }} src={perfil}></Avatar>
              }
              title="Projetos"
              subheader="Aqui estão alguns dos meus projetos mais recentes"
            />
            <CardMedia
              component="img"
              height="194" 
              sx={{ objectFit: "cover", padding: 5 }}
              image={pokedex}
              alt="Imagem do projeto"
            />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                Este é um projeto de Pokedex desenvolvido com React, TypeScript
                e Material UI. Ele permite que os usuários pesquisem e
                visualizem informações sobre diferentes Pokémon, incluindo suas
                habilidades, tipos e estatísticas.
              </Typography>
            </CardContent>
            <CardActions>
              <YouTubeIcon fontSize="large" sx={{ color: "red" }} />
              <GitHubIcon fontSize="large" sx={{ color: "black" }} />
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={12} sm={12} md={4}>
          <Card sx={{ maxWidth: 345, margin: 5, height: "max-content" }}>
            <CardHeader
              avatar={
                <Avatar sx={{ width: 56, height: 56 }} src={perfil}></Avatar>
              }
              title="Projetos"
              subheader="Aqui estão alguns dos meus projetos mais recentes"
            />
            <CardMedia
              component="img"
              height="194" 
              sx={{ objectFit: "cover", padding: 5 }}
              image={pokedex}
              alt="Imagem do projeto"
            />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                Este é um projeto de Pokedex desenvolvido com React, TypeScript
                e Material UI. Ele permite que os usuários pesquisem e
                visualizem informações sobre diferentes Pokémon, incluindo suas
                habilidades, tipos e estatísticas.
              </Typography>
            </CardContent>
            <CardActions>
              <YouTubeIcon fontSize="large" sx={{ color: "red" }} />
              <GitHubIcon fontSize="large" sx={{ color: "black" }} />
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={12} sm={12} md={4}>
          <Card sx={{ maxWidth: 345, margin: 5, height: "max-content" }}>
            <CardHeader
              avatar={
                <Avatar sx={{ width: 56, height: 56 }} src={perfil}></Avatar>
              }
              title="Projetos"
              subheader="Aqui estão alguns dos meus projetos mais recentes"
            />
            <CardMedia
              component="img"
              height="194" 
              sx={{ objectFit: "cover", padding: 5 }}
              image={pokedex}
              alt="Imagem do projeto"
            />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                Este é um projeto de Pokedex desenvolvido com React, TypeScript
                e Material UI. Ele permite que os usuários pesquisem e
                visualizem informações sobre diferentes Pokémon, incluindo suas
                habilidades, tipos e estatísticas.
              </Typography>
            </CardContent>
            <CardActions>
              <YouTubeIcon fontSize="large" sx={{ color: "red" }} />
              <GitHubIcon fontSize="large" sx={{ color: "black" }} />
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={12} sm={12} md={4}>
          <Card sx={{ maxWidth: 345, margin: 5, height: "max-content" }}>
            <CardHeader
              avatar={
                <Avatar sx={{ width: 56, height: 56 }} src={perfil}></Avatar>
              }
              title="Projetos"
              subheader="Aqui estão alguns dos meus projetos mais recentes"
            />
            <CardMedia
              component="img"
              height="194" 
              sx={{ objectFit: "cover", padding: 5 }}
              image={pokedex}
              alt="Imagem do projeto"
            />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                Este é um projeto de Pokedex desenvolvido com React, TypeScript
                e Material UI. Ele permite que os usuários pesquisem e
                visualizem informações sobre diferentes Pokémon, incluindo suas
                habilidades, tipos e estatísticas.
              </Typography>
            </CardContent>
            <CardActions>
              <YouTubeIcon fontSize="large" sx={{ color: "red" }} />
              <GitHubIcon fontSize="large" sx={{ color: "black" }} />
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={12} sm={12} md={4}>
          <Card sx={{ maxWidth: 345, margin: 5, height: "max-content" }}>
            <CardHeader
              avatar={
                <Avatar sx={{ width: 56, height: 56 }} src={perfil}></Avatar>
              }
              title="Projetos"
              subheader="Aqui estão alguns dos meus projetos mais recentes"
            />
            <CardMedia
              component="img"
              height="194" 
              sx={{ objectFit: "cover", padding: 5 }}
              image={pokedex}
              alt="Imagem do projeto"
            />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                Este é um projeto de Pokedex desenvolvido com React, TypeScript
                e Material UI. Ele permite que os usuários pesquisem e
                visualizem informações sobre diferentes Pokémon, incluindo suas
                habilidades, tipos e estatísticas.
              </Typography>
            </CardContent>
            <CardActions>
              <YouTubeIcon fontSize="large" sx={{ color: "red" }} />
              <GitHubIcon fontSize="large" sx={{ color: "black" }} />
            </CardActions>
          </Card>
        </Grid>
      </Grid>
      <SocialMedia />
    </>
  );
};
