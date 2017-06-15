import React, { PropTypes } from 'react';

import Logo from './Logo';
import Avatar from './Avatar';
import '../styles/header.scss';

class Header extends React.Component {

  render(){
    return (
    <div className="header-nitrogen">
      <div className="logo-nitrogen">
        <Logo />
      </div>
      <div className="text">
        <h1 >NITRO-GEN</h1>
      </div> 
        <Avatar />
    </div>
  );
  }
  
};

Header.defaultProps = {

};

Header.propTypes = {

};

export default Header;
