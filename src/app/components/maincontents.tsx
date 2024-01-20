// "use client"

import { Box, Stack, Skeleton, Grid, Typography } from "@mui/material"
import { useState,useEffect } from "react"
import Image from "next/image"
import Rectangle393 from "../assets/Rectangle393.png"
import Rectangle394 from "../assets/Rectangle394.jpg"
import Rectangle395 from "../assets/Rectangle395.png"
import Rectangle400 from "../assets/Rectangle400.png"
import Rectangle404 from "../assets/Rectangle404.png"
import Video from "../assets/Video.png"
import Logo from "../assets/Logo.png"
import Logo1 from "../assets/Logo1.png"
import Logo2 from "../assets/Logo2.png"
import Logo3 from "../assets/Logo3.png"


export const MainContent = ()=>{

    const [loading, setLoading] = useState(true)

    useEffect(()=>{
        setTimeout(()=>{
            setLoading(false)
        },300)
    },[])

    return (
        <Box display={"flex"} justifyContent={"center"} alignItems={"center"} mt={0}>
            <Grid container spacing={1} justifyContent="center">
                {content.map((per, idx) => (
                    <Grid item xs={12} sm={12} md={6} lg={4} key={idx} >
                        {loading ? (
                            <Skeleton variant="rectangular"  animation="wave" style={{maxHeight:"336"}} />
                        ) : (
                            <Box
                                sx={{
                                    maxHeight:"336px",
                                    background: 'linear-gradient(180deg, #2B2F53 3.16%, #1D1C34 36.05%)',
                                    // width: "100%",
                                    display: "flex",
                                    alignItems: "center",
                                    flexDirection: "column"
                                }}
                            >
                                <Box sx={{ maxHeight: "205px" }}>
                                    <Image src={per.art} alt=""    height={205} style={{maxWidth:'100%'}}/>
                                </Box>
                                <Box
                                    sx={{
                                        maxHeight: "120px",
                                        // width: "100%",
                                        display: "flex",
                                        // justifyContent: "space-between",
                                        alignItems: "center",
                                        mt: "2px",
                                        flexDirection: "row",
                                        background: 'linear-gradient(180deg, #2B2F53 3.16%, #1D1C34 36.05%)'
                                    }}
                                >
                                    <Box
                                        sx={{
                                            width: "30px",
                                            height: "30px",
                                            borderRadius: "50%",
                                            background: 'linear-gradient(180deg, rgba(72, 49, 157, 0.2) 18.75%, rgba(72, 49, 157, 0) 100%)',
                                            display: "flex",
                                            justifyContent: "center",
                                            alignItems: "center",
                                            ml: "10px"
                                        }}
                                    >
                                        <Image src={per.logo} alt=""  />
                                    </Box>
                                    <Box maxWidth={'330px'}>
                                        <Typography color={"white"}>{per.description}</Typography>
                                        <Typography color={"gray"} variant={"body2"}>
                                            {per.name}
                                        </Typography>
                                        <Typography color={"gray"} variant={"body2"}>
                                            {per.views}
                                        </Typography>
                                    </Box>
                                </Box>
                            </Box>
                        )}
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

const content = [
    {
        art:Rectangle393,
        logo:Logo,
        description:"Design and Prototype an App with Play - Full 3-hour Course",
        name:"Designcode",
        views:"14k views - 1 month ago "
    },
    {
        art:Rectangle394,
        logo:Logo1,
        description:"Design and Prototype an App with Play - Full 3-hour Course",
        name:"Designcode",
        views:"14k views - 1 month ago "
    },
    {
        art:Rectangle395,
        logo:Logo2,
        description:"Design and Prototype an App with Play - Full 3-hour Course",
        name:"Designcode",
        views:"14k views - 1 month ago "

    },
    {
        art:Rectangle400,
        logo:Logo3,
        description:"Design and Prototype an App with Play - Full 3-hour Course",
        name:"Designcode",
        views:"14k views - 1 month ago "

    },
    {
        art:Rectangle404,
        logo:Logo2,
        description:"Design and Prototype an App with Play - Full 3-hour Course",
        name:"Designcode",
        views:"14k views - 1 month ago "

    },
    {
        art:Video,
        logo:Logo,
        description:"Design and Prototype an App with Play - Full 3-hour Course",
        name:"Designcode",
        views:"14k views - 1 month ago "

    }
]