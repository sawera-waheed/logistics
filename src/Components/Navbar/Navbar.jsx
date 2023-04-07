import { AppBar, Container, Grid, Typography } from "@mui/material";
import React from "react";

const Navbar = () => {
  return (
    <Container maxWidth="100%" sx={{ height: "65px" , background: "#0000ff"}}>
      <Grid container spacing={2}>
        <Grid item sm={12} md={12} lg={12}>
          <Typography sx={{ color: "#fff" , size: "20px" , fontWeight: "bold" , mt:"10px"}}>LCT Tracker and Solution</Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Navbar;
