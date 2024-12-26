import CardImage from "@/components/images";
import BgBubble from "@/components/images/bubble";
import { x, Container, Grid2, Toolbar, Typography } from "@mui/material";

export default async function Hero() {
  return (
    <BgBubble
      items={[
        {
          size: `45vw`, // Random size
          top: `-10%`, // Random position Y-axis
          left: `65%`, // Random position X-axis
        },
        {
          size: `50vw`, // Random size
          top: `60%`, // Random position Y-axis
          left: `-20%`, // Random position X-axis
        },
      ]}
    >
      <Container>
        <Toolbar />
        <Typography component={"h1"} variant="h1" textAlign={"center"}>
          Find Your Interest Nearby!{" "}
        </Typography>
        <Toolbar />
        <Grid2 container spacing={2}>
          <Grid2 size={6}>
            <CardImage src={"/hero.png"} paddingBottom={"82%"} />
          </Grid2>
          <Grid2 size={6}>
            <CardImage src={"/hero.png"} paddingBottom={"82%"} />
          </Grid2>
        </Grid2>

        <Toolbar />
      </Container>
    </BgBubble>
  );
}
