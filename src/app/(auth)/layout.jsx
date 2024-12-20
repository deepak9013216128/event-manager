import BackgroundImage from "@/components/images/background";
import { Grid2, Box } from "@mui/material";
import Image from "next/image";

export default function AuthLayout({ children }) {
  return (
    <Grid2 container justifyContent={"center"} minHeight={"100vh"}>
      <Grid2 size={{ xs: 12, md: 6 }} p={1}>
        <BackgroundImage src={"/bg-circle.png"} width="100%">
          <Box
            height={"100%"}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            {children}
          </Box>
        </BackgroundImage>
      </Grid2>
      <Grid2 size={{ xs: 0, md: 6 }}>
        <Box
          position="sticky"
          display={{ xs: "none", md: "inherit" }}
          top={0}
          height="100vh"
          width="100%"
        >
          <Image
            alt="sign-up-image"
            src="/bg1.png"
            fill
            priority
            sizes="(min-width: 601px) 50vw"
            quality={100}
          />
        </Box>
      </Grid2>
    </Grid2>
  );
}
