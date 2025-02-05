/* 
Since the map was loaded on client side, 
we need to make this component client rendered as well else error occurs
*/
"use client";

import { Box } from "@mui/material";
//Map component Component from library
import { GoogleMap } from "@react-google-maps/api";

//Map's styling

const defaultMapCenter = {
  lat: 26.8943271,
  lng: 75.8577109,
};
const defaultMapZoom = 10;
const defaultMapOptions = {
  zoomControl: true,
  tilt: 0,
  gestureHandling: "auto",
  //   mapTypeId: "satellite",
};

const MapComponent = ({ width = null, height = null }) => {
  const defaultMapContainerStyle = {
    width: width ?? "100%",
    height: height ?? "80vh",
    borderRadius: "15px 0px 0px 15px",
  };
  return (
    <Box>
      <GoogleMap
        mapContainerStyle={defaultMapContainerStyle}
        center={defaultMapCenter}
        zoom={defaultMapZoom}
        options={defaultMapOptions}
      ></GoogleMap>
    </Box>
  );
};

export { MapComponent };
