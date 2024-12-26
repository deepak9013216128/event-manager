import React from "react";
import { Typography, Link, Box } from "@mui/material";

import LoginForm from "@/components/auth/LoginForm";
import { ArrowBack } from "@mui/icons-material";

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
      <Link display={"flex"} mt={10} href="/">
        <ArrowBack />
        <Typography>Back</Typography>
      </Link>
    </Box>
  );
}

export default LoginPage;
