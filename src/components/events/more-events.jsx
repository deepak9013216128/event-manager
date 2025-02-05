import { Container, Grid2, Toolbar, Typography } from "@mui/material";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import { ArrowForwardIosRounded } from "@mui/icons-material";

import CardImage from "../images";

function MediaCard() {
  return (
    <Card
      elevation={0}
      sx={{ maxWidth: 345, m: "auto", borderRadius: "12px 12px 4px 4px" }}
    >
      {/* <CardMedia sx={{ height: 140 }} image="/bg1.png" title="green iguana" /> */}
      <CardImage src={"/bg1.png"} paddingBottom={"60%"} />
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          color="textSecondary"
          textAlign={"center"}
        >
          Health Checkup
        </Typography>
      </CardContent>
    </Card>
  );
}
export default async function MoreEvents() {
  const events = [
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
    { id: 5 },
    { id: 6 },
  ];
  return (
    <Container>
      <Toolbar />
      <Typography
        component={"h2"}
        variant="h3"
        textAlign={"center"}
        fontFamily={"play"}
      >
        Explore More Events!
      </Typography>
      <Toolbar />
      <Grid2 container spacing={5}>
        {events.map((evt) => (
          <Grid2 size={{ xs: 12, md: 4 }} key={evt.id}>
            <MediaCard item={evt} />
          </Grid2>
        ))}
      </Grid2>
      <Toolbar />
    </Container>
  );
}
