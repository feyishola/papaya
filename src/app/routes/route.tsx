"use client"

import { Route, Routes } from "react-router-dom"
import MiniDrawer from "../layout/drawer"
import { HomePage } from "../pages/home"

export const AppRoute = ()=>{
    return(
        <Routes>
            <Route path="/" element={
                <MiniDrawer>
                    <HomePage/>
                </MiniDrawer>
            }/>
        </Routes>
    )
}