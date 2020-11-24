import React from 'react';
import bgVideo from '../assets/inspirational-clouds-video.mp4';

function BackgroundVideo() {
  return (
    <video autoPlay={true} muted={true} loop id='bg-video'>
      <source src={bgVideo} />
    </video>
  );
}

export default BackgroundVideo;
