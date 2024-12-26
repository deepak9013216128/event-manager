import BgBubble from "@/components/images/bubble";
import OnboardingForm from "@/components/onboarding/OnboardingForm";
import { Box, Button, Container, Toolbar, Typography } from "@mui/material";
import Image from "next/image";

export default function Welcome({}) {
  return (
    <BgBubble
      items={[
        {
          size: `50vw`, // Random size
          top: `-30%`, // Random position Y-axis
          left: `-10%`, // Random position X-axis
        },
        {
          size: `50vw`, // Random size
          top: `30%`, // Random position Y-axis
          left: `70%`, // Random position X-axis
        },
      ]}
    >
      <Container>
        <Toolbar />
        <Box textAlign={"center"}>
          <Image src={"/welcome.png"} width={200} height={192} alt="welcome" />
          <Typography component={"h1"} variant="h3" gutterBottom>
            All done!
          </Typography>
          <Typography color="textSecondary" gutterBottom>
            Your account has been created. You're now
            <br /> ready to explore and enjoy all the features and
            <br /> benefits we have to offer.
          </Typography>
        </Box>
        <Box mt={2} textAlign={"center"}>
          <Button variant="contained" size="large" color="secondary">
            Start exploring App
          </Button>
        </Box>
      </Container>
    </BgBubble>
  );
}
