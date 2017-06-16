import React, { PropTypes } from 'react';

const Image = (props) => {

    const { className, handleClick, src } = props;
    return (
        <img src={src} className={className} onClick={handleClick}/>
    );
};

Image.defaultProps = {

};

Image.propTypes = {

};

export default Image;
