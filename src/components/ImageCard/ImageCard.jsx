import s from "./ImageCard.module.css";

function ImageCard({image}) {
  return (
    <div className={s.image}>
      <img src={image.urls.small} alt={image.alt_description || "Image"} />
    </div>
  );
}
export default ImageCard;
