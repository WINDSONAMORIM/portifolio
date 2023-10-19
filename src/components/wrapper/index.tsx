import React from 'react'
import './style.css'
import { Grid } from '@mui/material'

export const Wrapper = ({children}:{children: React.ReactNode }) => {
      return(
            <Grid container className='container'>              
                {children}              
            </Grid>
    )
  }