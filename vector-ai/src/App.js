import React, { useState } from "react";
import './App.css';
import ImagePlaceholder from "./image-placeholder";


const App = () => {
  const [dragId, setDragId] = useState();
  const [images, setimages] = useState([
    {
      id: "image-1",
      color: "red",
      order: 1
    },
    {
      id: "image-2",
      color: "green",
      order: 2
    },
    {
      id: "image-3",
      color: "blue",
      order: 3
    }
  ]);

  const handleDrag = (ev) => {
    setDragId(ev.currentTarget.id);
  };

  const handleDrop = (ev) => {
    const dragimage = images.find((image) => image.id === dragId);
    const dropimage = images.find((image) => image.id === ev.currentTarget.id);

    const dragimageOrder = dragimage.order;
    const dropimageOrder = dropimage.order;

    const newimageState = images.map((image) => {
      if (image.id === dragId) {
        image.order = dropimageOrder;
      }
      if (image.id === ev.currentTarget.id) {
        image.order = dragimageOrder;
      }
      return image;
    });

    setimages(newimageState);
  };

  // const newimageState = images.map((image) => {
  //   if (image.id === dragId) {
  //     image.order = dropImageOrder;
  //   }
  //   if (image.id === ev.currentTarget.id) {
  //     image.order = dragImageOrder;
  //   }
  //   return image;
  // });

  return (
    <div className="App">
      {images
        .sort((a, b) => a.order - b.order)
        .map((image) => (
          <ImagePlaceholder
            key={image.id}
            imageColor={image.color}
            imageNumber={image.id}
            handleDrag={handleDrag}
            handleDrop={handleDrop}
          />
        ))}
    </div>
  );
}
export default App;
