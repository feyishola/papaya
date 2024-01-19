"use client"

import { Typography, Box, useMediaQuery, useTheme } from "@mui/material";
import { AppBar } from "./appbar";
import { MainContent } from "./maincontents";
import { SegmentControl } from "./segmentedcontrol";

export const HomePage = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <Box>
            <Box 
                sx={{
                    minHeight: isMobile ? 'auto' : "100vh",
                    background: 'linear-gradient(180deg, #2B2F53 3.16%, #1D1C34 36.05%)'
                }}
            >
                <AppBar />
                <SegmentControl />

                <Box
                
                >
                    <MainContent />
                </Box>

            </Box>
        </Box>
    );
};
