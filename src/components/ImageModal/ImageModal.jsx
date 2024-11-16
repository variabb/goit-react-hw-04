import ReactModal from "react-modal";

function ImageModal({ image, closeModal }) {
  return (
    <ReactModal
      isOpen={true}
      onRequestClose={closeModal}
      ariaHideApp={false}
      shouldCloseOnEsc={true} 
      shouldCloseOnOverlayClick={true} 
      style={{
        overlay: {
          backgroundColor: "rgba(0, 0, 0, 0.7)", 
          zIndex: 1000,
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        },
        content: {
          background: "transparent",
          border: "none",
          padding: "0",
          textAlign: "center",
          position: "relative",
          zIndex: 1010,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          maxWidth: "100vw",
          maxHeight: "100vh",
          overflow: "hidden", 
        },
      }}
    >
      <div
        style={{
          width: "auto",
          height: "500px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
        }}
        onClick={(e) => e.stopPropagation()} 
      >
        <img
          src={image.urls.regular}
          alt={image.alt_description}
          style={{
            maxWidth: "100%", // Масштабуємо по ширині
            maxHeight: "100%", // Масштабуємо по висоті
            objectFit: "contain", // Зберігаємо пропорції і адаптуємо до екрану
          }}
        />
      </div>
    </ReactModal>
  );
}

export default ImageModal;
