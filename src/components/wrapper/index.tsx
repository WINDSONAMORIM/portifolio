import React from 'react'
import { Grid } from '@mui/material'

export const Wrapper = ({children}:{children: React.ReactNode }) => {
  const backgroundImage  = require('../../assests/images/peakpx.jpg');
      return(
            <Grid container sx=
            {{
               width:'100vw',  
               height: '100vh', 
               backgroundImage: `url(${backgroundImage})`,
               backgroundRepeat: 'no-repeat',
               backgroundSize: 'cover'
            }}>              
                {children}              
            </Grid>
    )
  }