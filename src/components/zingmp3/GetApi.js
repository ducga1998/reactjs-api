import React, { PropTypes } from "react";

import { connect } from "react-redux";
import { browserHistory } from "react-router";
import { Link } from "react-router";

class GetApi extends React.Component {
  constructor() {
    super();

  }


  //endwillCompoment

  render() {
     console.log(this.props.Songs);
     let songs = this.props.Songs.map(item => {
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

    return <div className="containerListSong">
        <ul>{songs}</ul>
      </div>;
  }
}


function mapStateToProps(state, ownProps) {
  return { Songs: state.Songs, test: state.courses };
}


export default connect(mapStateToProps)(GetApi);

