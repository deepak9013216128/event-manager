import {
  Avatar,
  Box,
  Container,
  Rating,
  Toolbar,
  Typography,
} from "@mui/material";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

import MultiCarousel from "../images/multi-carousel";
import BgBubble from "../images/bubble";

function TestmonialCard() {
  return (
    <Card elevation={1} sx={{ borderRadius: 4, m: 2 }}>
      <CardContent>
        <Rating
          name="half-rating"
          defaultValue={Math.random() * 3 + 2}
          precision={0.5}
        />

        <Typography gutterBottom variant="body2" color="textSecondary">
          My new travel backpack is fantastic—stylish, durable, and so
          practical! It has made my travels much easier. Excellent customer
          service from start to finish!"
        </Typography>
        <Box display={"flex"} alignItems={"center"} mt={2}>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg">
            OP
          </Avatar>
          <Box ml={2}>
            <Typography variant="subtitle1" color="textSecondary">
              Michael Brown
            </Typography>
            <Typography variant="body2" color="textSecondary">
              Web Designer
            </Typography>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
}
export default async function Testmonials() {
  const testmonials = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }];
  return (
    <BgBubble
      items={[
        {
          size: `40vw`, // Random size
          top: `-20%`, // Random position Y-axis
          left: `-20%`, // Random position X-axis
        },
      ]}
    >
      <Container>
        <Toolbar />
        <Typography
          component={"h2"}
          variant="h3"
          fontFamily={"play"}
          gutterBottom
        >
          What our clients say
        </Typography>
        <Typography variant="subtitle1">
          Discover why our clients choose us for reliability, craftsmanship, and
          impeccable service.
        </Typography>
        <Toolbar />

        <MultiCarousel>
          {testmonials.map((testmonial) => (
            <TestmonialCard key={testmonial.id} item={testmonial} />
          ))}
        </MultiCarousel>

        <Toolbar />
      </Container>
    </BgBubble>
  );
}
