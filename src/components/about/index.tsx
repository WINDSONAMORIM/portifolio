import React from 'react'
import { Card, CardContent, Grid, Typography } from "@mui/material"

export const About = () => {
    return(
        <Grid item md={6} sx={{display: "flex", flexDirection: 'column', alignItems: "center", justifyContent: "center"}}>
            <Card sx={{maxWidth: '100%', maxHeight:'90%', backgroundColor: "#bdecea31", borderRadius: 2, boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.5)'}}>
                <CardContent>
                    <Typography margin={'20px 2px'} fontFamily={'Roboto'} fontSize={'1rem'} textAlign={'center'} color="#FFFFFF">
                    Olá e bem-vindo(a) É um prazer ter você aqui e poder compartilhar um
                    pouco do meu trabalho na área de desenvolvimento. Neste espaço,
                    você encontrará alguns dos meus projetos mais recentes, onde
                    utilizei diversas linguagens de programação e frameworks para
                    desenvolver soluções criativas e eficientes. Como desenvolvedor,
                    estou sempre buscando aprimorar minhas habilidades e aplicar os
                    conhecimentos adquiridos em novos projetos. Adoro desafios e
                    oportunidades de aprendizado, por isso, fique à vontade para
                    entrar em contato caso tenha alguma ideia ou projeto em mente.
                    Aqui encontrara uma amostra do meu trabalho para que possamos,
                    juntos, explorar novas possibilidades do que deseja. Agradeço por
                    dedicar um pouco do seu tempo para conhecer meu trabalho e estou à
                    disposição para qualquer dúvida ou esclarecimento. 
                    </Typography>
                </CardContent> 
            </Card>               
        </Grid>
    )
} 


