import React, { PropTypes } from 'react';
import config from '../config.json';
import '../styles/footer.scss';

const Footer = () => {

  return (
    <div className="footer-nitrogen">
        <span className="left">
            <a href="#">Help</a>
            <a href="#">Privacy</a>
            <a href="#">Terms of service</a>
            <a href="#">About us</a>
        </span>
        <span className="right">
            <p>Copyright © 1996-2009</p>
        </span>
    </div>
  );
};

Footer.defaultProps = {

};

Footer.propTypes = {

};

export default Footer;
