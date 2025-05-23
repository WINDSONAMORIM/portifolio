import React from "react";
import "./style.css";

export const Avatar = () => {
  const perfilImage = require("../../assets/images/perfil-removebg-preview.png");
  return (
    <div className="content">
      <div 
      // className="avatar"
      >
        <img src={perfilImage} alt="logo ou foto do Perfil"/>
      </div>
    </div>
  );
};
