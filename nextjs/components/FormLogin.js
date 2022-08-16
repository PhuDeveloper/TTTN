import { Button, Grid, Paper, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useForm } from "react-hook-form";

export default function FormLogin() {
  return (
    <div>
      <form>
        <Paper elevation={3}>
          <Box
            sx={{
              width: 800,
              height: 400,
            }}
          >
            <Grid
              container
              sx={{
                justifyContent: "center",
              }}
              spacing={4}
            >
              <Grid item xs={8}>
                <Typography align="center" variant="h4">
                  Đăng nhập
                </Typography>
              </Grid>
              <Grid item xs={8}>
                <TextField
                  sx={{
                    width: "100%",
                  }}
                  id="username"
                  label="Username"
                  variant="outlined"
                  name="username"
                />
              </Grid>
              <Grid item xs={8}>
                {" "}
                <TextField
                  sx={{
                    width: "100%",
                  }}
                  id="password"
                  label="Password"
                  variant="outlined"
                  type="password"
                  name="password"
                />
              </Grid>
              <Grid item xs={8}>
                {" "}
                <Button fullWidth type="submit" variant="contained">
                  Đăng nhập
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Paper>
      </form>
    </div>
  );
}
