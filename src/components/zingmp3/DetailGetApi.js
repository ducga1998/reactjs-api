import React, { PropTypes } from "react";

import { connect } from "react-redux";
import { browserHistory } from "react-router";
import Audio from "../common/Audio";


class DetailGetApi extends React.Component {
  constructor() {
    super();


  }
  render() {
    console.log(this.props.song);
    let song=this.props.song;

    return <div>
        <div className="titleSong">
          {" "}
          <h1>Song Name:{song.title}</h1>
        </div>
        <div className="artists">
          <h2>{"Artists:" + song.artists}</h2>
        </div>
        <div className="thumbmail">
          <img src={song.thumb} className="img" />
        </div>
        <div className="audioWrap">
          {" "}
          <Audio stream={song.link} />
        </div>
      </div>;
  }
}


function getSongById(Songs, id) {
  const song = Songs.filter(s => s._id == id);
  if (song) return song[0]; //since filter returns an array, have to grab the first.
  return null;
}
function mapStateToProps(state, ownProps) {
  const songId = ownProps.params.id; // from the path `/course/:id`
  console.log(songId);
  let song = {  };
  // trong api có nhiều hơn 0 khóa học
  if (songId && state.Songs.length > 0) {
    song = getSongById(state.Songs, songId);
  }

  return { song: song };
}



export default connect(mapStateToProps)(DetailGetApi);
