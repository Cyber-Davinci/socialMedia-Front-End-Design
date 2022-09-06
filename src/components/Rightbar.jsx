import React from "react";
import {
  Avatar,
  AvatarGroup,
  Box,
  Divider,
  ImageList,
  ImageListItem,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";

function Rightbar() {
  return (
    <Box
      flex={2}
      p={2}
    
      sx={{
        display: { xs: "none", sm: "block", color: "white", margin:'0' }
      }}
    >
      <Box position="fixed" sx={{marginRight:'15px'}}>
        <Typography variant="h6" fontWeight={100}>
          Active Friends
        </Typography>

        <AvatarGroup max={5} sx={{alignItems:'center', justifyContent:'left'}} >
          <Avatar
            alt="Remy Sharp"
            src="https://material-ui.com/static/images/avatar/1.jpg"
          />
          <Avatar
            alt="Travis Howard"
            src="https://material-ui.com/static/images/avatar/2.jpg"
          />
          <Avatar
            alt="Cindy Baker"
            src="https://material-ui.com/static/images/avatar/3.jpg"
          />
          <Avatar alt="Agnes Walker" src="" />
          <Avatar
            alt="Trevor Henderson"
            src="https://material-ui.com/static/images/avatar/6.jpg"
          />
          <Avatar
            alt="Trevor Henderson"
            src="https://material-ui.com/static/images/avatar/7.jpg"
          />
          <Avatar
            alt="Trevor Henderson"
            src="https://material-ui.com/static/images/avatar/8.jpg"
          />
          <Avatar
            alt="Trevor Henderson"
            src="https://material-ui.com/static/images/avatar/7.jpg"
          />
          <Avatar
            alt="Trevor Henderson"
            src="https://material-ui.com/static/images/avatar/8.jpg"
          />
        </AvatarGroup>

        <Typography variant="h6" fontWeight={100} mt={2}>
          Recent Photos
        </Typography>

        <ImageList cols={3} rowHeight={100} gap={5}>
          <ImageListItem>
            <img
              src="https://images.pexels.com/photos/943096/pexels-photo-943096.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
              alt=""
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://images.pexels.com/photos/270700/pexels-photo-270700.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
              alt=""
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://images.pexels.com/photos/7988742/pexels-photo-7988742.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://images.pexels.com/photos/3861967/pexels-photo-3861967.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
              alt=""
            />
          </ImageListItem>
        </ImageList>

        <Typography variant="h6" fontWeight={100} mt={2}>
          Recent Conversations
        </Typography>

        <List sx={{width:'100%', maxWidth:350, bgcolor:'#212121'}}>
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt='davinci' src="https://material-ui.com/static/images/avatar/3.jpg"/>
            </ListItemAvatar>
            <ListItemText
            color="white"
            primary="Coding bootcamp sunday!"
            secondary={
              <React.Fragment>
                <Typography color="skyblue" component='span' variant='body2' sx={{display:'inline'}}> 
                  Cyber Doctor
                </Typography>
                <Typography color="white" component='span' variant='body2'> 
                {" - I'm thinking of starting a coding bootcamp sunday..."}
                </Typography>
                
              </React.Fragment>
            }
            />
          </ListItem>
          <Divider variant="inset" component="li" sx={{bgcolor:'white', marginRight:'20px'}}/>
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt='OneNyass' src="https://www.instagram.com/p/CW39DYotHHm/"/>
            </ListItemAvatar>
            <ListItemText
            color="white"
            primary="Coding bootcamp sunday!"
            secondary={
              <React.Fragment>
                <Typography color="skyblue" component='span' variant='body2' sx={{display:'inline'}}> 
                  OneNyass
                </Typography>
                <Typography color="white" component='span' variant='body2'> 
                {" - I'm thinking of starting a coding bootcamp sunday..."}
                </Typography>
                
              </React.Fragment>
            }
            />
          </ListItem>
          <Divider variant="inset" component="li" sx={{bgcolor:'white', marginRight:'20px'}}/>
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt='Alieu' src="img.jpg"/>
            </ListItemAvatar>
            <ListItemText
            color="white"
            primary="Coding bootcamp sunday!"
            secondary={
              <React.Fragment>
                <Typography color="skyblue" component='span' variant='body2' sx={{display:'inline'}}> 
                  Ndimz
                </Typography>
                <Typography color="white" component='span' variant='body2'> 
                {" - I'm thinking of starting a coding bootcamp sunday..."}
                </Typography>
                
              </React.Fragment>
            }
            />
          </ListItem>
          <Divider variant="inset" component="li" sx={{bgcolor:'white', marginRight:'20px'}}/>
        </List>
      </Box>
    </Box>
  );
}

export default Rightbar;
