import { Box } from "@mui/material";
import { getImageProps } from "next/image";

function getBackgroundImage(srcSet = "") {
  const imageSet = srcSet
    .split(", ")
    .map((str) => {
      const [url, dpi] = str.split(" ");
      return `url("${url}") ${dpi}`;
    })
    .join(", ");
  return `image-set(${imageSet})`;
}

export default function BackgroundImage({
  src,
  children,
  height = "100vh",
  width = "100vw",
}) {
  const {
    props: { srcSet },
  } = getImageProps({
    alt: "",
    width: 520,
    height: 520,
    src: src ?? "/assets/images/about/about-landing.jpg",
    // quality: 100,
  });
  const backgroundImage = getBackgroundImage(srcSet);
  const style = {
    height,
    width,
    backgroundImage,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };

  return <Box style={style}>{children}</Box>;
}
