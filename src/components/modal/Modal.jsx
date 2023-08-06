import React from "react";

export const Modal = ({ imageUrl, altText, handleCloseModal }) => {
    return (
        <div onClick={handleCloseModal} className="Overlay" >
            <div className="Modal">
                <img src={imageUrl} alt={altText} />
            </div>
        </div>
    );
};