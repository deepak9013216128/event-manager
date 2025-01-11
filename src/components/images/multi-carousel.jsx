"use client";

import "react-multi-carousel/lib/styles.css";
import dynamic from "next/dynamic";

// const Carousel = dynamic(() => import("react-multi-carousel"), { ssr: false });

import Carousel from "react-multi-carousel";

export default async function MultiCarousel({ children }) {
  return (
    <Carousel
      swipeable={true}
      draggable={true}
      responsive={{
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3,
          slidesToSlide: 3,
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2,
          slidesToSlide: 2,
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
          slidesToSlide: 1,
        },
      }}
      infinite={true}
      autoPlay={true}
      arrows={false}
      // ssr={true}
    >
      {children}
    </Carousel>
  );
}
