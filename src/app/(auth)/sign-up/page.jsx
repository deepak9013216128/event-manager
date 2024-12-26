import React from "react";
import { Typography, Link, Box } from "@mui/material";

import SignupForm from "@/components/auth/SignupForm";
import { ArrowBack } from "@mui/icons-material";

function SignupPage() {
  return (
    <Box maxWidth={450} width={"100%"}>
      <Typography
        variant="h3"
        component={"h1"}
        textAlign={"center"}
        gutterBottom
      >
        Welcome to ZZZZ
      </Typography>
      <SignupForm />

      <Typography mt={2}>
        Already having an account?{" "}
        <Link href="/login" color="primary" underline="hover">
          Login
        </Link>
      </Typography>
      <Link display={"flex"} mt={10} href="/">
        <ArrowBack />
        <Typography>Back</Typography>
      </Link>
    </Box>
  );
}

export default SignupPage;
