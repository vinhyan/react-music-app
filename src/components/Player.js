import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faPause,
  faAngleDoubleRight,
  faAngleDoubleLeft,
} from "@fortawesome/free-solid-svg-icons";

const Player = ({
  songs,
  currentSong,
  setCurrentSong,
  isPlaying,
  setIsPlaying,
  songInfo,
  setSongInfo,
  audioRef,
}) => {
  // Event Handlers
  const playHandler = () => {
    isPlaying ? audioRef.current.pause() : audioRef.current.play();
    setIsPlaying(!isPlaying);
  };

  const timeUpdateHandler = (e) => {
    const currentTime = e.target.currentTime;
    const duration = e.target.duration;
    setSongInfo({ ...songInfo, duration, currentTime });
  };

  const changeSongTimeHandler = (e) => {
    audioRef.current.currentTime = e.target.value;
    setSongInfo({ ...songInfo, currentTime: e.target.value });
  };

  const skip = async (type) => {
    const currentIndex = songs.indexOf(currentSong);

    let skippedSong;

    if (type === "forward") {
      skippedSong = songs[(currentIndex + 1) % songs.length];
    } else if (type === "backward") {
      if ((currentIndex - 1) % songs.length === -1) {
        skippedSong = songs[songs.length - 1];
      } else {
        skippedSong = songs[(currentIndex - 1) % songs.length];
      }
    }

    await setCurrentSong(skippedSong);

    if (!isPlaying) {
      setIsPlaying(true);
    }

    audioRef.current.play();
  };

  // Song time converter
  const timeConverter = (time) => {
    return (
      Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
    );
  };

  return (
    <div className="player-container">
      <div className="time-control">
        <p>{timeConverter(songInfo.currentTime)}</p>
        <input
          min={0}
          max={songInfo.duration || 0}
          value={songInfo.currentTime}
          onChange={changeSongTimeHandler}
          type="range"
        />
        <p>{songInfo.duration ? timeConverter(songInfo.duration) : "0:00"}</p>
      </div>
      <div className="play-control">
        <FontAwesomeIcon
          onClick={() => skip("backward")}
          className="backward"
          size="2x"
          icon={faAngleDoubleLeft}
        />
        <FontAwesomeIcon
          onClick={playHandler}
          className="play"
          size="3x"
          icon={isPlaying ? faPause : faPlay}
        />
        <FontAwesomeIcon
          onClick={() => skip("forward")}
          className="forward"
          size="2x"
          icon={faAngleDoubleRight}
        />
      </div>
      <audio
        onTimeUpdate={timeUpdateHandler}
        onLoadedMetadata={timeUpdateHandler}
        ref={audioRef}
        src={currentSong.audio}
        onEnded={() => skip("forward")}
      ></audio>
    </div>
  );
};

export default Player;
