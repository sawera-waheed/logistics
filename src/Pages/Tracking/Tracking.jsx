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
  const [table, setTable] = useState(false);
  const [flight, setFlight] = useState("");
  const handleChange = (event) => {
    setFlight(event.target.value);
  };
  const handleSearch = () => {
    setTable(true);
  };
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
                    src="https://img.freepik.com/premium-vector/global-transportation-system-abstract-concept-vector-illustration_107173-31150.jpg?w=740"
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
                    Tracking
                  </Typography>
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
                </Box>
              </Grid>
             
            </Grid>
          </Container>
        </main>
      </div>
    </MyProSidebarProvider>
  );
};

export default Tracking;
