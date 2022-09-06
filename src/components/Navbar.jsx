import React, { useState } from "react";
import { Mail, Notifications, Pets, Search } from "@mui/icons-material";
import {
  AppBar,
  Avatar,
  Badge,
  Box,
  InputBase,
  Menu,
  MenuItem,
  styled,
  Toolbar,
  Typography,
} from "@mui/material";
import { Container } from "@mui/system";

function Navbar() {
  const [open, setOpen] = useState(false);

  const StyledToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between",
  });

  const Search = styled("div")(({ theme }) => ({
    background: "white",
    padding: "2px 10px",
    borderRadius: theme.shape.borderRadius,
    width: "40%",
  }));

  const Icons = styled(Box)(({ theme }) => ({
    display: "none",
    alignItems: "center",
    gap: "20px",
    [theme.breakpoints.up("sm")]: {
      display: "flex",
    },
  }));

  const UserBox = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    gap: "10px",
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  }));

  return (
    <AppBar position="sticky" sx={{
        backgroundColor:'#212121',
        width:'100%',
        margin:'0'
    }}>
      {/* <Container maxWidth="xl" xs={{margin:'0'}}> */}
        <StyledToolbar>
          <Typography
            variant="h6"
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            Cyber Davinci
          </Typography>
          <Pets sx={{ display: { xs: "block", sm: "none" } }} />
          <Search>
            <InputBase placeholder="search...?" />
          </Search>

          <Icons>
            <Badge badgeContent={7} color="success">
              <Mail />
            </Badge>

            <Badge badgeContent={9} color="success">
              <Notifications />
            </Badge>

            <Avatar
              sx={{ width: 30, height: 30 }}
              src="https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              onClick={(e) => setOpen(true)}
            />
          </Icons>

          <UserBox onClick={(e) => setOpen(true)}>
            <Avatar
              sx={{ width: 30, height: 30 }}
              src="https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            />
            <Typography variant="span">Ebrahim</Typography>
          </UserBox>
        </StyledToolbar>

        <Menu
          id="demo-positioned-menu"
          aria-labelledby="demo-positioned-button"
          open={open}
          onClick={(e) => setOpen(false)}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "right",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
        >
          <MenuItem>Profile</MenuItem>
          <MenuItem>Account</MenuItem>
          <MenuItem>Logout</MenuItem>
        </Menu>
      {/* </Container> */}
    </AppBar>
  );
}

export default Navbar;
