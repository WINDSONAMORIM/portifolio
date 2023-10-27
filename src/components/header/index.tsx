import React from "react"
import { Grid } from "@mui/material"

export const Header = ({children}:{children: React.ReactNode }) => {
    return(
        <Grid item sm={12} md={3}
            sx={{
                display: "flex",
                width: '100%',
                flexDirection: 'column',
                justifyContent: 'center', 
                alignItems: 'center', 
                backgroundColor: 'red'           
                }}>
            {children}
        </Grid>
    )
}