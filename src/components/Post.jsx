import React from "react";
import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Checkbox,
  IconButton,
  Typography,
} from "@mui/material";
import { Favorite, FavoriteBorder, MoreVert, Share, Bookmark, BookmarkBorder, InsertCommentOutlined } from "@mui/icons-material";

function Post({title, avatarLetter}) {
  return (
    <Card sx={{ marginBottom: 5, bgcolor:'#212121', color:'whitesmoke' }}>
      <CardHeader
      
        avatar={
          <Avatar sx={{ bgcolor: "skyblue" }} aria-label="Zero-day Exploit">
            {avatarLetter}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVert sx={{color:'whitesmoke'}} />
          </IconButton>
        }
        title={title}
        subheader={<Typography>September 7, 2022</Typography>}
      />

      <CardMedia
        component="img"
        height="20%"
        image="https://images.pexels.com/photos/207580/pexels-photo-207580.jpeg?cs=srgb&dl=pexels-pixabay-207580.jpg&fm=jpg"
        alt="post by Ebrhaim, Zero day exploit"
      />
      <CardContent>
        <Typography variant="body2" color="whitesmoke">
          #Microsoft Patch Tuesday security updates addresses 118 CVEs in
          multiple products, including .NET Core, Active Directory Domain
          Services, Azure Batch Node Agent, Azure Real Time Operating System,
          Azure Site Recovery, Azure Sphere, ATA Port Driver, Bluetooth, Edge
          (Chromium-based), Exchange Server, Office, Excel, Outlook, Windows
          Support Diagnostic Tool (MSDT), Remote Access Service Point-to-Point
          Tunneling Protocol, Role: Fax Service,
        </Typography>
      </CardContent>

      <CardActions disableSpacing >
        <IconButton aria-label = 'add to favorites' >
          <Checkbox icon={<FavoriteBorder/>} checkedIcon={<Favorite sx={{color:'red'}}/> } sx={{color:'whitesmoke'}}/>
        </IconButton>

        <IconButton aria-label = 'add to favorites' >
          <Checkbox icon={<BookmarkBorder/>} checkedIcon={<Bookmark sx={{color:'red'}}/>} sx={{color:'whitesmoke'}}/>
        </IconButton>

        <IconButton aria-label = 'add to favorites' >
          <Share sx={{color:'whitesmoke'}}/>
        </IconButton>
        <IconButton aria-label = 'add to favorites' >
          <InsertCommentOutlined sx={{color:'whitesmoke'}}/>
        </IconButton>

      </CardActions>
    </Card>
  );
}

export default Post;
