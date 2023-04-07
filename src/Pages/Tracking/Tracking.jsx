import { useState } from "react";
import {
  Container,
  Box,
  Grid,
  Typography,
  Card,
  CardContent,
  TextField,
  Button,
} from "@mui/material";
import React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

import { MyProSidebarProvider } from "../../Sidebar/sidebarContext";
import Navbar from "../../Components/Navbar/Navbar";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const Tracking = () => {
  const handleTracking = () => {};
  const codes = [
    {
      value: "23Za",
      label: "23Za",
    },
    {
      value: "22G5",
      label: "22G5",
    },
    {
      value: "33Bu",
      label: "33Bu",
    },
  ];
  return (
    <MyProSidebarProvider>
      <div style={{ height: "100%", width: "100%" }}>
        <main>
          <Box sx={{ marginTop: "20px" }}>
            <Navbar />
          </Box>
          <Container>
            <Grid container spacing={2}>
              <Grid
                item
                sm={12}
                md={12}
                lg={12}
                sx={{ textAlign: "center", height: "50%" }}
              >
                <img
                  src="https://img.freepik.com/premium-vector/cargo-logistics-truck-transportation-container-ship-with-working-crane-import-export-transport-industry_327176-212.jpg?w=740"
                  height="80%"
                ></img>
                <Typography sx={{ fontWeight: "bold", size: "20px" }}>
                  Tracking
                </Typography>
              </Grid>
              <Grid item sm={12} md={12} lg={12} sx={{}}>
                <Card sx={{ width: "80%", marginLeft: "10%" }}>
                  <CardContent>
                    <Typography>Enter Tracking Number</Typography>
                    <Grid container spacing={2}>
                      <Grid item sm={2} md={2} lg={2}>
                        <TextField
                          select
                          margin="normal"
                          required
                          fullWidth
                          name="code"
                          label="Currier code"
                          type="code"
                          id="code"
                          defaultValue="33Bu"
                        >
                          {codes.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                              {option.label}
                            </MenuItem>
                          ))}
                        </TextField>
                      </Grid>
                      <Grid item sm={10} md={6} lg={6}>
                        <TextField
                          margin="normal"
                          required
                          fullWidth
                          name="Number"
                          label="Tracking Number"
                          type="text"
                          id="Trackingnumber"
                          
                        />
                      </Grid>
                      <Grid item sm={12} md={4} lg={4}>
                        <Button
                          onClick={handleTracking}
                          sx={{
                            marginTop: "15px",
                            textTransform: "none",
                            background: "#00254d",
                            color: "#fff",
                            height: "50px",
                            padding: "10px 20px 10px 20px",
                            "&:hover": {
                              background: "#00254d",
                              color: "#fff",
                            },
                          }}
                        >
                          Track
                        </Button>
                      </Grid>
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

export default Tracking;
