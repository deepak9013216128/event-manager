"use client";
import React from "react";
import { Box, Button, TextField, InputLabel } from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
// import { authLogin } from "@/services/auth";
import { useRouter } from "next/navigation";
// import { PAGE_URLS } from "@/constants/urls";

const signupSchema = yup.object({
  identifier: yup
    .number()
    .positive()
    .integer()
    .required("Mobile No is required"),
});

function SignupForm({}) {
  const router = useRouter();
  const {
    handleSubmit,
    formState: { errors },
    control,
    reset,
  } = useForm({
    resolver: yupResolver(signupSchema),
    defaultValues: {
      identifier: null,
    },
  });

  const onSubmit = (data) => {
    authLogin(data)
      .then(({ variant, msg, data: user }) => {
        if (variant === "success") {
          localStorage.setItem("username", user?.username);
          localStorage.setItem("email", user?.email);
          reset();
          router.push(PAGE_URLS.HOME);
        }
      })
      .catch(console);
  };

  return (
    <Box mt={5} component="form" onSubmit={handleSubmit(onSubmit)}>
      <Box sx={{ mb: 2 }}>
        <InputLabel>Enter your Mobile No</InputLabel>
        <Controller
          name="identifier"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              variant="outlined"
              fullWidth
              type="number"
              placeholder="0987654321"
              error={!!errors.identifier}
              helperText={errors.identifier ? errors.identifier.message : ""}
            />
          )}
        />
      </Box>

      <Box mt={2}>
        <Button
          type="submit"
          variant="contained"
          size="large"
          color="secondary"
          fullWidth
        >
          Submit
        </Button>
      </Box>
    </Box>
  );
}

export default SignupForm;
