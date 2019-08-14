import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

export default function Image({src, alt, figClass, imgClass, figStyle, imgStyle}) {

    const figClasses = classNames([...figClass, 'image']);

    const imgClasses = classNames([...imgClass]);

    return (
        <figure 
            className={figClasses} 
            style={figStyle} 
        >
            <img 
                className={imgClasses} 
                src={src || '../assets/thumbnailDefault.png'} 
                alt={alt} 
                style={imgStyle} 
            />
        </figure>
    )
}

Image.defaultProps = {
    src: '../assets/thumbnailDefault.png',
    alt: 'No image found',
    figClass: [],
    imgClass: [],
    figStyle: {},
    imgStyle: {}
}

Image.propTypes = {
    src: PropTypes.string,
    alt: PropTypes.string,
    figClass: PropTypes.array,
    imgClass: PropTypes.array,
    figStyle: PropTypes.object,
    imgStyle: PropTypes.object
}
