import React from 'react'
import { Grid } from '@mui/material'

export const Wrapper = ({children}:{children: React.ReactNode }) => {
      return(
            <Grid container sx=
            {{
               width:'100wv', 
               height:'100vh', 
               backgroundColor:"rgba(6, 1, 59, 0.74)",
               display: 'flex',
               padding: 10,
               justifyContent: 'space-around',
            }}>              
                {children}              
            </Grid>
    )
  }