import React from "react";

// Import Component
import PlaylistSong from "./PlaylistSong";

const Playlist = ({
  songs,
  currentSong,
  setCurrentSong,
  isPlaying,
  setIsPlaying,
  audioRef,
  playlistStatus,
}) => {
  return (
    <div
      className={`playlist-container ${
        playlistStatus ? "active-playlist" : ""
      }`}
    >
      <h2>Playlist</h2>
      {songs.map((song) => {
        return (
          <PlaylistSong
            song={song}
            currentSong={currentSong}
            key={song.id}
            setCurrentSong={setCurrentSong}
            isPlaying={isPlaying}
            setIsPlaying={setIsPlaying}
            audioRef={audioRef}
          />
        );
      })}
    </div>
  );
};

export default Playlist;
