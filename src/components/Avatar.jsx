import React, { PropTypes } from 'react';
import config from '../config.json';
import '../styles/avatar.scss';

const Avatar = () => {

  return (
      <div className="avatar" >
          <img src={config.avatarSrc} />
      </div>
  );
};

Avatar.defaultProps = {

};

Avatar.propTypes = {

};

export default Avatar;
