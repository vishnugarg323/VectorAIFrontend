import React from "react";

const ImagePlaceholder = ({ imageColor, imageNumber, handleDrag, handleDrop }) => {
    return (
        <div
            draggable={true}
            id={imageNumber}
            onDragOver={(ev) => ev.preventDefault()}
            onDragStart={handleDrag}
            onDrop={handleDrop}
            style={{
                backgroundColor: imageColor,
                border: "1px solid",
                borderColor: imageColor,
                borderRadius: "5px",
                color: "#FFF",
                width: "30%",
                height: "100px"
            }}
        >
            {imageNumber}
        </div>
    );
};

export default ImagePlaceholder;