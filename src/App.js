import React, { useState, useRef } from "react";
// Styles
import "./style/App.scss";
// Components
import Nav from "./components/Nav";
import Song from "./components/Song";
import Player from "./components/Player";
import Playlist from "./components/Playlist";
// Data
import musicData from "./data";

function App() {
  const [songs, setSongs] = useState(musicData());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [songInfo, setSongInfo] = useState({ duration: 0, currentTime: 0 });
  const [playlistStatus, setPlaylistStatus] = useState(false);
  const [isRepeat, setIsRepeat] = useState(false);
  const [isShuffle, setIsShuffle] = useState(false);

  const audioRef = useRef(null);

  return (
    <div className="App">
      <Nav
        playlistStatus={playlistStatus}
        setPlaylistStatus={setPlaylistStatus}
      />
      <Song currentSong={currentSong} isPlaying={isPlaying} />
      <Player
        audioRef={audioRef}
        songs={songs}
        setSongs={setSongs}
        currentSong={currentSong}
        setCurrentSong={setCurrentSong}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        songInfo={songInfo}
        setSongInfo={setSongInfo}
        isRepeat={isRepeat}
        setIsRepeat={setIsRepeat}
        isShuffle={isShuffle}
        setIsShuffle={setIsShuffle}
      />

      <Playlist
        songs={songs}
        currentSong={currentSong}
        setCurrentSong={setCurrentSong}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        audioRef={audioRef}
        playlistStatus={playlistStatus}
      />
    </div>
  );
}

export default App;
