import BgBubble from "@/components/images/bubble";
import {
  x,
  Container,
  Grid2,
  Toolbar,
  Typography,
  Button,
} from "@mui/material";
import Search from "../form/search";

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
        <Typography
          component={"h1"}
          variant="h1"
          fontSize={{ xs: 48, md: 48 }}
          textAlign={"center"}
        >
          Search Events!!
        </Typography>
        <Toolbar />
        <Grid2 container spacing={2}>
          <Grid2 size={{ xs: 12, md: 10 }}>
            <Search />
          </Grid2>
          <Grid2 size={{ xs: 12, md: 2 }}>
            <Button variant="contained" size="large" fullWidth>
              Submit
            </Button>
          </Grid2>
        </Grid2>

        <Toolbar />
      </Container>
    </BgBubble>
  );
}
