import React from 'react';
import './style.css';
import { Grid } from '@mui/material';

export const SocialMedia = ({children}: {children: React.ReactNode}) => {
    
    const instagram = require('../../assests/icon/instagram.ico');
    const whatsapp = require('../../assests/icon/whatsapp.ico');
    
    

    return(
            <Grid container className='footer'>
                    {children}
            </Grid>     
        )
    }