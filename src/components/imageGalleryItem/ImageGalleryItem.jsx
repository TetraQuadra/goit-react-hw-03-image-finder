import React, { Component } from "react";

class ImageGalleryItem extends Component {
    render() {
        const { image, index, callback } = this.props;

        return (
            <li onClick={callback} className="ImageGalleryItem" key={index}>
                <img className="ImageGalleryItem-image" src={image.webformatURL} alt={image.tags} />
            </li>
        );
    }
}

export default ImageGalleryItem;
