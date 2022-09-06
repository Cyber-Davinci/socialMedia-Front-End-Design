import {
  Box,
  Avatar,
  Button,
  ButtonGroup,
  Fab,
  Modal,
  Stack,
  styled,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import {
  Add as AddIcon,
  DateRange,
  EmojiEmotions,
  Image,
  PersonAdd,
  VideoCameraBack,
} from "@mui/icons-material"

function Add() {
  const StyledModal = styled(Modal)({
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
  
  })

  const UserBox = styled(Box)({
    display:'flex',
    alignItems:'cnter',
    gap:'10px',
    marginBottom:'20px'
  })
  return (
    <>
    <Tooltip>
      <Fab>
        <AddIcon/>
      </Fab>
    </Tooltip>
    </>
  )
}

export default Add