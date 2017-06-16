import React, { PropTypes } from 'react';
import config from '../config.json';
import '../styles/navigation.scss';

const Navigation = () => {

  return (
    <div className="navigation-nitrogen">
        <span className="right">
            <a href="#">Home</a>
            <a href="#">Gallery</a>
            <a href="#">Articles</a>
            <a href="#">Videos</a>
        </span>
        
    </div>
  );
};

Navigation.defaultProps = {

};

Navigation.propTypes = {

};

export default Navigation;
