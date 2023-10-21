import React from 'react'
import { Grid } from '@mui/material'

export const Wrapper = ({children}:{children: React.ReactNode }) => {
  const backgroundImage  = require('../../assests/images/peakpx.jpg');
      return(
            <Grid container sx=
            {{
               maxWidth:'100wv',  
               height: '100vh',              
               backgroundImage:  `url(${backgroundImage})`,
               display: {md:'inline-block', lg:'flex'},
            }}>              
                {children}              
            </Grid>
    )
  }