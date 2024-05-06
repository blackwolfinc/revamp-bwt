import React, { useState, useEffect } from "react";

function AudioPlayer({ isPlaying, page }:any) {
  const [audioSrc, setAudioSrc] = useState("");

  useEffect(() => {
    if (isPlaying) {
      if (page !== "clients") {
        setAudioSrc("/assets/mp4/backsound.mp4");
      } else {
        setAudioSrc("/assets/mp4/backsongGame.mp4");
      }
    }
  }, [isPlaying, page]);

  return (
    <>
      {isPlaying && (
        <audio autoPlay preload="auto" loop>
          <source src={audioSrc} type="audio/mp4" />
          Your browser does not support the audio tag.
        </audio>
      )}
    </>
  );
}


export default AudioPlayer
