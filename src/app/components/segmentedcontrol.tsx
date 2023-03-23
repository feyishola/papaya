"use client"

import { Box } from "@mui/material"

export const SegmentControl = ()=>{
    return(
        <Box>
            <Box
                sx={{
                    height:"56px",
                    background:'linear-gradient(180deg, rgba(196, 39, 251, 0) 0%, rgba(196, 39, 251, 0.2) 100%)',
                    filter:'blur(20px)',
                    display:"flex",
                    overflow:"hidden",
                    justifyContent:"space-between"
                }}
                
            ></Box>
        </Box>
    )
}