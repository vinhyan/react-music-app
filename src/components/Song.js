import React from "react";

const Song = ({ currentSong, isPlaying }) => {
  // Cover image animation
  const coverActive = {
    animation: "circle 20s linear infinite",
  };

  return (
    <div className="song-container">
      <div className="cover-wrap">
        <img
          src={currentSong.cover}
          alt={currentSong.name}
          style={isPlaying ? coverActive : {}}
        />
        <div className="cover-core"></div>
      </div>
      <div className="song-info">
        <h2 className="song-name">{currentSong.name}</h2>
        <h3 className="song-artist">{currentSong.artist}</h3>
      </div>
    </div>
  );
};

export default Song;
