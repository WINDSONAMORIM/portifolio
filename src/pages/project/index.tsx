import React from "react";
import { Wrapper } from "../../components/wrapper";
import { Header } from "../../components/header";
import { Avatar } from "../../components/avatar";
import { TitleAnimado } from "../../components/titleAnimado";
import { SocialMedia } from "../../components/socialMedia";
import { CardHardSkill } from "../../components/cardHardSkill";
import ResponsiveAppBar from "../../componentsExcluidos/appBar";

export const Project = () => {
  return (
    <>
      <Wrapper>
      <ResponsiveAppBar />
        {/* <Header> */}
          <Avatar />
          <TitleAnimado texto="Desenvolvedor Web" />
        {/* </Header> */}
        <CardHardSkill />
      </Wrapper>
      <SocialMedia />
    </>
  );
};
