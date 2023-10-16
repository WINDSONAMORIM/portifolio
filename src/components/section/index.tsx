import React, { useEffect, useState } from 'react';
import './style.css'

interface SectionProps{
    texto: string
}

export const Section = (props :SectionProps) => {

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
        <>
            <h1 className="digitando">{text}</h1>
        </>
    )
}