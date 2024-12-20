import React from "react";
import { Typography, Link, Box } from "@mui/material";

import LoginForm from "@/components/auth/LoginForm";
import BackgroundImage from "@/components/images/background";

function LoginPage() {
  return (
    <Box maxWidth={450} width={"100%"}>
      <Typography
        variant="h3"
        component={"h1"}
        textAlign={"center"}
        gutterBottom
      >
        Login <br />
        Welcome Back!
      </Typography>
      <LoginForm />
      <Typography variant="body1" color={"textPrimary"}>
        Not Having an account ?
        <Link href="/sign-up" color={"textPrimary"}>
          Signup
        </Link>
      </Typography>
    </Box>
  );
}

export default LoginPage;
