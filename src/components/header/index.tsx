import React from "react"
import { Grid } from "@mui/material"

export const Header = ({children}:{children: React.ReactNode }) => {
    return(
        <Grid item xs={12} lg={3}
            sx={{
                display: "flex",
                width: '100%',
                flexDirection: 'column',
                justifyContent: 'center', 
                alignItems: 'center'        
                }}>
            {children}
        </Grid>
    )
}