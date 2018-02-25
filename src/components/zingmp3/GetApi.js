import React, { PropTypes } from "react";

import { connect } from "react-redux";
import { browserHistory } from "react-router";
import { Link } from "react-router";
import SearchInput, { createFilter } from "react-search-input";
const KEYS_TO_FILTERS = ["title"];
class GetApi extends React.Component {
  constructor(props) {
    super(props);
    this.state = { searchTerm: "" };
    this.searchUpdated = this.searchUpdated.bind(this);
  }
  searchUpdated(term) {
    this.setState({ searchTerm: term+"" });
  }
  // SearchSong(event) {
  //   console.log(event.target.value);
  //   console.log("--------SOng data state--------");
  //   console.log(this.state.songdata);
  //   let songFitler = this.state.songdata.filter(
  //     s => s.title == event.target.value
  //   );
  //   this.setState({ songdata: songFitler });
  //   console.log(songFitler);
  // }

  render() {
    let SongsArray = this.props.Songs;
   const filteredEmails = SongsArray.filter(createFilter(this.state.searchTerm, KEYS_TO_FILTERS));

    let songs = filteredEmails.map(item => {
      return <li key={item._id}>
          <Link to={"/getapi/" + item._id}>
            <img src={item.thumb} />
          </Link>
          <span>
            <Link to={"/getapi/" + item._id}>{item.title}</Link>
          </span>
        </li>;
    });
    console.log(songs);
   if (songs.length == 0) {
     songs ="NO SONGS";
   }

    return <div className="containerListSong">
        <SearchInput className="search-input" onChange={this.searchUpdated} />

        <ul>
          {songs}
        </ul>
      </div>;
  }
}


function mapStateToProps(state, ownProps) {
  return { Songs: state.Songs, test: state.courses };
}


export default connect(mapStateToProps)(GetApi);

