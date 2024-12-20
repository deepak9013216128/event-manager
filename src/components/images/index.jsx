import { Box } from "@mui/material";
import Image from "next/image";

export default function CardImage({
  src,
  paddingBottom,
  sx,
  imgStyle,
  priority = false,
  ...props
}) {
  return (
    <Box
      mx={1}
      position="relative"
      height="0"
      pb={paddingBottom}
      sx={sx}
      {...props}
    >
      <Image
        fill
        priority={priority}
        style={imgStyle}
        src={src}
        alt={src}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
    </Box>
  );
}
