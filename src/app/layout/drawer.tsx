"use client"
import * as React from 'react';
import { styled, useTheme, Theme, CSSObject } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import OndemandVideoOutlinedIcon from '@mui/icons-material/OndemandVideoOutlined';
import SubscriptionsOutlinedIcon from '@mui/icons-material/SubscriptionsOutlined';
import MusicVideoOutlinedIcon from '@mui/icons-material/MusicVideoOutlined';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import HistoryOutlinedIcon from '@mui/icons-material/HistoryOutlined';
import HistoryToggleOffOutlinedIcon from '@mui/icons-material/HistoryToggleOffOutlined';
import VideoLibraryOutlinedIcon from '@mui/icons-material/VideoLibraryOutlined';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Image from 'next/image';
import designcode from "../assets/designcode.png";
import figma from "../assets/figma.png";
import sketch from "../assets/sketch.png";
import Logo1 from "../assets/Logo1.png";

import { useNavigate } from 'react-router-dom';

const drawerWidth = 240;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

export default function MiniDrawer({children}:any) {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const Navigate = useNavigate()

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      
      <Drawer variant="permanent" open={open} sx={{bgcolor:"#2E335A",borderColor:"#2E335A",borderWidth:'0px'}} >
      <Box sx={{background:'linear-gradient(168.44deg, #2E335A 1.62%, #1C1B33 95.72%)', height:"100vh", color:"white"}}>
        
        <Box sx={{display:"flex",my:"22px",gap:"8px", justifyContent:"center"}}>
          <Box sx={{width:'12px',height:"12px", borderRadius:"50%", bgcolor:"#ED695E"}}/>
          <Box sx={{width:'12px',height:"12px", borderRadius:"50%", bgcolor:"#F4BF4F"}}/>
          <Box sx={{width:'12px',height:"12px", borderRadius:"50%", bgcolor:"#61C554"}}/>
        </Box>
        <Box display={"flex"} gap={'18px'}>
          <IconButton onClick={open?handleDrawerClose:handleDrawerOpen}>
            <MenuIcon />
          </IconButton>
          <Box sx={{opacity:open?1:0}}>
            <Typography variant='h5' fontWeight={"bold"}>Papaya</Typography>
          </Box>
        </Box>
        <Divider />
        <List sx={{
   
                    // hover states
                '& .MuiListItemButton-root:hover': {
                  bgcolor: '#C427FB',
                  '&, & .MuiListItemIcon-root': {
                    color: '#8015A7',
                  },
                },
          }}>
          {Firstroutes.map((text, index) => (
            <ListItem key={text.name} disablePadding sx={{ display: 'block', "ListItem:hover":"#C427FB" }} onClick={()=>{Navigate(text.to)}}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                    color:"white"
                  }}
                >
                  {text.icon}
                </ListItemIcon>
                <ListItemText primary={text.name} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
        <Box sx={{display:"flex",justifyContent:"center",alignItems:"center",opacity:open?1:0}}>
          <Typography>MY CHANNEL</Typography>
        </Box>
        <List
          sx={{
   
            // hover states
        '& .MuiListItemButton-root:hover': {
          bgcolor: '#C427FB',
          '&, & .MuiListItemIcon-root': {
            color: '#8015A7',
          },
        },
  }}
        >
          {secondroutes.map((text, index) => (
            <ListItem key={text.name} disablePadding sx={{ display: 'block' }} onClick={()=>{Navigate(text.to)}}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                    color:"white"
                  }}
                >
                  {text.icon}
                </ListItemIcon>
                <ListItemText primary={text.name} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider/>
        <Box sx={{display:"flex",justifyContent:"center",alignItems:"center",opacity:open?1:0}}>
          <Typography>SUBSCRIPTIONS</Typography>
        </Box>
        <List
          sx={{
   
            // hover states
        '& .MuiListItemButton-root:hover': {
          bgcolor: '#C427FB',
          '&, & .MuiListItemIcon-root': {
            color: '#8015A7',
          },
        },
  }}
        >
          {thirdroutes.map((text, index) => (
            <ListItem key={text.name} disablePadding sx={{ display: 'block' }} onClick={()=>{Navigate(text.to)}}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                    color:"white"
                  }}
                >
                  <Image src={text.icon} alt={"image"} width={30} height={30} style={{borderRadius:"50%"}}/>
                </ListItemIcon>
                <ListItemText primary={text.name} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        </Box>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1}}>
        {children}
      </Box>
    </Box>
  );
}

const Firstroutes = [
  {
    name:"Home",
    to:"/",
    icon:<HomeOutlinedIcon/>
  },
  {
    name:"Shorts",
    to:"/shorts",
    icon:<OndemandVideoOutlinedIcon/>
  },
  {
    name:"Subsciptions",
    to:"/subsciptions",
    icon:<SubscriptionsOutlinedIcon/>
  },
  {
    name:"Papaya Music",
    to:"/papayamusic",
    icon:<MusicVideoOutlinedIcon/>
  }
  
]

const secondroutes = [
  {
    name:"Library",
    to:"/papayamusic",
    icon:<VideoLibraryOutlinedIcon/>
  },
  {
    name:"History",
    to:"/papayamusic",
    icon:<HistoryOutlinedIcon/>
  },
  {
    name:"Your Videos",
    to:"/papayamusic",
    icon:<OndemandVideoOutlinedIcon/>
  },
  {
    name:"Watch Later",
    to:"/papayamusic",
    icon:<HistoryToggleOffOutlinedIcon/>
  },
  {
    name:"Downloads",
    to:"/papayamusic",
    icon:<FileDownloadOutlinedIcon/>
  },
  {
    name:"Show More",
    to:"/papayamusic",
    icon:<ExpandMoreIcon/>
  }
  
]

const thirdroutes = [
  {
    name:"DesignCode",
    to:"/papayamusic",
    icon:designcode
  },
  {
    name:"Figma",
    to:"/papayamusic",
    icon:figma
  },
  {
    name:"Sketch",
    to:"/papayamusic",
    icon:sketch
  },
  {
    name:"Spine",
    to:"/papayamusic",
    icon:Logo1
  }
]