import { Box, TextField, Avatar, IconButton, InputAdornment } from "@mui/material";
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import VideocamOutlinedIcon from '@mui/icons-material/VideocamOutlined';
import SettingsVoiceIcon from '@mui/icons-material/SettingsVoice';
import SearchIcon from '@mui/icons-material/Search';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

export const AppBar = () => {
    let activeColor = '#A73EE7';
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));

    return (
        <Box>
            <Box
                sx={{
                    height: "56px",
                    // background: 'linear-gradient(168.44deg, #2E335A 1.62%, #1C1B33 95.72%)',
                    display: "flex",
                    overflow: "hidden",
                    justifyContent: "space-between",
                    padding: isMobile ? '0 10px' : '0 20px', // Adjust padding for tablet and desktop
                    backgroundColor:"red"
                }}
            >
                {!isMobile && (
                    <Box my={"8px"} marginLeft={isTablet ? '100px' : '290px'} sx={{backgroundColor:"gold"}}>
                        <TextField
                            sx={{
                                maxWidth:'445px', // Adjust width for tablet
                                "& .MuiInputBase-root": {
                                    height: 35
                                },
                            }}
                            color="secondary"
                            id="standard-basic"
                            className="inputRounded"
                            InputProps={{
                                endAdornment:
                                    <InputAdornment position="end">
                                        <IconButton>
                                            <Box
                                                sx={{
                                                    maxWidth: "32px",
                                                    maxHeight: "32px",
                                                    borderRadius: "70px",
                                                    border: `1px solid ${activeColor}`
                                                }}
                                            >
                                                <SettingsVoiceIcon sx={{ color: "gray" }} />
                                            </Box>
                                        </IconButton>
                                    </InputAdornment>,
                                startAdornment:
                                    <InputAdornment position="start">
                                        <IconButton>
                                            <SearchIcon sx={{ color: "gray" }} />
                                        </IconButton>
                                    </InputAdornment>
                            }}

                        />
                    </Box>
                )}
                <Box display={"flex"} justifyContent={"space-around"} alignItems={"center"} maxWidth={"300px"} marginRight={"5px"} sx={{backgroundColor:"white"}}>
                    <IconButton sx={{ color: "white" }}>
                        <VideocamOutlinedIcon />
                    </IconButton>
                    <IconButton sx={{ color: "white" }}>
                        <NotificationsNoneOutlinedIcon />
                    </IconButton>
                    <Avatar sx={{ backgroundColor: '#22D7FF' }}>{'A'}</Avatar>
                </Box>
            </Box>
        </Box>
    )
}
