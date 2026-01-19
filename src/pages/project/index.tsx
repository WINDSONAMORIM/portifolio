import React from "react";
import Tooltip from '@mui/material/Tooltip';
import { Avatar, Card, CardActions, CardContent, CardHeader, CardMedia, Grid, Typography } from "@mui/material";
import perfil from "../../assets/images/Perfil_IA.png";
import pokedex from "../../assets/thumbmail/pokedex.png";

import loginMyDoc from "../../assets/thumbmail/loginMyDoc.png";
import myDocAvatar from "../../assets/avatar/myDoc.png";

import dragonBall from "../../assets/thumbmail/dragonBall.png";
import dragonBallAvatar from "../../assets/avatar/Dbz.jpg";

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
                <Avatar
                  sx={{ width: 56, height: 56 }}
                  src={myDocAvatar}
                ></Avatar>
              }
              title="Projeto MyDoc"
              subheader="É um projeto em desenvolvimento que automatiza processos e que se integra e consume uma API externa"
            />
            <CardMedia
              component="img"
              height="194"
              sx={{ objectFit: "cover", padding: 5 }}
              image={loginMyDoc}
              alt="Imagem do projeto"
            />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                Aplicação web desenvolvida para automatizar serviços e integrar
                dados via API externa, proporcionando mais agilidade e
                eficiência nos processos. Construído com React, TypeScript e
                Material UI.
              </Typography>
            </CardContent>
            <CardActions>
              <Tooltip title="breve uma amostra em video">
                <YouTubeIcon fontSize="large" sx={{ color: "red" }} />
              </Tooltip>
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
              title="Pokedex"
              subheader="Esse é um classico que desenvolvi para aprender mais sobre consumo de API"
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
              <Tooltip title="breve uma amostra em video">
                <YouTubeIcon fontSize="large" sx={{ color: "red" }} />
              </Tooltip>
              <GitHubIcon fontSize="large" sx={{ color: "black" }} />
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={12} sm={12} md={4}>
          <Card sx={{ maxWidth: 345, margin: 5, height: "max-content" }}>
            <CardHeader
              avatar={
                <Avatar
                  sx={{ width: 56, height: 56 }}
                  src={dragonBallAvatar}
                ></Avatar>
              }
              title="Dragon Ball"
              subheader="Esse projeto do dragon ball foi desenvolvido para treinar consumo de API apenas com JavaScript"
            />
            <CardMedia
              component="img"
              height="194"
              sx={{ objectFit: "cover", padding: 5 }}
              image={dragonBall}
              alt="Imagem do projeto"
            />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                Este é um projeto que consume uma API do Dragon Ball,
                desenvolvido com JavaScript puro, HTML e CSS. Ele permite que os
                usuários pesquisem e visualizem informações sobre diferentes
                personagens do universo Dragon Ball.
              </Typography>
            </CardContent>
            <CardActions>
              <Tooltip title="breve uma amostra em video">
                <YouTubeIcon fontSize="large" sx={{ color: "red" }} />
              </Tooltip>
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
      {/* <SocialMedia /> */}
    </>
  );
};
