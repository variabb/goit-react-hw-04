import s from "./ImageGallery.module.css";

import ImageCard from "../ImageCard/ImageCard";

function ImageGallery({ images }) {
  return (
    <ul className={s.gallery}>
      {images.map((image) => (
        <li key={image.id} className={s.item}>
          <ImageCard image={image} />
        </li>
      ))}
    </ul>
  );
}
export default ImageGallery;
