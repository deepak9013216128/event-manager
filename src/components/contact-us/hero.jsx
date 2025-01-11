"use client";

import CardImage from "@/components/images";
import BgBubble from "@/components/images/bubble";
import {
  x,
  Container,
  Grid2,
  Toolbar,
  Typography,
  Paper,
  Box,
} from "@mui/material";
import BackgroundImage from "../images/background";
import EmailIcon from "@mui/icons-material/Email";
import CallIcon from "@mui/icons-material/Call";
import NearMeIcon from "@mui/icons-material/NearMe";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";

function Text({ Icon, text }) {
  return (
    <Typography
      variant="body1"
      gutterBottom
      display={"flex"}
      alignItems={"center"}
    >
      <Icon sx={{ mr: 1 }} /> {text}
    </Typography>
  );
}

export default async function ContactHero() {
  return (
    <>
      <BackgroundImage src={"/contact-hero.png"} height="60vh">
        <Container>
          <Grid2 container pt={10}>
            <Grid2 size={{ xs: 12, md: 6, lg: 5, xl: 4 }}>
              <Paper sx={{ bgcolor: "primary.main", p: 2, borderRadius: 4 }}>
                <Typography variant="h3" component={"h1"} textAlign={"center"}>
                  CONTACT US
                </Typography>
                <Toolbar disableGutters />
                <Text Icon={EmailIcon} text={"info@example.com"} />
                <Text Icon={CallIcon} text={"001985512-854"} />
                <Text
                  Icon={NearMeIcon}
                  text={
                    "John Smith 123 Main Street Amsterdam, NH 1000 Netherlands"
                  }
                />
                <Box p={2}></Box>
                <Typography variant="h5" component={"h1"} textAlign={"center"}>
                  Social
                </Typography>
                <Box p={2}></Box>
                <Text Icon={TwitterIcon} text={"@exampleAcount"} />
                <Text Icon={FacebookOutlinedIcon} text={"@exampleAcount"} />
                <Text Icon={YouTubeIcon} text={"@exampleAcount"} />
                <Text Icon={InstagramIcon} text={"@exampleAcount"} />
              </Paper>
            </Grid2>
          </Grid2>
        </Container>
      </BackgroundImage>
    </>
  );
}
