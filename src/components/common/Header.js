import React, {PropTypes} from 'react';
import {Link, IndexLink} from 'react-router';
import LoadingDots from './LoadingDots';
import Modal from "../common/Modal";

const Header = ({loading}) => {
  return <nav className="navbar navbar-inverse">
      <ul className="nav navbar-nav">
        <li>
          {" "}
          <IndexLink to="/" activeClassName="active">
            Home
          </IndexLink>
        </li>

        <li>
          {" "}
          <Link to="/getapi" activeClassName="active">
            API MP3
          </Link>
        </li>
      </ul>
      {loading && <LoadingDots interval={100} dots={20} />}
    </nav>;


};

Header.propTypes = {
  loading: PropTypes.bool.isRequired
};

export default Header;
