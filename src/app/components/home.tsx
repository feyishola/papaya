"use client"

import { Typography,Box } from "@mui/material"
import { bgcolor } from "@mui/system"
import { AppBar } from "./appbar"
import { MainContent } from "./maincontents"
import { SegmentControl } from "./segmentedcontrol"

export const HomePage = ()=>{
    return(
        <Box>
            <Box 
            sx={{
            height:"100vh",
            background:'linear-gradient(180deg, #2B2F53 3.16%, #1D1C34 36.05%)'
        }}>
                <AppBar/>
                <SegmentControl/>

                <Box
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                height={"88vh"}
                maxWidth={"1150px"}
                // sx={{background:'linear-gradient(180deg, #2B2F53 3.16%, #1D1C34 36.05%)'}}
                margin={"0 auto"}
                mt={0}
                >
                    <MainContent/>
                </Box>

            </Box>
        </Box>
    )
}