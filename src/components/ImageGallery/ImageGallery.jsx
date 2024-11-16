import s from "./ImageGallery.module.css";

import ImageCard from "../ImageCard/ImageCard";

function ImageGallery({ images, onImageClick }) {
  return (
    <ul className={s.gallery}>
      {images.map((image) => (
        <li key={image.id} className={s.item}>
          <ImageCard
            image={image}
            onClick={() => onImageClick(image)} 
            style={{ cursor: "pointer" }}
          />
        </li>
      ))}
    </ul>
  );
}
export default ImageGallery;
