import { Container, Grid2, Toolbar, Typography } from "@mui/material";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import { ArrowForwardIosRounded } from "@mui/icons-material";

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
      </CardContent>
      <CardActions sx={{ display: "flex", justifyContent: "center" }}>
        <Button
          //   size="small"
          variant="contained"
          color="secondary"
          sx={{ borderRadius: 5 }}
          endIcon={<ArrowForwardIosRounded />}
        >
          Share Interest
        </Button>
      </CardActions>
    </Card>
  );
}

export default async function Offering() {
  const offerings = [{ id: 1 }, { id: 2 }, { id: 3 }];
  return (
    <Container>
      <Toolbar />
      <Typography
        component={"h2"}
        variant="h3"
        textAlign={"center"}
        fontFamily={"play"}
      >
        What are we offering
      </Typography>
      <Typography variant="subtitle1" textAlign={"center"}>
        Unbreakable connections and lasting memories. Join us for the perfect
        blend of fun.
      </Typography>
      <Toolbar />
      <Grid2 container spacing={2}>
        {offerings.map((o) => (
          <Grid2 size={{ xs: 12, md: 4 }} key={o.id}>
            <MediaCard item={o} />
          </Grid2>
        ))}
      </Grid2>
      <Toolbar />
    </Container>
  );
}
