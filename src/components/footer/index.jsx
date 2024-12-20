"use client";
import {
  Box,
  Container,
  Grid,
  Typography,
  TextField,
  Button,
  Toolbar,
  Divider,
  Grid2,
  List,
  ListItem,
  Link,
} from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Image from "next/image";

const schema = yup.object().shape({
  email: yup
    .string()
    .email("Invalid email format")
    .required("Email is required"),
});

const pages = [
  {
    label: "About Us",
    path: "/about-us",
  },
  { label: "Events (Masterclass & Mixes)", path: "/events" },
  { label: "Trips", path: "/trips" },
  { label: "Media (Podcast & Blogs)", path: "/media" },
  { label: "Join community", path: "/login" },
];

function Footer() {
  const {
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = (values) => {};

  return (
    <Box component={"footer"} sx={{ bgcolor: "primary.main" }}>
      <Container maxWidth="lg">
        <Toolbar />
        <Grid2 container spacing={2} justifyContent={"space-between"}>
          <Grid2 size={{ xs: 12, md: 6, lg: 3 }}>
            <Box textAlign={"center"}>
              <Image src={"/vercel.svg"} alt="logo" width={150} height={150} />
            </Box>
            <Box
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
              sx={{ mt: { md: 2 } }}
            >
              <Typography color="textPrimary">
                {"Copyright © 2024 | All Rights Reserved"}
              </Typography>
            </Box>
          </Grid2>

          <Grid2 size={{ xs: 12, md: 6, lg: 3 }}>
            <Typography variant="h5" color="textPrimary">
              Features
            </Typography>

            <Box minWidth={550}>
              <List>
                {pages.map((page) => (
                  <ListItem key={page.label}>
                    <Link href={page.path} color="textPrimary">
                      {page.label}
                    </Link>
                  </ListItem>
                ))}
              </List>
            </Box>
          </Grid2>
          <Grid2 size={{ xs: 12, md: 6, lg: 3 }}>
            <Typography variant="h5" color="textPrimary">
              Features
            </Typography>

            <Box minWidth={550}>
              <List>
                {pages.map((page) => (
                  <ListItem key={page.label}>
                    <Link href={page.path} color="textPrimary">
                      {page.label}
                    </Link>
                  </ListItem>
                ))}
              </List>
            </Box>
          </Grid2>
          <Grid2 size={{ xs: 12, md: 6, lg: 3 }}>
            <Typography variant="h5" color="textPrimary">
              Features
            </Typography>

            <Box minWidth={550}>
              <List>
                {pages.map((page) => (
                  <ListItem key={page.label}>
                    <Link href={page.path} color="textPrimary">
                      {page.label}
                    </Link>
                  </ListItem>
                ))}
              </List>
            </Box>
          </Grid2>
        </Grid2>
      </Container>
    </Box>
  );
}

export default Footer;
