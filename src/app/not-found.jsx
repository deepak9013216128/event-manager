"use client";

import { Box, Button, Typography, styled } from "@mui/material";

const Main404 = styled(Box)(({ theme }) => ({
  position: "relative",
  display: "inline-block",
  width: "100%",
  verticalAlign: "top",
  textAlign: "center",
}));

export default function NotFound() {
  let title = "404";
  let subtitle = "Error page";
  let text = "The page you are looking for may have been moved or removed.";
  return (
    <Main404 component={"main"}>
      <Typography
        variant="h1"
        component={"h1"}
        fontSize={{ xs: 150, md: 350 }}
        color={"textSecondary"}
        lineHeight={1}
      >
        {title}
      </Typography>
      <Typography
        variant="h2"
        component={"h2"}
        fontSize={{ xs: 50, md: 90 }}
        textTransform={"none"}
        color={"secondary"}
        fontFamily={"aAutoSignature"}
      >
        {subtitle}
      </Typography>
      <Typography color={"textPrimary"} fontWeight={300}>
        {text}
      </Typography>

      <Box mt={5}>
        <Button href="/" size="large" variant="outlined">
          Back to home
        </Button>
      </Box>
    </Main404>
  );
}
