import React from "react";

const Song = ({ currentSong, isPlaying }) => {

  return (
    <div className="song-container">
      <div className="cover-wrap">
        <img
          src={currentSong.cover}
          alt={currentSong.name}
          className={isPlaying ? "cover-active" : ""}
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
