"use client";

import React from "react";
import Copyright from "../../components/ui/Copyright";
import CssBaseline from "@mui/material/CssBaseline";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Link from "next/link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme();

export default function Login() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component='main' maxWidth='xs'>
        <CssBaseline />
        <Box
          sx={{
            marginTop: 15,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography component='h1' variant='h5'>
            Login
          </Typography>
          <Box component='form' noValidate={false} onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField required fullWidth id='email' label='Email Address' name='email' autoComplete='email' />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name='password'
                  label='Password'
                  type='password'
                  id='password'
                  autoComplete='new-password'
                />
              </Grid>
            </Grid>
            <Button
              style={{ backgroundColor: "#7c66da", height: 50 }}
              type='submit'
              fullWidth
              variant='contained'
              sx={{ mt: 3, mb: 2 }}
            >
              Login
            </Button>
            <Button style={{ backgroundColor: "#7c66da", height: 50 }} type='submit' fullWidth variant='contained' sx={{ mb: 2 }}>
              Sign In with Google
            </Button>
            <Grid container justifyContent='center'>
              <Grid item>
                <Link href='/register' style={{ color: "blue" }}>
                  Don&apos;t have an account? Sign Up
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 10 }} />
      </Container>
    </ThemeProvider>
  );
}
