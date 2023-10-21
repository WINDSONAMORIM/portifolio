import React from "react"
import { Grid } from "@mui/material"

export const Header = ({children}:{children: React.ReactNode }) => {
    return(
        <Grid item md={12} lg={2} 
            sx={{display: "flex",
                flexDirection: 'column',
                alignItems: "center",
                justifyContent: {md: 'flex-start', lg:'center'},
                margin: '30px'}}>
            {children}
        </Grid>
    )
}