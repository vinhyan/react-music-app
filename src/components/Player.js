import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faPause,
  faAngleDoubleRight,
  faAngleDoubleLeft,
  faRedoAlt,
  faRandom,
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
  isRepeat,
  setIsRepeat,
  isShuffle,
  setIsShuffle,
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

  const playModeHandler = (playMode) => {
    if (playMode === "repeat") {
      setIsRepeat(!isRepeat);
      if (isShuffle) setIsShuffle(false);
    } else if (playMode === "shuffle") {
      setIsShuffle(!isShuffle);
      if (isRepeat) setIsRepeat(false);
    }
  };

  const onEndedHandler = async () => {
    if (isRepeat) {
      await setCurrentSong(currentSong);
      audioRef.current.play();
    } else if (isShuffle) {
      const randomSong = songs[Math.floor(Math.random() * songs.length)];
      await setCurrentSong(randomSong);
      audioRef.current.play();
    } else {
      skip("forward");
    }
  };

  // Skip song function
  const skip = async (skipType) => {
    const currentIndex = songs.indexOf(currentSong);

    let skippedSong;

    if (skipType === "forward") {
      skippedSong = songs[(currentIndex + 1) % songs.length];
    } else if (skipType === "backward") {
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

  // Track styling
  const trackPercent = Math.round((songInfo.currentTime / songInfo.duration) * 100);
  console.log(trackPercent)
  const trackStyling = {
    background: `linear-gradient(90deg, #d100d1 ${trackPercent}%, rgb(235, 235, 255) ${trackPercent}%)`,
  };

  return (
    <div className="player-container">
      <div className="time-control">
        <p>{timeConverter(songInfo.currentTime)}</p>
        <div style={trackStyling} className="track">
          <input
            min={0}
            max={songInfo.duration || 0}
            value={songInfo.currentTime}
            onChange={changeSongTimeHandler}
            type="range"
          />
          <div className="animate-track"></div>
        </div>
        <p>{songInfo.duration ? timeConverter(songInfo.duration) : "0:00"}</p>
      </div>
      <div className="play-control">
        <FontAwesomeIcon

          icon={faRedoAlt}
          onClick={() => playModeHandler("repeat")}
          className={isRepeat ? "active-playmode" : ""}
        />
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
        <FontAwesomeIcon
          icon={faRandom}
          onClick={() => playModeHandler("shuffle")}
          className={isShuffle ? "active-playmode" : ""}
        />
      </div>
      <audio
        onTimeUpdate={timeUpdateHandler}
        onLoadedMetadata={timeUpdateHandler}
        ref={audioRef}
        src={currentSong.audio}
        onEnded={onEndedHandler}
      ></audio>
    </div>
  );
};

export default Player;
