import React from 'react';
import { MenuBurguer } from '../../components/menu';
import { Wrapper } from '../../components/wrapper';
import { Header } from '../../components/header';
import { Avatar } from "../../components/avatar";
import { TitleAnimado } from '../../components/titleAnimado';
import { SocialMedia } from '../../components/socialMedia';
import { Contact } from '../../components/contact';
// import FacebookIcon from '@mui/icons-material/Facebook';
// import LinkedInIcon from '@mui/icons-material/LinkedIn';
// import GitHubIcon from '@mui/icons-material/GitHub';
// import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { CardHardSkill } from '../../components/cardHardSkill';


export const Project =  () => {
    return( 
        <>
        <MenuBurguer />
        <Wrapper>
            <Header>
                <Avatar />
                <TitleAnimado texto='Desenvolvimento Web' />
            </Header>
            <CardHardSkill />
            
        </Wrapper>            
        <SocialMedia />
            {/* <Contact color = "#3b5999" svg={<FacebookIcon style={{ color: '#ffffff', fontSize: 70 }} />}/>
            <Contact color = "#000000" svg={<GitHubIcon style={{ color: '#ffffff', fontSize: 70 }} />}/>
            <Contact color = "#4ECA5C" svg={<WhatsAppIcon style={{color: '#ffffff', fontSize: 70}} />}/>
            <Contact color = "#0077b5" svg={<LinkedInIcon style={{ color: '#ffffff', fontSize: 70 }} />}/> */}
        {/* </SocialMedia> */}
        </>
        )
}