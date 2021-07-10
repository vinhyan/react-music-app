import React from "react";

const PlaylistSong = ({
  song,
  currentSong,
  isPlaying,
  setIsPlaying,
  setCurrentSong,
  audioRef,
}) => {
  // Event Handler
  const clickSongHandler = async () => {
    await setCurrentSong(song);

    if (!isPlaying) {
      setIsPlaying(true);
    }

    audioRef.current.play();

  };

  return (
    <div
      onClick={clickSongHandler}
      className={`playlist-song-container ${
        song.id === currentSong.id ? "selected-song" : ""
      }`}
    >
      <img src={song.cover} alt={song.name} />
      <div className="playlist-song-info">
        <h3 className="playlist-song-name">{song.name}</h3>
        <h4 className="playlist-song-artist">{song.artist}</h4>
      </div>
    </div>
  );
};

export default PlaylistSong;
