import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Home } from "../pages/home"
import { Project } from "../pages/project"

export const AppRoutes = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/projects' element={<Project />} />
            </Routes>    
        </BrowserRouter>
    )
}