import React from 'react'
import { Box, Card, CardContent, Grid, Paper, Typography } from "@mui/material"

export const About = () => {
    return(
        <Grid item md={12} lg={9} sx={{display:'flex', alignItems:'center'}}>
            <Box
             sx={{
                display:'flex', 
                alignItems:'center', 
                backgroundColor: 'rgba(32, 8, 111, 0.6)',
                borderRadius: '16px',
                boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
                backdropFilter: 'blur(7.3px)',
                border: '1px solid rgba(255, 255, 255, 0.3)',
                m: {md:' 0 10%'}
                }}
             >
                <Typography m={2}                 
                fontFamily={'Roboto'}
                fontSize={'1.5rem'} textAlign={'center'} 
                color="#FFFFFF"
                >
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
                
            </Box>               
        </Grid>
    )
} 


