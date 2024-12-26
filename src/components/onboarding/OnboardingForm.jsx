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
  Grid2,
  Toolbar,
} from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Visibility, VisibilityOff } from "@mui/icons-material";
// import { authLogin } from "@/services/auth";
import { useRouter } from "next/navigation";
import Upload from "../form/upload";
// import { PAGE_URLS } from "@/constants/urls";

const onboardingSchema = yup.object({
  firstName: yup.string().required("Frist Name is required"),
  lastName: yup.string().required("Last Name is required"),
  dob: yup.date().required("Date of birth is required"),
  profileImageUrl: yup.date().required("Profile Image is required"),
});

function OnboardingForm({}) {
  const router = useRouter();
  const {
    handleSubmit,
    formState: { errors },
    control,
    reset,
  } = useForm({
    resolver: yupResolver(onboardingSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      dob: "",
      profileImageUrl: "",
    },
  });

  const onSubmit = (data) => {
    authLogin(data)
      .then(({ variant, msg, data: user }) => {
        if (variant === "success") {
          reset();
          router.push(PAGE_URLS.HOME);
        }
      })
      .catch(console);
  };

  return (
    <Box component="form" onSubmit={handleSubmit(onSubmit)}>
      <Toolbar />
      <Grid2 container spacing={2} justifyContent={"space-between"}>
        <Grid2 size={{ xs: 12, md: 6 }} maxWidth={450}>
          <Typography component={"h1"} variant="h3" gutterBottom>
            Lastly, tell us more <br />
            about yourself
          </Typography>
          <Typography color="textSecondary" gutterBottom>
            Please enter your legal name. This information <br /> will be used
            to verify your account.
          </Typography>
          <Box sx={{ mb: 2 }}>
            <InputLabel>First Name</InputLabel>
            <Controller
              name="firstName"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  variant="outlined"
                  fullWidth
                  type="text"
                  error={!!errors.firstName}
                  helperText={errors.firstName ? errors.firstName.message : ""}
                />
              )}
            />
          </Box>
          <Box sx={{ mb: 2 }}>
            <InputLabel>Last Name</InputLabel>
            <Controller
              name="lastName"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  variant="outlined"
                  fullWidth
                  type="text"
                  error={!!errors.lastName}
                  helperText={errors.lastName ? errors.lastName.message : ""}
                />
              )}
            />
          </Box>
          <Box sx={{ mb: 2 }}>
            <InputLabel>Date of Birth</InputLabel>
            <Controller
              name="dob"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  variant="outlined"
                  fullWidth
                  type="date"
                  placeholder="MM/DD/YYYY"
                  error={!!errors.dob}
                  helperText={errors.dob ? errors.dob.message : ""}
                />
              )}
            />
          </Box>
        </Grid2>
        <Grid2 size={{ xs: 12, md: 6 }}>
          <Upload />
        </Grid2>
        <Grid2 size={12}>
          <Box mt={2} textAlign={"right"}>
            <Button
              type="submit"
              variant="contained"
              size="large"
              color="secondary"
            >
              Next
            </Button>
          </Box>
        </Grid2>
      </Grid2>
    </Box>
  );
}

export default OnboardingForm;
