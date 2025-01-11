import { Container, Grid2, Toolbar, Typography } from "@mui/material";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import { ArrowForwardIosRounded } from "@mui/icons-material";

import Search from "../form/search";
import BasicSelect from "../form/select";

function MediaCard() {
  return (
    <Card
      elevation={0}
      sx={{ maxWidth: 345, m: "auto", borderRadius: "12px 12px 4px 4px" }}
    >
      <CardMedia sx={{ height: 140 }} image="/bg1.png" title="green iguana" />
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          color="textSecondary"
          textAlign={"center"}
        >
          Health Checkup
        </Typography>
        <Typography
          gutterBottom
          variant="body2"
          color="textSecondary"
          textAlign={"center"}
        >
          Experience a good one week work trip as you work from a new city.
        </Typography>
        <Typography
          gutterBottom
          variant="subtitle1"
          color="textSecondary"
          textAlign={"center"}
          fontWeight={"bold"}
        >
          Live
        </Typography>
      </CardContent>
      <CardActions sx={{ display: "flex", justifyContent: "center" }}>
        <Button
          //   size="small"
          href="/login"
          variant="contained"
          color="secondary"
          sx={{ borderRadius: 5 }}
          endIcon={<ArrowForwardIosRounded />}
        >
          Join
        </Button>
      </CardActions>
    </Card>
  );
}
export default async function LiveEvents() {
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
        Search here for Live Events!
      </Typography>
      <Toolbar />
      <Grid2 container spacing={5}>
        <Grid2 size={{ xs: 12, md: 10 }}>
          <Search />
        </Grid2>
        <Grid2 size={{ xs: 12, md: 2 }}>
          <BasicSelect />
        </Grid2>
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
