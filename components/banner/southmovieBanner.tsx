"use client"; // Mark this as a Client Component

import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { southmovieData } from "./BannerData";
import { useRouter } from "next/navigation"; // Import from next/navigation

// Prevent dragging images
const handleDragStart = (e: React.DragEvent<HTMLImageElement>) => e.preventDefault();

export const SouthBannerCarousel: React.FC = () => {
  const router = useRouter();

  // Map over the carousel data and create carousel items
  const items = southmovieData.map((item) => (
    <img
      key={item.path}
      className="cursor-pointer rounded-2xl drop-shadow-lg shadow-lg"
      onClick={() => router.push(item.path)} // Navigate to the path on click
      src={item.image}
      alt={item.title || "banner image"} // Provide an alt attribute for accessibility
      onDragStart={handleDragStart} // Prevent dragging of the image
      role="presentation"
    />
  ));

  return (
    <div className="w-[98%] mx-auto">
      <AliceCarousel
        mouseTracking
        items={items} // Pass the items to the carousel
        autoPlay
        infinite
        autoPlayInterval={2000}
        disableButtonsControls
      />
    </div>
  );
};
