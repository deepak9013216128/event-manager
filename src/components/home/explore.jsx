import CardImage from "@/components/images";
import BgBubble from "@/components/images/bubble";
import { x, Container, Grid2, Toolbar, Typography, Box } from "@mui/material";
import BackgroundImage from "../images/background";

export default async function Explore() {
  return (
    <Box>
      <Toolbar />
      <Box bgcolor={"#88A7B0"}>
        <Container>
          <Grid2 container>
            <Grid2 size={{ xs: 3 }} position={"relative"}>
              <Box position={"absolute"} zIndex={1}>
                <Toolbar />
                <Typography
                  variant="h2"
                  component={"h2"}
                  fontSize={{ xs: 48, md: 128 }}
                  color="textPrimary"
                  fontFamily={"play"}
                >
                  Explore
                </Typography>
                <Typography
                  variant="h2"
                  component={"h2"}
                  fontSize={{ xs: 48, md: 128 }}
                  color="textPrimary"
                  fontFamily={"play"}
                  textAlign={"center"}
                >
                  Our
                </Typography>
                <Typography
                  variant="h2"
                  component={"h2"}
                  fontSize={{ xs: 48, md: 128 }}
                  color="textPrimary"
                  fontFamily={"play"}
                >
                  Events
                </Typography>
              </Box>
            </Grid2>
            <Grid2 size={{ xs: 5 }}>
              <CardImage src={"/explore1.png"} paddingBottom={"138%"} />
            </Grid2>
            <Grid2 size={{ xs: 4 }}>
              <CardImage src={"/explore2.png"} paddingBottom={"73%"} />
            </Grid2>
          </Grid2>
        </Container>
      </Box>
      <Toolbar />
    </Box>
  );
}
