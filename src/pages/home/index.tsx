import REact from 'react';
import { Avatar } from "../../components/avatar";
import { Wrapper } from "../../components/wrapper";
import { Section } from '../../components/section';
import { SocialMedia } from '../../components/socialMedia';

export const Home =  () => {
    console.log('home')
    return(
        <>
        <Wrapper>
            <Avatar />
            <Section texto='Desenvolvimeneseto Web'  />
            <p style={{fontFamily:'Roboto', color:'#FFFFFF', margin: '20px 2px', fontSize: '4vw', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            <strong>
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
              disposição para qualquer dúvida ou esclarecimento.</strong>
          </p>
            <SocialMedia />
        </Wrapper>        
        </>
    )
}