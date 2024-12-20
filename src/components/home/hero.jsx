import CardImage from "@/components/images";
import BgBubble from "@/components/images/bubble";
import { x, Container, Grid2, Toolbar, Typography } from "@mui/material";

export default async function Hero() {
  return (
    <Container>
      <Toolbar />
      <Typography component={"h1"} variant="h1" textAlign={"center"}>
        Find Your Interest Nearby!{" "}
      </Typography>
      <Toolbar />
      <BgBubble src="/bg-circle-dark.png">
        <Grid2 container spacing={2}>
          <Grid2 size={6}>
            <CardImage src={"/hero.png"} paddingBottom={"82%"} />
          </Grid2>
          <Grid2 size={6}>
            <CardImage src={"/hero.png"} paddingBottom={"82%"} />
          </Grid2>
        </Grid2>
      </BgBubble>{" "}
      <Toolbar />
    </Container>
  );
}
