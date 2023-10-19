import React from 'react';
import { Avatar } from "../../components/avatar";
import { Wrapper } from "../../components/wrapper";
import { TitleAnimado } from '../../components/titleAnimado';
import { SocialMedia } from '../../components/socialMedia';
import { Header } from '../../components/header';
import { About } from '../../components/about';
import { MenuBurguer } from '../../components/menu';

export const Home =  () => {
    return(        
        <Wrapper>
            <MenuBurguer />
            <Header>
                <Avatar />
                <TitleAnimado texto='Desenvolvimento Web' />
            </Header>
            <About />
            <SocialMedia />
        </Wrapper>
        )
}