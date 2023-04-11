import * as React from "react";
import { useState, useEffect } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { useNavigate } from "react-router-dom";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import logo from "../../assets/Images/logo.png";
import bg from "../../assets/Images/bg.png"
//  export default function
const SignInSide = () => {
  const navigate = useNavigate();

  const [msg, setMsg] = useState(""); // state to print message
  const [err, setErr] = useState(false);
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  useEffect(() => {});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    navigate("/seasolutions");
  };
  const handleSignUp = () => {
    navigate("/signup");
  };
  const handleForgetPass = () => {
    navigate("#");
  };
  return (
    // <ThemeProvider theme={theme}>
    <Grid
      container
      sx={{
        display: "flex",
        alignItems: "center",
        height: "100vh",
        backgroundImage: `url(${bg})`,
        backgroundRepeat: "none",
        backgroundSize: "cover",
        
      }}
    >
      <CssBaseline />
      {/* <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: `url(${bg})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            
          }}
        /> */}
      <Grid
        item
        xs={12}
        sm={12}
        md={12}
        sx={{ display: "flex", justifyContent: "center" }}
      >
        <Box
          sx={{
            borderRadius: "15px",
            my: 8,
            mx: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            background: "#ffffffc8",
            width: "40%",
            padding: "30px",
            height: "500px",
          }}
        >
          <img src={logo} height="100px"></img>
          
          {msg ? (
            <Box sx={{ mt: 1 }}>
              <Typography sx={{ color: `${err ? "#FF0000" : "#2e8548"}` }}>
                {" "}
                {msg}
              </Typography>
            </Box>
          ) : (
            ""
          )}
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              value={user.email}
              onChange={handleChange}
            />
            <br />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={user.password}
              onChange={handleChange}
            />
            <br />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              fullWidth
              onClick={handleSubmit}
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
              Login
            </Button>
          </Box>
        </Box>
      </Grid>
    </Grid>
    // </ThemeProvider>
  );
};
export { SignInSide };
