// "use client"
import { Box,TextField,Avatar, IconButton, InputAdornment } from "@mui/material"
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import VideocamOutlinedIcon from '@mui/icons-material/VideocamOutlined';
import SettingsVoiceIcon from '@mui/icons-material/SettingsVoice';
import SearchIcon from '@mui/icons-material/Search';

export const AppBar = ()=>{
    let activeColor = '#A73EE7'
    return(
        <Box>
            <Box
                sx={{
                    height:"56px",
                    background:'linear-gradient(168.44deg, #2E335A 1.62%, #1C1B33 95.72%)',
                    display:"flex",
                    overflow:"hidden",
                    justifyContent:"space-between"
                }}
            >
                <Box my={"8px"} marginLeft={'290px'}>
                    {/* <TextField type={'search'} sx={{width:"445px"}} color={"error"} multiline={true} rows={2} inputProps={{style:{height:"30px"}}} size={"small"}/> */}
                    <TextField
                        sx={{
                            width: '445px',
                            "& .MuiInputBase-root": {
                                height: 35
                            },
                        }}
                        // type="search"
                        color="secondary"
                        id="standard-basic"
                        className="inputRounded"
                        InputProps={{
                            endAdornment:
                                <InputAdornment position="end">
                                    <IconButton>
                                        <Box
                                            sx={{
                                                width:"32px",
                                                height:"32px",
                                                borderRadius:"70px",
                                                border:`1px solid ${activeColor}`
                                            }}
                                        >
                                            <SettingsVoiceIcon sx={{color:"gray"}}/>
                                        </Box>
                                    </IconButton>
                                </InputAdornment>,
                            startAdornment:
                                <InputAdornment position="start">
                                    <IconButton>
                                        <SearchIcon sx={{color:"gray"}}/>
                                    </IconButton>
                                </InputAdornment>
                            }}
                       
                    />
                </Box>
                <Box display={"flex"} justifyContent={"space-around"} alignItems={"center"} width={"300px"} marginRight={"5px"}>
        
                    <IconButton sx={{color:"white"}}>
                        <VideocamOutlinedIcon/>
                    </IconButton>
                    <IconButton sx={{color:"white"}}>
                        <NotificationsNoneOutlinedIcon/>
                    </IconButton>
                    <Avatar sx={{backgroundColor:'#22D7FF'}}>{'A'}</Avatar>

                </Box>
            </Box>
        </Box>
    )
}