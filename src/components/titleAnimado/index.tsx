import React, { useEffect, useState } from 'react';
import { Grid } from "@mui/material"
import './style.css'

interface SectionProps{
    texto: string,
    onComplete?: ()=>void;
    // showCursor?: boolean;
    className?: string;
}

export const TitleAnimado = ({texto, onComplete, 
    // showCursor = false, 
    className}: SectionProps) => {

    const [text, setText] = useState('');

    const ativaLetra = (text:string, i = 0) => {
        if(i < text.length){
            setText(text.slice(0, i + 1))
            setTimeout(() => ativaLetra(text, i + 1),100);
        }else{
            onComplete?.();
        }
    }

    useEffect(()=>{
        setTimeout(()=> ativaLetra(texto));
    },[]);

    return(
        <Grid item>
            <h1 className={`${className}`}>{text}</h1>
        </Grid>
    )
}
/* <Grid item>
    <h1 className={`${className} 
        ${!showCursor ? 'sem-cursor' : ''}
       `}>{text}</h1>
</Grid> */