import React from 'react'
import {Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Switch} from '@mui/material'
import {
    AccountBox,
    Article,
    Group,
    Home,
    ModeNight,
    Person,
    Settings,
    Storefront,
  } from "@mui/icons-material";
function Sidebar() {
  return (
    <Box flex={1}  p={2} mr={2} sx={{display:{xs:'none', sm:'block',color:'white'}}}>
         <Box position={'fixed'}>
            <List>
                <ListItem disablePadding sx={{marginBottom:'12px'}}>
                    <ListItemButton component='a' href='#home' >
                        <ListItemIcon>
                            <Home sx={{fontSize:'35px', color:'#03A9F4'}}/>
                        </ListItemIcon>
                        <ListItemText primary="Home" sx={{fontSize:'20px', marginLeft:'10px'}} />
                    </ListItemButton>
                </ListItem>

                <ListItem disablePadding sx={{marginBottom:'12px'}}>
                    <ListItemButton component='a'>
                        <ListItemIcon>
                            <Person sx={{fontSize:'35px', color:'#03A9F4'}}/>
                        </ListItemIcon>
                        <ListItemText primary="Friends" sx={{fontSize:'20px', marginLeft:'10px'}} />
                    </ListItemButton>
                </ListItem>

                <ListItem disablePadding sx={{marginBottom:'12px'}}>
                    <ListItemButton>
                        <ListItemIcon>
                            <Group sx={{fontSize:'35px', color:'#03A9F4'}}/>
                        </ListItemIcon>
                        <ListItemText primary="Groups" sx={{fontSize:'20px', marginLeft:'10px'}} />
                    </ListItemButton>
                </ListItem>

                <ListItem disablePadding sx={{marginBottom:'12px'}}>
                    <ListItemButton>
                        <ListItemIcon>
                            <Article sx={{fontSize:'35px', color:'#03A9F4'}}/>
                        </ListItemIcon>
                        <ListItemText primary="Pages" sx={{fontSize:'20px', marginLeft:'10px'}} />
                    </ListItemButton>
                </ListItem>

                <ListItem disablePadding sx={{marginBottom:'12px'}}>
                    <ListItemButton>
                        <ListItemIcon>
                            <Storefront sx={{fontSize:'35px', color:'#03A9F4'}}/>
                        </ListItemIcon>
                        <ListItemText primary="MarketPlace" sx={{fontSize:'20px', marginLeft:'10px'}} />
                    </ListItemButton>
                </ListItem>

                <ListItem disablePadding sx={{marginBottom:'12px'}}>
                    <ListItemButton>
                        <ListItemIcon>
                            <AccountBox sx={{fontSize:'35px', color:'#03A9F4'}}/>
                        </ListItemIcon>
                        <ListItemText primary="Profile" sx={{fontSize:'20px', marginLeft:'10px'}} />
                    </ListItemButton>
                </ListItem>

                <ListItem disablePadding sx={{marginBottom:'12px'}}>
                    <ListItemButton>
                        <ListItemIcon>
                            <Settings sx={{fontSize:'35px', color:'#03A9F4'}}/>
                        </ListItemIcon>
                        <ListItemText primary="Settings" sx={{fontSize:'20px', marginLeft:'10px'}} />
                    </ListItemButton>
                </ListItem>

                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                            <ModeNight sx={{fontSize:'35px', color:'#03A9F4'}}/>
                        </ListItemIcon>
                        <Switch primary="" sx={{fontSize:'20px', marginLeft:'10px'}} />
                    </ListItemButton>
                </ListItem>
            </List>
         </Box>
    </Box>
  )
}

export default Sidebar