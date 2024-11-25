"use client";

import React from "react";
import Copyright from "src/app/components/ui/Copyright";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "next/link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useAuth } from "src/app/hooks/useAuth";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { AppLoader } from "src/app/components/ui/Loader";

const theme = createTheme();

export default function SignUp() {
  const { isRegistrationLoading, registerUser } = useAuth();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const registerInput = {
      firstName: data.get("firstName") as string,
      lastName: data.get("lastName") as string,
      email: data.get("email") as string,
      password: data.get("password") as string,
      phoneNumber: data.get("phone") as string,
    };
    registerUser(registerInput);
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component='main' maxWidth='xs'>
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography component='h1' variant='h5'>
            Sign up
          </Typography>
          <Box component='form' noValidate={false} onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField autoComplete='given-name' name='firstName' required fullWidth id='firstName' label='First Name' autoFocus />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField required fullWidth id='lastName' label='Last Name' name='lastName' />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField required fullWidth id='email' label='Email Address' name='email' />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField required fullWidth id='phone' label='Phone Number' name='phone' />
              </Grid>
              <Grid item xs={12}>
                <TextField required fullWidth name='password' label='Password' type='password' id='password' />
              </Grid>
            </Grid>
            <Button disabled={isRegistrationLoading} style={{ backgroundColor: "#7c66da", height: 50 }} type='submit' fullWidth variant='contained' sx={{ mt: 3, mb: 2 }}>
              {isRegistrationLoading ? <AppLoader /> : "Sign Up"}
            </Button>
            <Button style={{ backgroundColor: "#1565c0", height: 50 }} fullWidth variant='contained' sx={{ mb: 2 }}>
              Sign Up with Google
            </Button>
            <Grid container justifyContent='center'>
              <Grid item>
                <Link href='/login' style={{ color: "blue" }}>
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 7 }} />
      </Container>
    </ThemeProvider>
  );
}
