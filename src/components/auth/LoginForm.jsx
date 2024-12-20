"use client";
import React, { useState } from "react";
import {
  Box,
  Button,
  TextField,
  Link,
  InputAdornment,
  IconButton,
  InputLabel,
  Typography,
} from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Visibility, VisibilityOff } from "@mui/icons-material";
// import { authLogin } from "@/services/auth";
import { useRouter } from "next/navigation";
// import { PAGE_URLS } from "@/constants/urls";

const loginSchema = yup.object({
  identifier: yup
    .number()
    .positive()
    .integer()
    .required("Mobile No is required"),
});

function LoginForm({}) {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const {
    handleSubmit,
    formState: { errors },
    control,
    reset,
  } = useForm({
    resolver: yupResolver(loginSchema),
    defaultValues: {
      identifier: "",
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
      {/* <Box sx={{ mb: 2 }}>
        <Controller
          name="password"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              variant="outlined"
              fullWidth
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              label="Password"
              error={!!errors.password}
              helperText={errors.password ? errors.password.message : ""}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={() => setShowPassword((p) => !p)}>
                      {showPassword ? (
                        <VisibilityOff fontSize="small" />
                      ) : (
                        <Visibility fontSize="small" />
                      )}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          )}
        />
      </Box> */}
      <Typography>
        Not Having an account ?
        <Link href="/sign-up" color="primary">
          Signup
        </Link>
      </Typography>

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

export default LoginForm;
