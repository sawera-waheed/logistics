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
  Input,
  Checkbox,
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
import { TbArrowNarrowDown, TbArrowNarrowUp } from "react-icons/tb";

const Setting = () => {


  return (
    <MyProSidebarProvider>
      <div style={{ height: "100%", width: "100%" }}>
        <main>
          <Box
            sx={{ margin: "20px", background: "#fff", borderRadius: "15px" }}
          >
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
                <Box
                  sx={{
                    width: "100%",
                    borderRadius: "15px",
                    backgroundColor: "#fff",
                  }}
                >
                  <img
                    src="https://img.freepik.com/free-vector/technical-support-programming-coding_335657-2470.jpg?w=740&t=st=1680985615~exp=1680986215~hmac=4434a207b5b7f1fd056fd6d127f5c19e2b7a9b40c106f99ee1fe000b2494c53f"
                    height="80%"
                  ></img>
                </Box>
              </Grid>
              <Grid item sm={12} md={12} lg={12}>
                <Box
                  sx={{
                    backgroundColor: "#fff",
                    borderRadius: "15px",
                    padding: "50px",
                  }}
                >
                  <Typography
                    sx={{
                      fontWeight: "bold",
                      fontSize: "50px",
                      textAlign: "center",
                      color: "#00254d",
                    }}
                  >
                    Setting
                  </Typography>
                </Box>
              </Grid>
             
            </Grid>
          </Container>
        </main>
      </div>
    </MyProSidebarProvider>
  );
};

export default Setting;
