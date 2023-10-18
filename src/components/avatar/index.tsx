import React from 'react';
import './style.css';

export const Avatar = () => {
  const perfilImage  = require('../../assests/images/perfil.png');
    return(
        <div className='content'>
        <div className="avatar">
          <img src={perfilImage}/>
        </div>
        </div>
    )
}