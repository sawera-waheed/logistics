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

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#00254d",
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function createData(Carrier, Routing, Stops, Flight, Departure, Arival, AircraftType) {
  return { Carrier, Routing, Stops, Flight, Departure, Arival, AircraftType};
}

const rows = [
  createData("PIA", "unknown", "Dubai", "PIA", "2:00 pm", "2:00 am" ,"Unknown"),
  createData("PIA", "unknown", "Dubai", "PIA", "2:00 pm", "2:00 am" ,"Unknown"),
  createData("PIA", "unknown", "Dubai", "PIA", "2:00 pm", "2:00 am" ,"Unknown"),
  createData("PIA", "unknown", "Dubai", "PIA", "2:00 pm", "2:00 am" ,"Unknown"),
  createData("PIA", "unknown", "Dubai", "PIA", "2:00 pm", "2:00 am" ,"Unknown"),
  createData("PIA", "unknown", "Dubai", "PIA", "2:00 pm", "2:00 am" ,"Unknown"),
];

const SeaSolutions = () => {
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
                  Sea Solutions
                </Typography>
              </Grid>
              <Grid item sm={12} md={12} lg={12} sx={{}}>
                <Card sx={{ width: "80%", marginLeft: "10%" }}>
                  <CardContent>
                    <FormControl
                      variant="standard"
                      sx={{ m: 1, minWidth: 120 }}
                    >
                      <InputLabel id="demo-simple-select-standard-label">
                        Frights
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-standard-label"
                        id="demo-simple-select-standard"
                        value={flight}
                        onChange={handleChange}
                        label="Air Fright"
                      >
                        <MenuItem value={"airfright"}>Air Fright</MenuItem>
                        <MenuItem value={"seafright"}>Sea Fright</MenuItem>
                      </Select>
                    </FormControl>
                    <Grid container spacing={2}>
                      <Grid item sm={12} md={3} lg={3}>
                        <TextField
                          margin="normal"
                          required
                          fullWidth
                          name="Origin"
                          label="Origin"
                          type="Origin"
                          id="Origin"
                        />
                      </Grid>
                      <Grid item sm={12} md={3} lg={3}>
                        <TextField
                          margin="normal"
                          required
                          fullWidth
                          name="Destination"
                          label="Destination"
                          type="text"
                          id="Destination"
                          autoComplete="Destination"
                        />
                      </Grid>
                      <Grid item sm={12} md={3} lg={3}>
                        <Box sx={{ marginTop: "15px" }}>
                          <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DatePicker />
                          </LocalizationProvider>
                        </Box>
                      </Grid>
                      <Grid item sm={12} md={3} lg={3}>
                        <Button
                          onClick={handleSearch}
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
                          Search
                        </Button>
                      </Grid>
                    </Grid>
                  </CardContent>
                </Card>
              </Grid>
              <Grid container spacing={2}>
                <Grid item sm={12} md={1} lg={1}></Grid>
                <Grid item sm={12} md={10} lg={10}>
                  {table? 
                  <TableContainer component={Paper} sx={{marginTop: "100px", marginBottom: "100px"}}>
                    <Table sx={{ width: "100%"}} aria-label="customized table">
                      <TableHead>
                        <TableRow>
                          <StyledTableCell>
                          Carrier
                          </StyledTableCell>
                          <StyledTableCell align="right">
                           Routing
                          </StyledTableCell>
                          <StyledTableCell align="right">
                            Stops
                          </StyledTableCell>
                          <StyledTableCell align="right">
                           Flight
                          </StyledTableCell>
                          <StyledTableCell align="right">
                            Departure
                          </StyledTableCell>
                          <StyledTableCell align="right">
                            Arival
                          </StyledTableCell>
                          <StyledTableCell align="right">
                          Aircraft Type
                          </StyledTableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {rows.map((row) => (
                          <StyledTableRow key={row.carrier}>
                            <StyledTableCell component="th" scope="row">
                              {row.Carrier}
                            </StyledTableCell>
                            <StyledTableCell align="right">
                              {row.Routing}
                            </StyledTableCell>
                            <StyledTableCell align="right">
                              {row.Stops}
                            </StyledTableCell>
                            <StyledTableCell align="right">
                              {row.Flight}
                            </StyledTableCell>
                            <StyledTableCell align="right">
                              {row.Departure}
                            </StyledTableCell>
                            <StyledTableCell align="right">
                              {row.Arival}
                            </StyledTableCell>
                            <StyledTableCell align="right">
                              {row.AircraftType}
                            </StyledTableCell>
                          </StyledTableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                  :""}
                </Grid>
                <Grid item sm={12} md={1} lg={1}></Grid>
              </Grid>
            </Grid>
          </Container>
        </main>
      </div>
    </MyProSidebarProvider>
  );
};

export default SeaSolutions;
