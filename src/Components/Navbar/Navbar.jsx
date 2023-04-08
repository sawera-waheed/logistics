import {
  AppBar,
  Container,
  Grid,
  Typography,
  Button,
  Menu,
  MenuItem,
  IconButton,
} from "@mui/material";
import React, { useState } from "react";
import { ArrowDropDown, SettingsOutlined } from "@mui/icons-material";
const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Container
      maxWidth="100%"
      sx={{ height: "65px", background: "#transparent" }}
    >
      <Grid container spacing={2}>
        <Grid item sm={6} md={4} lg={4}>
          <Typography
            sx={{ color: "#000", size: "20px", fontWeight: "bold", mt: "10px" }}
          >
            LCT Tracker and Solution
          </Typography>
        </Grid>
        <Grid item sm={1} md={4} lg={4}></Grid>
        <Grid item sm={5} md={4} lg={4} sx={{display: "flex" , justifyContent: "right", paddingBottom: "30px"}}>
          <IconButton
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
            sx={{
              "&:hover": {
                background: "transparent",
              },
            }}
          >
            <img
              src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80"
              width="40px"
              height="40px"
              style={{ borderRadius: "50%" }}
            />
            <ArrowDropDown />
          </IconButton>

          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <MenuItem onClick={handleClose}>Profile</MenuItem>
            <MenuItem onClick={handleClose}>Logout</MenuItem>
            <MenuItem onClick={handleClose}>Settings</MenuItem>
          </Menu>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Navbar;
