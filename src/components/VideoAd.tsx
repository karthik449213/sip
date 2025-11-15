import React from "react";

type VideoAdProps = {
  videoSrc: string;           // URL or path to your video
  link: string;               // Affiliate or target link
  altText?: string;           // Alt text for accessibility
  width?: number | string;    // Optional width
  height?: number | string;   // Optional height
  controls?: boolean;         // Show video controls
  autoplay?: boolean;         // Autoplay video
  muted?: boolean;            // Mute video for autoplay
  loop?: boolean;             // Loop video
};

const VideoAd: React.FC<VideoAdProps> = ({
  videoSrc,
  link,
  altText = "Video Advertisement",
  width = 300,
  height = "auto",
  controls = false,
  autoplay = true,
  muted = true,
  loop = true,
}) => {
  return (
    <a href={link} target="_blank" rel="nofollow noreferrer">
      <video
        src={videoSrc}
        style={{ width, height, display: "block", margin: "0 auto" }}
        controls={controls}
        autoPlay={autoplay}
        muted={muted}
        loop={loop}
        playsInline
        aria-label={altText}
      />
    </a>
  );
};

export default VideoAd;
