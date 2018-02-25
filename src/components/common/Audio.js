import React, { PropTypes } from "react";

const Audio = ({stream}) => {
  return <div>
      <div class="audio-player">

        <audio width="300" height="32" controls data-html5-video autoPlay src={stream} id="audio-player" preload="none" />
      </div>
    </div>;
};

export default Audio;
