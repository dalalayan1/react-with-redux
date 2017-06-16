import React, { PropTypes } from 'react';
import Image from './Image';
import config from '../config.json';
import '../styles/full-screen-image.scss';

class FullScreenImage extends React.Component {

  constructor(props){
    super(props);
    this.toggleImage = this.toggleImage.bind(this);
  }

  toggleImage(e) {
   
    e.preventDefault();
    document.getElementsByClassName('image-section')[0].classList.add('toggle-shrink');
    console.log('i am clicked');
  }

  render(){
    return (
    <div className="full-screen-image">
      <Image src={config.imageSrc} className={"image-nitrogen"}/>   
    </div>
    );
  }
};

FullScreenImage.defaultProps = {

};

FullScreenImage.propTypes = {

};

export default FullScreenImage;
