import React, { PropTypes } from 'react';
import Image from './Image';
import config from '../config.json';
import '../styles/logo.scss';

const Logo = () => {

  return (
    <a className="logo">
      <Image src={config.logoSrc} className={"logo-nitrogen"}/>
    </a>
  );
};

Logo.defaultProps = {

};

Logo.propTypes = {

};

export default Logo;
