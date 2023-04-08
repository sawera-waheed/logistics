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

function createData(
  Image,
  Carrier,
  Routing,
  Stops,
  Flight,
  Departure,
  Arival,
  AircraftType
) {
  return {
    Image,
    Carrier,
    Routing,
    Stops,
    Flight,
    Departure,
    Arival,
    AircraftType,
  };
}

const rows = [
  createData(
    <img
      src={
        "https://images.unsplash.com/photo-1680925697894-106c453c6e9c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
      }
      height="20px"
      width="20px"
      style={{ borderRadius: "50%", marginRight: "20px" }}
    ></img>,
    "PORTBURY",
    "HONG KONG",
    "30 DAYS",
    "APRIL 20 2023",
    "LION SERVICE",
    "TRANSHIPMENT",
    "Unknown"
  ),
 createData(
    <img
      src={
        "https://images.unsplash.com/photo-1680925697894-106c453c6e9c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
      }
      height="20px"
      width="20px"
      style={{ borderRadius: "50%", marginRight: "20px" }}
    ></img>,
    "PORTBURY",
    "HONG KONG",
    "30 DAYS",
    "APRIL 20 2023",
    "LION SERVICE",
    "TRANSHIPMENT",
    "Unknown"
  ),
 createData(
    <img
      src={
        "https://images.unsplash.com/photo-1680925697894-106c453c6e9c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
      }
      height="20px"
      width="20px"
      style={{ borderRadius: "50%", marginRight: "20px" }}
    ></img>,
    "PORTBURY",
    "HONG KONG",
    "30 DAYS",
    "APRIL 20 2023",
    "LION SERVICE",
    "TRANSHIPMENT",
    "Unknown"
  ),
 createData(
    <img
      src={
        "https://images.unsplash.com/photo-1680925697894-106c453c6e9c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
      }
      height="20px"
      width="20px"
      style={{ borderRadius: "50%", marginRight: "20px" }}
    ></img>,
    "PORTBURY",
    "HONG KONG",
    "30 DAYS",
    "APRIL 20 2023",
    "LION SERVICE",
    "TRANSHIPMENT",
    "Unknown"
  ),
 createData(
    <img
      src={
        "https://images.unsplash.com/photo-1680925697894-106c453c6e9c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
      }
      height="20px"
      width="20px"
      style={{ borderRadius: "50%", marginRight: "20px" }}
    ></img>,
    "PORTBURY",
    "HONG KONG",
    "30 DAYS",
    "APRIL 20 2023",
    "LION SERVICE",
    "TRANSHIPMENT",
    "Unknown"
  ),
 createData(
    <img
      src={
        "https://images.unsplash.com/photo-1680925697894-106c453c6e9c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
      }
      height="20px"
      width="20px"
      style={{ borderRadius: "50%", marginRight: "20px" }}
    ></img>,
    "PORTBURY",
    "HONG KONG",
    "30 DAYS",
    "APRIL 20 2023",
    "LION SERVICE",
    "TRANSHIPMENT",
    "Unknown"
  ),
];
const CssTextField = styled(TextField)({
  maxHeight: "50px",
  margin: "0px 10px 0px 10px ",
  "& label": {
    display: "none",
  },
  "& label.Mui-focused": {
    display: "none",
    color: "black",
    borderRadius: "15px",
    maxHeight: "50px",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "black",
    borderRadius: "15px",
    maxHeight: "50px",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "black",
      borderRadius: "15px",
      maxHeight: "50px",
    },
    "&:hover fieldset": {
      borderColor: "black",
      borderRadius: "15px",
      maxHeight: "50px",
    },
    "&.Mui-focused fieldset": {
      borderColor: "black",
      borderRadius: "15px",
      maxHeight: "50px",
    },
  },
});
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
                    src="https://img.freepik.com/premium-vector/cargo-logistics-truck-transportation-container-ship-with-working-crane-import-export-transport-industry_327176-212.jpg?w=740"
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
                    Sea Solutions
                  </Typography>
                  <Card
                    sx={{
                      width: "80%",
                      marginLeft: "10%",
                      borderRadius: "10px",
                      padding: "20px",
                      boxShadow: "0px 0px 15px 2px #00000028",
                    }}
                  >
                    <CardContent>
                      <Grid container spacing={2}>
                        <Grid item sm={12} md={1} lg={1}></Grid>
                        <Grid item sm={12} md={10} lg={10}>
                          <Typography>From</Typography>
                          <Box
                            sx={{
                              backgroundColor: "#EDEDED",
                              borderRadius: "10px",
                              padding: "10px",
                              marginTop: "5px",
                            }}
                          >
                            <Input
                              type="text"
                              disableUnderline
                              fullWidth
                              label="From"
                              inputProps={{
                                style: {
                                  borderRadius: "10px",
                                  padding: "10px",
                                  backgroundColor: "#EDEDED",
                                },
                              }}
                            ></Input>
                            <Typography
                              sx={{ margin: "10px", color: "#A8A8A8" }}
                            >
                              Port or Country
                            </Typography>
                          </Box>
                          <Typography sx={{ mt: "10px" }}>To:</Typography>
                          <Box
                            sx={{
                              backgroundColor: "#EDEDED",
                              borderRadius: "10px",
                              padding: "10px",
                              marginTop: "5px",
                            }}
                          >
                            <Input
                              type="text"
                              disableUnderline
                              fullWidth
                              label="To"
                              inputProps={{
                                style: {
                                  borderRadius: "10px",
                                  padding: "10px",
                                  backgroundColor: "#EDEDED",
                                },
                              }}
                            ></Input>
                            <Typography
                              sx={{ margin: "10px", color: "#A8A8A8" }}
                            >
                              Port or Country
                            </Typography>
                          </Box>
                          <Typography sx={{ mt: "10px" }}>On:</Typography>
                          <Grid container spacing={2}>
                            <Grid item sm={12} md={4} lg={4}>
                              <Box sx={{}}>
                                <LocalizationProvider
                                  dateAdapter={AdapterDayjs}
                                >
                                  <DatePicker
                                    sx={{
                                      backgroundColor: "#EDEDED",
                                      borderRadius: "10px",
                                    }}
                                  />
                                </LocalizationProvider>
                              </Box>
                            </Grid>
                            <Grid item sm={12} md={8} lg={8}>
                              <Box
                                sx={{
                                  fontFamily: "Comforta",
                                  display: "inline-flex",
                                  justifyItems: "flex-end",
                                  justifyContent: "space-between",
                                }}
                              >
                                <Checkbox
                                  name="parking"
                                  sx={{
                                    color: "#00254d",
                                    "&.Mui-checked": {
                                      color: "#00254d",
                                    },
                                  }}
                                />
                                <Typography sx={{ marginTop: "10px" }}>
                                  Direct routing only
                                </Typography>
                              </Box>
                            </Grid>
                          </Grid>
                          <Button
                            onClick={handleSearch}
                            sx={{
                              marginTop: "50px",
                              textTransform: "none",
                              borderRadius: "10px",
                              background: "#00254d",
                              color: "#fff",
                              height: "40px",
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
                        <Grid item sm={12} md={1} lg={1}sx={{paddingTop: "100%"}}>
                          <Box sx={{ backgroundColor: "#00254d" , borderRadius: "50%" , display:{sm: "none", md:"flex"} , height: "30px" , width: "30px" , padding: "10px" , alignItems: "center" , marginTop: "130px"}}>
                            <TbArrowNarrowDown size="20px" color="#fff"/>
                            <TbArrowNarrowUp size="20px" color="#fff"/>
                          </Box>
                        </Grid>
                      </Grid>
                    </CardContent>
                  </Card>
                </Box>
              </Grid>
              {table ? (
                <Grid
                  container
                  spacing={2}
                  sx={{
                    backgroundColor: "#fff",
                    margin: "20px 0px 20px 20px",
                    borderRadius: "15px",
                  }}
                >
                  <Grid item sm={12} md={1} lg={1}></Grid>
                  <Grid item sm={12} md={10} lg={10}>
                    <TableContainer
                      component={Paper}
                      sx={{ marginTop: "100px", marginBottom: "100px" }}
                    >
                      <Table
                        sx={{ width: "100%" }}
                        aria-label="customized table"
                      >
                        <TableHead>
                          <TableRow>
                            <StyledTableCell>Port of Load</StyledTableCell>
                            <StyledTableCell align="left">
                             Port of Discharge
                            </StyledTableCell>
                            <StyledTableCell align="left">
                              Transit Time
                            </StyledTableCell>
                            <StyledTableCell align="left">
                             Next Departure
                            </StyledTableCell>
                            <StyledTableCell align="left">
                              Service
                            </StyledTableCell>
                            <StyledTableCell align="left">
                             Routing Type
                            </StyledTableCell>
                            
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {rows.map((row) => (
                            <StyledTableRow key={row.Carrier}>
                              <StyledTableCell component="th" scope="row">
                                <Box sx={{ display: "flex" }}>
                                 
                                  {row.Carrier}
                                </Box>
                              </StyledTableCell>
                              <StyledTableCell align="center">
                                {row.Routing}
                              </StyledTableCell>
                              <StyledTableCell align="center">
                                {row.Stops}
                              </StyledTableCell>
                              <StyledTableCell align="center">
                                {row.Flight}
                              </StyledTableCell>
                              <StyledTableCell align="center">
                                {row.Departure}
                              </StyledTableCell>
                              <StyledTableCell align="center">
                                {row.Arival}
                              </StyledTableCell>
                              
                            </StyledTableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </TableContainer>
                  </Grid>
                  <Grid item sm={12} md={1} lg={1}></Grid>
                </Grid>
              ) : (
                ""
              )}
            </Grid>
          </Container>
        </main>
      </div>
    </MyProSidebarProvider>
  );
};

export default SeaSolutions;
