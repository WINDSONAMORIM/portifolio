import React from 'react';
import './style.css';

export const Avatar = () => {
  const perfilImage  = require('../../assests/images/perfil.png');
  // const perfilImage = require("../../assests/images/perfil3.jpg");
  // const perfilImage = require("../../assests/images/perfil4.jpg");
    return (
      <div className="content">
        <div className="avatar">
          <img src={perfilImage} />
        </div>
      </div>
    );
}