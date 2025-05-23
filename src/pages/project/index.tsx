import React from "react";
import { Wrapper } from "../../components/wrapper";
import { Avatar } from "../../components/avatar";
import { TitleAnimado } from "../../components/titleAnimado";
import { SocialMedia } from "../../components/socialMedia";
import { CardHardSkill } from "../../components/cardHardSkill";

export const Project = () => {
  return (
    <>
      <Wrapper>
        <Avatar />
        <TitleAnimado texto="Desenvolvedor Web" />
      </Wrapper>
      <SocialMedia />
    </>
  );
};
