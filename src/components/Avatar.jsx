import React, { PropTypes } from 'react';
import Image from './Image';
import config from '../config.json';
import '../styles/avatar.scss';

const Avatar = () => {

  return (
      <div className="avatar" >
          <Image src={config.avatarSrc} className={"avatar-nitrogen"}/>
      </div>
  );
};

Avatar.defaultProps = {

};

Avatar.propTypes = {

};

export default Avatar;
