// import s from "./ImageCard.module.css";

function ImageCard({image}) {
  return (
    <div>
      <img src={image.urls.small} alt="" />
    </div>
  );
}
export default ImageCard;
