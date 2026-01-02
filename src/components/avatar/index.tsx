import React from "react";
import "./style.css";
import perfilImage from "../../assets/images/logo2.png";
// const perfilImage = require("../../assets/images/perfil-removebg-preview.png");

export const Avatar = () => {
  // const perfilImage = require("../../assets/images/logo2.png");
  return (
    <div className="content">
        <img className='logo' src={perfilImage} alt="logo ou foto do Perfil"/>
    </div>
  );
};
