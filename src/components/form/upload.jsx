import React, { useState } from "react";
import Image from "next/image";
import { Box, Button, IconButton } from "@mui/material";
import { styled } from "@mui/material/styles";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import CancelIcon from "@mui/icons-material/Cancel";

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

export default function Upload() {
  const [previews, setPreviews] = useState([]);

  const handleFileChange = (event) => {
    const files = event.target.files;
    if (files) {
      const filePreviews = Array.from(files).map((file) => ({
        name: file.name,
        url: URL.createObjectURL(file),
      }));
      setPreviews((prev) => [...prev, ...filePreviews]);
    }
  };

  const handleRemovePreview = (index) => {
    setPreviews((prev) => {
      const updatedPreviews = [...prev];
      URL.revokeObjectURL(updatedPreviews[index].url);
      updatedPreviews.splice(index, 1);
      return updatedPreviews;
    });
  };

  return (
    <Box>
      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2, marginTop: 2 }}>
        {previews.map((preview, index) => (
          <Box
            key={index}
            sx={{
              position: "relative",
              width: 100,
              height: 100,
              borderRadius: 2,
              overflow: "hidden",
              boxShadow: 2,
            }}
          >
            <Image
              src={preview.url}
              alt={preview.name}
              layout="fill"
              objectFit="cover"
            />
            <IconButton
              size="small"
              sx={{
                position: "absolute",
                top: 4,
                right: 4,
                backgroundColor: "rgba(255, 255, 255, 0.8)",
              }}
              onClick={() => handleRemovePreview(index)}
            >
              <CancelIcon fontSize="small" />
            </IconButton>
          </Box>
        ))}
      </Box>
      <Button
        variant="contained"
        component="label"
        startIcon={<CloudUploadIcon />}
      >
        Upload Files
        <VisuallyHiddenInput type="file" onChange={handleFileChange} multiple />
      </Button>
    </Box>
  );
}