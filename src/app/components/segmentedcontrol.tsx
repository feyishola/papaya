"use client"

import { Box, Typography } from "@mui/material"

export const SegmentControl = ()=>{
    return(
        <Box>
            <Box
                sx={{
                    height:"56px",
                    background:'linear-gradient(180deg, rgba(196, 39, 251, 0) 0%, rgba(196, 39, 251, 0.2) 100%)',
                    // filter:'blur(10px)',
                    display:"flex",
                    overflow:"hidden",
                    justifyContent:"space-between",
                    alignItems:"center",
                    pl:"20px"
                }}
                
            >
                {
                    controls.map((ctr,idx)=>{
                        return(
                            <Typography key={idx} color={"white"} variant={"body2"}>{ctr}</Typography>
                        )
                    })
                }
            </Box>
        </Box>
    )
}

const controls = [
    'All','Gaming','Thoughts', 'Music', 'Thrillers','Mixes','Avatar','Criticisma', 'Korean dramas', 'Charaters', 'Eating', 'Gamin'
]