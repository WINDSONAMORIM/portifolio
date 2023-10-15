import React from 'react';
import './style.css';

export const SocialMedia = () => {
    const facebook = require('../../assests/icon/facebook.ico');
    const instagram = require('../../assests/icon/instagram.ico');
    const whatsapp = require('../../assests/icon/whatsapp.ico');
    const linkedin = require('../../assests/icon/linkedin.ico');
    const github = require('../../assests/icon/github.ico')

    return(
        <>
            <footer>
                {/* <small> */}
                    <a href="https://www.facebook.com/windson.amorim/" target="_blank"><img src={facebook} alt="" /></a>
                    <a href="https://www.instagram.com/windsonamorim/" target="_blank"><img src={instagram} alt="" /></a>
                    <a href="https://web.whatsapp.com/send?phone=5511992597337" target="_blank"><img src={whatsapp} alt="" /></a>
                    <a href="https://www.linkedin.com/in/windson-amorim-marana-8614441b3/" target="_blank"><img src={linkedin} alt="" /></a>
                    <a href="https://github.com/WINDSONAMORIM" target="_blank"><img src={github} alt="" /></a>
                {/* </small> */}
            </footer>
        </>     
        )
    }