import React from "react"
import './style.css'
export const Header = ({children}:{children: React.ReactNode }) => {
    return(
        <div className="header">
            {children}
        </div>
    )
}