import React, { PropTypes } from 'react';
import config from '../config.json';
import '../styles/logo.scss';

const Logo = () => {

  return (
    <a className="logo">
      <img src={config.logoSrc} />
    </a>
  );
};

Logo.defaultProps = {

};

Logo.propTypes = {

};

export default Logo;
