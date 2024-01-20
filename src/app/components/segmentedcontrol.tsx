import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";

export const SegmentControl = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));

    return (
        <Box sx={{ p: 1 }}>
            {/* <Box
                sx={{
                    height: "56px",
                    background: 'linear-gradient(180deg, rgba(196, 39, 251, 0) 0%, rgba(196, 39, 251, 0.2) 100%)',
                    display: "flex",
                    overflow: "hidden",
                    justifyContent: "space-between",
                    alignItems: "center",
                    pl: isMobile ? "10px" : "20px", // Smaller padding on mobile
                    flexWrap: isMobile ? 'wrap' : 'nowrap', // Wrap items on small screens
                    gap: isMobile ? 1 : 0, // Add a gap between items when they wrap
                }}
            >
                {controls.map((ctr, idx) => (
                    <Typography 
                        key={idx} 
                        color={"white"} 
                        variant={isMobile ? "body2" : isTablet ? "h6" : "h5"} // Responsive typography
                        sx={{ 
                            minWidth: 'fit-content', 
                            margin: isTablet ? 0.5 : 1, // Adjust margins for tablet and desktop
                        }}
                    >
                        {ctr}
                    </Typography>
                ))}
            </Box> */}
        </Box>
    );
};

const controls = [
    'All', 'Gaming', 'Thoughts', 'Music', 'Thrillers', 'Mixes', 'Avatar', 'Criticisma', 'Korean dramas', 'Characters', 'Eating', 'Gaming'
];
