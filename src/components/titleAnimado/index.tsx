import React, { useEffect, useState } from 'react';
import { Grid } from "@mui/material"
import './style.css'

interface SectionProps{
    texto: string
}

export const TitleAnimado = (props :SectionProps) => {

    const [text, setText] = useState('');

    const ativaLetra = (text:string, i = 0) => {
        if(i < text.length){
            setText(text.slice(0, i + 1))
            setTimeout(() => ativaLetra(text, i + 1),100);
        }
    }

    useEffect(()=>{
        setTimeout(()=> ativaLetra(props.texto));
    },[]);

    return(
        <Grid item>
            <h1 className="digitando">{text}</h1>
        </Grid>
    )
}