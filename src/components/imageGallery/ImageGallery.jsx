import ImageGalleryItem from 'components/imageGalleryItem/ImageGalleryItem';
import React, { Component } from 'react';

class ImageGallery extends Component {
  render() {
    const { images, handleImageClick } = this.props;

    return (
      <ul className='ImageGallery'>
        {images.map((image, index) => (
          <ImageGalleryItem callback={() => handleImageClick(image.largeImageURL)} key={index} image={image} index={index} />
        ))}
      </ul>

    );
  }
}

export default ImageGallery;
