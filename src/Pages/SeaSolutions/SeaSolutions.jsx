import {
  Container,
  Box,
  Grid,
  Typography,
  Card,
  CardContent,
  TextField,
} from "@mui/material";
import React from "react";

import { MyProSidebarProvider } from "../../Sidebar/sidebarContext";
import Navbar from "../../Components/Navbar/Navbar";

const SeaSolutions = () => {
  return (
    <MyProSidebarProvider>
      <div style={{ height: "100%", width: "100%" }}>
        <main>
          <Navbar />
          <Container>
            <Grid container spacing={2}>
              <Grid item sm={12} md={12} lg={12} sx={{ textAlign: "center" }}>
                <img
                  src="https://img.freepik.com/premium-vector/cargo-logistics-truck-transportation-container-ship-with-working-crane-import-export-transport-industry_327176-212.jpg?w=740"
                  height="80%"
                ></img>
                <Typography sx={{ fontWeight: "bold", size: "20px" }}>
                  Sea Solutions
                </Typography>
              </Grid>
              <Grid item sm={12} md={12} lg={12} sx={{ textAlign: "center" }}>
                <Card>
                  <CardContent>
                    <Grid container spacing={2}>
                      <Grid item sm={6} md={6} lg={6}></Grid>
                      <Grid item sm={6} md={6} lg={6}></Grid>
                    </Grid>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Container>
        </main>
      </div>
    </MyProSidebarProvider>
  );
};

export default SeaSolutions;
