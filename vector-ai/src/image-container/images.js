import { useState } from "react";
import Image from "./image";
import "./image-container.css";

import cat1 from "./../assets/cat1.jpeg";
import cat2 from "./../assets/cat2.jpeg";
import cat3 from "./../assets/cat3.jpeg";
import cat4 from "./../assets/cat4.jpeg";
import cat5 from "./../assets/cat5.jpeg";

const Images = () => {
  const [dragId, setDragId] = useState();
  const [images, setimages] = useState([
    {
      id: "image-1",
      src: cat1,
      order: 1,
    },
    {
      id: "image-2",
      src: cat2,
      order: 2,
    },
    {
      id: "image-3",
      src: cat3,
      order: 3,
    },
    {
      id: "image-4",
      src: cat4,
      order: 4,
    },
    {
      id: "image-5",
      src: cat5,
      order: 5,
    },
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

  return (
    <div className="images-container">
      {images
        .sort((a, b) => a.order - b.order)
        .map((image) => (
          <Image
            key={image.id}
            image={image}
            handleDrag={handleDrag}
            handleDrop={handleDrop}
          />
        ))}
    </div>
  );
};

export default Images;
