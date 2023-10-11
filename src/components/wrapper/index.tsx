import React from 'react'
import './style.css'

export const Wrapper = ({children}:{children: React.ReactNode }) => {
    return(
        <div className="container">
            {children}
        </div>
    )
}