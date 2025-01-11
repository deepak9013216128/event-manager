"use client";
import React, { useState } from "react";
import {
  Box,
  Button,
  TextField,
  Link,
  InputLabel,
  Typography,
  Toolbar,
  Container,
  Grid2,
} from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/navigation";
import BgBubble from "../images/bubble";

const loginSchema = yup.object({
  name: yup.string().required("Name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  message: yup.string().required("Message is required"),
});

function KeepInTouch({}) {
  const router = useRouter();
  const {
    handleSubmit,
    formState: { errors },
    control,
    reset,
  } = useForm({
    resolver: yupResolver(loginSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = (data) => {
    // sendContactMessage({ data })
    //   .then(({ variant, msg }) => {
    //     enqueueSnackbar(msg, { variant });
    //     reset();
    //   })
    //   .catch(console);
  };

  return (
    <BgBubble
      items={[
        {
          size: `45vw`, // Random size
          top: `-10%`, // Random position Y-axis
          left: `65%`, // Random position X-axis
        },
        {
          size: `45vw`, // Random size
          top: `60%`, // Random position Y-axis
          left: `-20%`, // Random position X-axis
        },
      ]}
    >
      <Toolbar />
      <Toolbar />
      <Toolbar />
      <Container>
        <Grid2 container justifyContent={"end"}>
          <Grid2 size={{ xs: 12, md: 6 }}>
            <Typography
              variant="h4"
              component={"h2"}
              fontWeight={700}
              color="primary.main"
              gutterBottom
            >
              KEEP IN TOUCH
            </Typography>
            <Typography gutterBottom variant="body1">
              We would love to hear from you and answer any questions you may
              have. You can contact us by filling out the form below, sending us
              an email, or calling us on our phone number. We will get back to
              you as soon as possible. You can also follow us on our social
              media platforms and subscribe to our newsletter to stay updated on
              our latest news and offers. Thank you for your interest and
              support.
            </Typography>
            <Box component="form" onSubmit={handleSubmit(onSubmit)}>
              <Box sx={{ mb: 2 }}>
                <InputLabel>Name</InputLabel>
                <Controller
                  name="name"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      variant="outlined"
                      fullWidth
                      type="text"
                      placeholder="Name"
                      error={!!errors.name}
                      helperText={errors.name ? errors.name.message : ""}
                    />
                  )}
                />
              </Box>
              <Box sx={{ mb: 2 }}>
                <InputLabel>Email</InputLabel>
                <Controller
                  name="email"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      variant="outlined"
                      fullWidth
                      type="email"
                      placeholder="Email"
                      error={!!errors.email}
                      helperText={errors.email ? errors.email.message : ""}
                    />
                  )}
                />
              </Box>
              <Box sx={{ mb: 2 }}>
                <InputLabel>Message</InputLabel>
                <Controller
                  name="message"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      variant="outlined"
                      fullWidth
                      type="text"
                      placeholder="Message"
                      multiline
                      rows={6}
                      error={!!errors.message}
                      helperText={errors.message ? errors.message.message : ""}
                    />
                  )}
                />
              </Box>

              <Box mt={2}>
                <Button
                  type="submit"
                  variant="contained"
                  size="large"
                  color="primary"
                >
                  Submit
                </Button>
              </Box>
            </Box>
          </Grid2>
        </Grid2>
      </Container>

      <Toolbar />
      <Toolbar />
      <Toolbar />
    </BgBubble>
  );
}

export default KeepInTouch;
