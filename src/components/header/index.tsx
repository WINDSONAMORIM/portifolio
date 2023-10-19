import React from "react"
import { Grid } from "@mui/material"

export const Header = ({children}:{children: React.ReactNode }) => {
    return(
        <Grid item sm={12} md={6} 
            sx={{display: "flex",
                flexDirection: 'column',
                alignItems: "center",
                justifyContent: "center"}}>
            {children}
        </Grid>
    )
}