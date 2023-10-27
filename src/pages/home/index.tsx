import React from 'react';
import { Avatar } from "../../components/avatar";
import { Wrapper } from "../../components/wrapper";
import { TitleAnimado } from '../../components/titleAnimado';
import { SocialMedia } from '../../components/socialMedia';
import { Header } from '../../components/header';
import { About } from '../../components/about';
import { MenuBurguer } from '../../components/menu';
import { Contact } from '../../components/contact';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

export const Home =  () => {
    return( 
        <>
        <MenuBurguer />
        <Wrapper>
            <Header>
                <Avatar />
                <TitleAnimado texto='Desenvolvimento Web' />
            </Header>
            <About />
        </Wrapper>            
        <SocialMedia>
            <Contact color = "#3b5999" svg={<FacebookIcon fontSize='large' style={{ color: '#ffffff' }} />}/>
            <Contact color = "#000000" svg={<GitHubIcon fontSize='large' style={{ color: '#ffffff' }} />}/>
            <Contact color = "#4ECA5C" svg={<WhatsAppIcon fontSize='large' style={{color: '#ffffff'}} />}/>
            <Contact color = "#0077b5" svg={<LinkedInIcon fontSize='large' style={{ color: '#ffffff' }} />}/>
        </SocialMedia>
        </>
        )
}