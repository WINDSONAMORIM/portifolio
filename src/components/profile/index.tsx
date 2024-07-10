import { Box, Typography } from "@mui/material";
import "./style.css";

export const Profile = () => {
  return (
    <Box
      letterSpacing="2px"
      height="100%" // Adicionado
      display="flex" // Adicionado
      flexDirection="column" // Adicionado
    >
      <Typography variant="h5" className="texto">
        Olá e bem-vindo(a)
      </Typography>

      <Typography variant="h5" className="texto">
        É um prazer ter você aqui e poder compartilhar um pouco do meu trabalho
        na área de desenvolvimento.
      </Typography>

      <Typography variant="h5" className="texto">
        Como desenvolvedor, estou sempre buscando aprimorar minhas habilidades e
        aplicar os conhecimentos adquiridos em novos projetos.
      </Typography>

      <Typography variant="h5" className="texto">
        Agradeço por dedicar um pouco do seu tempo para conhecer meu trabalho e
        estou à disposição para qualquer dúvida ou esclarecimento.
      </Typography>
    </Box>
  );
};

// display="flex"
// flexDirection="column"
// alignItems="center"
// width="140%"

/* <Typography className="texto">
        Neste espaço, você encontrará alguns dos meus projetos mais recentes,
        onde utilizei diversas linguagens de programação e frameworks para
        desenvolver soluções criativas e eficientes.
      </Typography> */
/* <Typography className="texto">
        Adoro desafios e oportunidades de aprendizado, por isso, fique à vontade
        para entrar em contato caso tenha alguma ideia ou projeto em mente.
      </Typography> */
/* <Typography className="texto">
        Aqui encontrara uma amostra do meu trabalho para que possamos, juntos,
        explorar novas possibilidades do que deseja.
      </Typography> */
