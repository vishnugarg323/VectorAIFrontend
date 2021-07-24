import React from "react";
import "./image-container.css";

const Image = ({ image, handleDrag, handleDrop }) => {
  const onClick = (e) => {
    e.target.classList.remove("image-close");
    e.target.classList.add("image-open");
  };

  const keyPressed = (e) => {
    if (e.keyCode === 27) {
      e.target.classList.remove("image-open");
      e.target.classList.add("image-close");
    }
  };

  return (
    <div className="image-div">
      <img
        alt=""
        src={image.src}
        draggable={true}
        id={image.id}
        onDragOver={(ev) => ev.preventDefault()}
        onDragStart={handleDrag}
        onDrop={handleDrop}
        onClick={onClick}
        className="image-close"
        onkeydown={keyPressed}
      />
    </div>
  );
};

export default Image;
