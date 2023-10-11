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
            <SocialMedia />
        </Wrapper>        
        </>
    )
}