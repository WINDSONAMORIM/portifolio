import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export const CardHardSkill = () =>{
    const logoCSS  = require('../../assests/images/css.jpg');
    const styles = {
        
            width: '100%',
            height: '140px',
            objectFit: 'cover',
        
    }
    return(
        <>
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia component= "img" height= "140" image={logoCSS} sx={{ padding: "1em 1em 0 1em", objectFit: "contain" }}/>
            <CardContent>
                <Typography variant='h5'>
                    CSS
                </Typography>
                <Typography variant='body2'>
                    Aqui você irá encontrar projetos que realizei para a praticar minhas habilidades em CSS
                </Typography>
            </CardContent>
        </Card>
        </>
    )
}