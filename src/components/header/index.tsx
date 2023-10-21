import React from "react"
import { Grid } from "@mui/material"

export const Header = ({children}:{children: React.ReactNode }) => {
    return(
        <Grid item md={12} lg={6} 
            sx={{display: "flex",
                flexDirection: 'column',
                alignItems: "center",
                justifyContent: "center"}}>
            {children}
        </Grid>
    )
}