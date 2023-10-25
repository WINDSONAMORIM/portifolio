import React from 'react'
import './style.css';
import { Grid } from '@mui/material';

interface Props{
    color: string;
    svg: React.ReactElement;
}

export const Contact = ({ color, svg }: Props) => {
    return(
        <Grid item className="containerContact" xs={1}>
            <span className='camada' style={{ background: color}}> {svg} </span>
            <span className='camada' style={{ background: color}}> {svg} </span>
            <span className='camada' style={{ background: color}}> {svg} </span>
            <span className='camada' style={{ background: color}}> {svg} </span>
        </Grid>
    )
}