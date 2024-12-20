"use client";
import { Box } from "@mui/material";
import { styled } from "@mui/material";

const Bubble = styled(Box)(({ size, top, left }) => ({
  width: size ?? 640,
  height: size ?? 640,
  borderRadius: "50%",
  background:
    "radial-gradient(circle, rgba(21, 192, 244, 0.2), rgba(21, 192, 244, 0.2))",
  filter: "blur(60px)",
  position: "absolute",
  zIndex: -1,
}));

// Create styled components for the background
const BackgroundContainer = styled(Box)(({ theme }) => ({
  position: "relative",
}));

const BgBubble = ({ children }) => {
  // Randomized bubbles
  const bubbles = [
    {
      size: `50vw`, // Random size
      top: `-50%`, // Random position Y-axis
      left: `60%`, // Random position X-axis
    },
    {
      size: `50vw`, // Random size
      top: `60%`, // Random position Y-axis
      left: `-50%`, // Random position X-axis
    },
  ];

  return (
    <BackgroundContainer>
      {children}
      {/* Render Bubbles */}
      {bubbles.map((bubble, index) => (
        <Bubble
          key={index}
          size={bubble.size}
          top={bubble.top}
          left={bubble.left}
        />
      ))}
    </BackgroundContainer>
  );
};

export default BgBubble;
