import React from 'react'
import './style.css';
import { Grid } from '@mui/material';

interface Props{
    color: string;
    svg: React.ReactElement;
}

export const Contact = ({ color, svg }: Props) => {
     const getSizeBasedOnScreen = () => {
       const width = window.innerWidth;
       if (width >= 1280) {
         return "50px"; // Tamanho para telas grandes
       } else if (width >= 768) {
         return "70px"; // Tamanho para telas médias
       } else {
         return "90px"; // Tamanho para telas pequenas
       }
     };
    return (
      <Grid item className="containerContact" xs={1}>
        <span className="camada" style={{ background: color }}>
          {React.cloneElement(svg, {
            style: { ...svg.props.style, fontSize: getSizeBasedOnScreen() },
          })}
        </span>
        <span className="camada" style={{ background: color }}>
          {React.cloneElement(svg, {
            style: { ...svg.props.style, fontSize: getSizeBasedOnScreen() },
          })}
        </span>
        <span className="camada" style={{ background: color }}>
          {React.cloneElement(svg, {
            style: { ...svg.props.style, fontSize: getSizeBasedOnScreen() },
          })}
        </span>
        <span className="camada" style={{ background: color }}>
          {React.cloneElement(svg, {
            style: { ...svg.props.style, fontSize: getSizeBasedOnScreen() },
          })}
        </span>
        {/* <span className='camada' style={{ background: color}}> {svg} </span>
            <span className='camada' style={{ background: color}}> {svg} </span>
            <span className='camada' style={{ background: color}}> {svg} </span> */}
      </Grid>
    );
}