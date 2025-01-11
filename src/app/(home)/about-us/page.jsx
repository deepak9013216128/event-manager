import CardImage from "@/components/images";
import BgBubble from "@/components/images/bubble";
import { Container, Grid2, Toolbar, Typography } from "@mui/material";

export const dynamic = "force-dynamic";

export default async function AboutPage() {
  return (
    <main>
      <BgBubble
        items={[
          {
            size: `45vw`, // Random size
            top: `-10%`, // Random position Y-axis
            left: `65%`, // Random position X-axis
          },
          {
            size: `45vw`, // Random size
            top: `40%`, // Random position Y-axis
            left: `-20%`, // Random position X-axis
          },
        ]}
      >
        <Toolbar />
        <Container>
          <Grid2 container spacing={4} justifyContent={"space-between"}>
            <Grid2 size={{ xs: 12, md: 5 }}>
              <CardImage src={"/explore1.png"} paddingBottom={"138%"} />
            </Grid2>
            <Grid2 size={{ xs: 12, md: 6 }}>
              <Typography
                variant="h4"
                component={"h2"}
                fontWeight={700}
                color="primary.main"
                gutterBottom
              >
                THE TEAMS
              </Typography>
              <Typography gutterBottom variant="body1">
                1: Sara Peter is one of our talented and experienced makeup
                artists. She has been working in the beauty industry for over 10
                years and has a passion for creating stunning looks for
                different occasions. She specializes in bridal, glam, and
                natural makeup styles. She also loves to teach and share her
                tips and tricks with our viewers.
              </Typography>
              <Typography gutterBottom variant="body1">
                2: Lisa Chen is our amazing and creative content writer. She has
                a degree in journalism and a flair for writing engaging and
                informative articles. She covers topics such as makeup trends,
                product reviews, celebrity news, and more. She also edits and
                proofreads our content to ensure quality and accuracy. You can
                read her articles on our website and get inspired by her
                insights. Lisa Chen is a key member of our team and we
                appreciate her work.
              </Typography>
              <Typography gutterBottom variant="body1">
                3: Maria Garcia is our wonderful and friendly community manager.
                She has a background in social media and customer service and a
                love for makeup and beauty. She manages our online platforms and
                interacts with our users. She answers questions, provides
                feedback, organizes contests, and hosts events. She also creates
                and posts original and fun content to keep our community engaged
                and entertained.{" "}
              </Typography>
            </Grid2>
            <Grid2 size={{ xs: 12, md: 6 }}>
              <Typography
                variant="h4"
                component={"h2"}
                fontWeight={700}
                color="primary.main"
                gutterBottom
              >
                Our Services
              </Typography>
              <Typography gutterBottom variant="body1">
                1: Sara Peter is one of our talented and experienced makeup
                artists. She has been working in the beauty industry for over 10
                years and has a passion for creating stunning looks for
                different occasions. She specializes in bridal, glam, and
                natural makeup styles. She also loves to teach and share her
                tips and tricks with our viewers.
              </Typography>
              <Typography gutterBottom variant="body1">
                2: Lisa Chen is our amazing and creative content writer. She has
                a degree in journalism and a flair for writing engaging and
                informative articles. She covers topics such as makeup trends,
                product reviews, celebrity news, and more. She also edits and
                proofreads our content to ensure quality and accuracy. You can
                read her articles on our website and get inspired by her
                insights. Lisa Chen is a key member of our team and we
                appreciate her work.
              </Typography>
              <Typography gutterBottom variant="body1">
                3: Maria Garcia is our wonderful and friendly community manager.
                She has a background in social media and customer service and a
                love for makeup and beauty. She manages our online platforms and
                interacts with our users. She answers questions, provides
                feedback, organizes contests, and hosts events. She also creates
                and posts original and fun content to keep our community engaged
                and entertained.{" "}
              </Typography>
            </Grid2>{" "}
            <Grid2 size={{ xs: 12, md: 5 }}>
              <CardImage src={"/explore1.png"} paddingBottom={"138%"} />
            </Grid2>
          </Grid2>
        </Container>
        <Toolbar />
        <Toolbar />
      </BgBubble>
    </main>
  );
}
