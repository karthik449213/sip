// components/GifAd.tsx
import React from "react";

type GifAdProps = {
  gifSrc: string;           // URL or path to your GIF
  link: string;             // Affiliate or target link
  altText?: string;         // Alt text for accessibility
  width?: number | string;  // Optional width
  height?: number | string; // Optional height
};

const GifAd: React.FC<GifAdProps> = ({
  gifSrc,
  link,
  altText = "Advertisement",
  width = 300,
  height = "auto",
}) => {
  return (
    <a href={link} target="_blank" rel="nofollow noreferrer">
      <img
        src={gifSrc}
        alt={altText}
        style={{ width, height, display: "block", margin: "0 auto" }}
      />
    </a>
  );
};

export default GifAd;
