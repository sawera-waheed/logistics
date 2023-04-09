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