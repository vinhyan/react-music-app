import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisH } from "@fortawesome/free-solid-svg-icons";

const Nav = ({ playlistStatus, setPlaylistStatus }) => {
    //Event Handler
    const playlistHandler = () => {
        setPlaylistStatus(!playlistStatus)
    }
  return (
    <nav>
      <h1>Frequency</h1>
      <button onClick={playlistHandler}>
        <FontAwesomeIcon icon={faEllipsisH} size="2x" />
      </button>
    </nav>
  );
};

export default Nav;
