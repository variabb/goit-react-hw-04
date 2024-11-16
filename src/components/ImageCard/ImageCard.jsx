import s from "./ImageCard.module.css";

function ImageCard({ image, onClick }) {
  return (
    <div className={s.image}>
      <img
        src={image.urls.small}
        alt={image.alt_description || "Image"}
        onClick={onClick}
      />
    </div>
  );
}
export default ImageCard;
